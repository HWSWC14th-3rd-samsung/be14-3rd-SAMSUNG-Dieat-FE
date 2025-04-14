<template>

    <main class="post-detail-page-container">
        <h2 class="page-title">자유 게시글</h2>

        <div class="container" v-if="post">
            <div class="post-card">
                <PostDetailHeader :post="post" />
                <PostContent :content="post.content" :imageUrl="post.imageUrl" />
            </div>

            <PostInteraction :initialLikes="post.likes" :commentCount="comments.length" />
            <PostCommentInput @submit="handleAddComment" />
            <PostCommentList :comments="comments" />
        </div>

        <div v-else class="loading">게시글을 불러오는 중입니다...</div>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Header from '@/components/common/Header.vue'
import PostDetailHeader from '@/components/post/free/PostHeader.vue';
import PostContent from '@/components/post/free/PostContent.vue';
import PostCommentInput from '@/components/post/free/PostCommentInput.vue';
import PostCommentList from '@/components/post/free/PostCommentList.vue';
import PostInteraction from '@/components/post/free/PostInteraction.vue'

import { useRoute } from 'vue-router';
import { fetchPostById } from '@/api/freePostApi.js';

const route = useRoute();
const postId = route.params.postId;

const post = ref(null);

onMounted(async () => {
    try {
        post.value = await fetchPostById(postId);
    } catch (err) {
        console.error('상세 게시글 로딩 실패:', err);
    }
});

const comments = ref([
    { author: 'rosie', content: '와 진짜 해볼게요!', date: '2025-04-12' },
    { author: 'M K', content: '스리라차 꿀팁 감사합니다~', date: '2025-04-13' }
]);

function handleAddComment(newComment) {
    comments.value.push({
        author: '익명 사용자',
        content: newComment,
        date: new Date().toISOString().slice(0, 10)
    });
}
</script>

<style src="@/assets/post/readFreeDetail.css"></style>