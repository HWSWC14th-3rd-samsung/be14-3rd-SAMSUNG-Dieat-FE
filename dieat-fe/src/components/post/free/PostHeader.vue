<template>
    <div class="post-header">
        <h3 class="post-title">{{ post.title }}</h3>

        <div class="post-meta">
            <span class="meta-item"><strong>작성자</strong> | {{ post.author }}</span>
            <span class="meta-item"><strong>작성일</strong> | {{ post.date }}</span>
            <span class="meta-item"><strong>조회수</strong> | {{ post.views }}</span>
            <span class="meta-item"><strong>좋아요</strong> | {{ post.likes }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    post: {
        type: Object,
        default: () => ({})
    }
});
</script>