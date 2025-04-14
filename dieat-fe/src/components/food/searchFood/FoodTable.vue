<template>
    <table class="food-table">
        <thead>
            <tr>
                <th class="wide">음식명</th>
                <th>기준 단위</th>
                <th>열량</th>
                <th>탄수화물</th>
                <th>단백질</th>
                <th>지방</th>
                <th>당</th>
                <th>정확해요</th>
                <th>수정이 필요해요</th>
                <th>닉네임</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id" class="clickable-row" @click="emit('add-to-basket', item)">
                <td class="wide">{{ item.name }}</td>
                <td>{{ item.unit }}</td>
                <td>{{ item.kcal }}</td>
                <td>{{ item.carb }}</td>
                <td>{{ item.protein }}</td>
                <td>{{ item.fat }}</td>
                <td>{{ item.sugar }}</td>
                <td>
                    <button class="vote-button" :class="{ active: getUserVote(item.id) === 'accurate', primary: true }"
                        :disabled="!canVote(item, 'accurate')" @click.stop="vote(item.id, 'accurate')">
                        {{ getLocalVoteCount(item.id, 'accurate') }}
                    </button>
                </td>
                <td>
                    <button class="vote-button" :class="{ active: getUserVote(item.id) === 'inaccurate', accent: true }"
                        :disabled="!canVote(item, 'inaccurate')" @click.stop="vote(item.id, 'inaccurate')">
                        {{ getLocalVoteCount(item.id, 'inaccurate') }}
                    </button>
                </td>
                <td>{{ item.nickname }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const props = defineProps({
    items: Array,
    userId: {
        type: [String, Number],
        default: null
    }
})

const emit = defineEmits(['add-to-basket'])

const localVotes = reactive({})

onMounted(() => {
    const raw = localStorage.getItem('voteStatus')
    if (raw) {
        Object.assign(localVotes, JSON.parse(raw))
    }
})

function getUserVote(foodId) {
    return localVotes[getVoteKey(foodId)] || null;
}

function getVoteKey(foodId) {
    return props.userId ? `vote_${props.userId}_${foodId}` : `guest_${foodId}`
}

function canVote(item, type) {
    if (item.nickname === '공공 데이터') return false;

    const key = getVoteKey(item.id);
    const current = localVotes[key];

    // 아무것도 누르지 않았으면 둘 다 가능
    if (!current) return true;

    // 이미 눌렀던 것과 다르면 바꿀 수 있음
    return current !== type;
}

function vote(foodId, type) {
    const key = getVoteKey(foodId);
    const prev = localVotes[key];

    // 같은 걸 다시 누르는 경우 무시
    if (prev === type) return;

    // 프론트엔드 반영
    const item = props.items.find(f => f.id === foodId);
    if (!item) return;

    // 이전 투표 반영 취소
    if (prev && item[prev] > 0) item[prev]--;

    // 새로운 투표 반영
    item[type]++;
    localVotes[key] = type;
    localStorage.setItem('voteStatus', JSON.stringify(localVotes));

    // 로그인된 사용자면 PATCH 요청
    if (props.userId) {
        fetch(`http://localhost:3000/food/${foodId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                [prev]: Math.max((item[prev] || 1) - 1, 0),
                [type]: (item[type] || 0)
            })
        });
    }
}

function getLocalVoteCount(foodId, type) {
    const item = props.items.find(f => f.id === foodId)
    return item ? item[type] : 0
}
</script>

<style scoped>
.vote-button {
    background: transparent;
    border: none;
    cursor: pointer;
}

.vote-button:disabled {
    opacity: 0.5;
    cursor: default;
}

.vote-button.active.primary {
    color: var(--color-primary);
}

.vote-button.active.accent {
    color: var(--color-accent);
}
</style>