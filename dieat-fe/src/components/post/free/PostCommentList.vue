<template>
    <div class="comment-list-wrapper">
        <h3 class="comment-list-title">댓글 {{ comments.length }}개</h3>
        <ul class="comment-list">
            <li v-for="(comment, index) in comments" :key="index" class="comment-item">
                <div class="comment-header">
                    <span class="comment-author">{{ comment.author }}</span>
                    <span class="comment-date">{{ comment.date }}</span>
                </div>
                <div class="comment-content">
                    {{ comment.content }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    comments: {
        type: Array,
        required: true
    }
});
</script>