<template>
    <div class="post-interaction">
        <span class="like" :class="{ liked: liked }" @click="handleToggle">
            ❤️ 좋아요 {{ likes }}
        </span>
        <span>댓글 {{ commentCount }}</span>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    initialLikes: Number,
    commentCount: Number,
    liked: Boolean
});

const emit = defineEmits(['toggle-like']);

const likes = ref(props.initialLikes);
const liked = ref(props.liked);

watch(() => props.initialLikes, val => (likes.value = val));
watch(() => props.liked, val => (liked.value = val));

function handleToggle() {
    emit('toggle-like');
}
</script>