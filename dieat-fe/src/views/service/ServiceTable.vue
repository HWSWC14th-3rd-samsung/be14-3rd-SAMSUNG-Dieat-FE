<template>
    <table class="post-table">
        <thead>
            <tr>
                <th style="width: 10%">No.</th>
                <th style="width: 50%">{{ titleHeader }}</th>
                <th style="width: 20%">일시</th>
                <th style="width: 20%">조회수</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(post, index) in posts" :key="index" class="clickable-row" @click="goToDetail(index)">
                <td>{{ index + 1 }}</td>
                <td class="title-cell">
                    <RouterLink :to="`${linkPrefix}/${index}`">{{ post.title }}</RouterLink>
                </td>
                <td>{{ post.date }}</td>
                <td>{{ post.count }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    posts: {
        type: Array,
        required: true
    },
    titleHeader: {
        type: String,
        default: '제목'
    },
    useLink: {
        type: Boolean,
        default: true
    },
    linkPrefix: {
        type: String,
        default: '/noticeDetail'
    }
})

const router = useRouter()

function goToDetail(index) {
    if (props.useLink) {
        router.push(`${props.linkPrefix}/${index}`)
    }
}
</script>

<style scoped>
.post-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
    margin-top: 1.5rem;
    font-family: 'Pretendard', sans-serif;
}

/* 테이블 헤더 */
.post-table thead th {
    background-color: var(--color-primary);
    color: #fff;
    padding: 14px 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 8px;
}

/* 테이블 바디 셀 */
.post-table tbody td {
    background-color: #fff;
    padding: 16px 12px;
    text-align: center;
    font-size: 14px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

/* 행 hover 효과 */
.clickable-row {
    cursor: pointer;
}

.clickable-row:hover td {
    background-color: #f9f9f9;
    transform: scale(1.01);
}

/* 제목은 좌측 정렬 */
.title-cell {
    text-align: left;
    padding-left: 16px;
    font-weight: 500;
}

/* 링크 스타일 */
.title-cell a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
}

.title-cell a:hover {
    animation: pulseColor 1s infinite;
}

@keyframes pulseColor {
    0% {
        color: var(--color-primary);
    }

    50% {
        color: var(--color-accent);
    }

    100% {
        color: var(--color-primary);
    }
}
</style>