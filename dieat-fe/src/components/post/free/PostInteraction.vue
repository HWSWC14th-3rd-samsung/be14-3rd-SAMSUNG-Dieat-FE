<template>
    <div class="interaction-wrapper">
        <div class="like-section">
            <button class="like-button" @click="toggleLike">
                <span :class="{ liked: isLiked }">❤️</span>
                좋아요 {{ likeCount }}
            </button>
        </div>
        <div class="comment-count">댓글 {{ commentCount }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    initialLikes: Number,
    commentCount: Number,
});

const isLiked = ref(false);
const likeCount = ref(props.initialLikes);

function toggleLike() {
    isLiked.value = !isLiked.value;
    likeCount.value += isLiked.value ? 1 : -1;
}
</script>