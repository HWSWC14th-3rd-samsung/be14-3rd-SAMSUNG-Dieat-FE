<template>
    <div class="search-section">
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            placeholder="검색할 음식명을 입력해 주세요" />
        <button class="icon-button" @click="$emit('add')">✛</button>
        <div class="dropdown-wrapper">
            <button class="icon-button" @click="toggleFilter">☰</button>

            <!-- 🔥 드롭다운 내부에서 직접 렌더링 -->
            <div v-if="showFilter" class="filter-dropdown">
                <ul>
                    <li @click="$emit('selectFilter', 'latest')">최신순</li>
                    <li @click="$emit('selectFilter', 'accuracy')">정확도순</li>
                    <li @click="$emit('selectFilter', 'ratio')">정확도 비율순</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue', 'add', 'selectFilter']);

const showFilter = ref(false);

function toggleFilter() {
    showFilter.value = !showFilter.value;
}
</script>