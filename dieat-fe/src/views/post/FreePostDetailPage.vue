<template>
    <header>
        <Header />
    </header>

    <main class="post-detail-page">
        <h2 class="page-title">자유 게시글</h2>
        
        <div class="container" v-if="post">
            <PostDetailHeader :post="post" />
            <PostContent :content="post.content" :imageUrl="post.imageUrl" />
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

onMounted(async () => {
    try {
        post.value = await fetchPostById(postId);
    } catch (err) {
        console.error('상세 게시글 로딩 실패:', err);
    }
});

const post = ref(null);

// 더미 데이터
// const post = ref({
//     title: '닭가슴살 레시피 공유합니다! 🍗',
//     author: 'jerry0417',
//     date: '2025-04-12',
//     views: 123,
//     likes: 15,
//     content: `다들 닭가슴살 먹기 힘드시죠?  
//   오늘은 제가 직접 해본 꿀 레시피를 공유해볼게요!  
//   1. 닭가슴살을 슬라이스해서  
//   2. 에어프라이어에 바삭하게  
//   3. 스리라차 + 꿀 조합으로 마무리!!`
// });

const comments = ref([
    { author: 'rosie', content: '와 진짜 해볼게요!', date: '2025-04-12' },
    { author: 'M K', content: '스리라차 꿀팁 감사합니다~', date: '2025-04-13' }
]);

// 댓글 추가
function handleAddComment(newComment) {
    comments.value.push({
        author: '익명 사용자',
        content: newComment,
        date: new Date().toISOString().slice(0, 10)
    });
}
</script>

<style src="@/assets/post/readFreeDetail.css"></style>