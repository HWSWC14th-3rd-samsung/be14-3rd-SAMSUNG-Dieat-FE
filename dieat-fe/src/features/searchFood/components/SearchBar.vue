<template>
    <div class="search-section">
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            placeholder="검색할 음식명을 입력해 주세요" />
        <!-- <button @click="$emit('search')">🔍</button> -->
        <button class="icon-button" @click="$emit('add')">➕</button>
        <button class="icon-button" @click="$emit('settings')">⚙️</button>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
    },
};
</script>