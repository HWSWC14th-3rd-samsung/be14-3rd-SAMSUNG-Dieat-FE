<template>
    <div class="post-content-wrapper">
        <div class="post-text">
            <p v-html="content" />
        </div>
        <div v-if="imageUrl" class="post-image">
            <img :src="imageUrl" alt="게시글 이미지" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    content: String,
    imageUrl: String
});
</script>