<!-- Pagination.vue -->
<template>
    <div class="pagination">
        <span @click="$emit('change', currentPage - 1)">◀</span>
        <span v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"
            @click="$emit('change', page)">
            {{ page }}
        </span>
        <span @click="$emit('change', currentPage + 1)">▶</span>
    </div>
</template>

<script setup>
defineProps({
    currentPage: Number,
    totalPages: Number
});
</script>