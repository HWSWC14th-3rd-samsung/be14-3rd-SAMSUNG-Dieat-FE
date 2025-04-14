<template>

    <main class="post-detail-page-container">
        <h2 class="page-title">자유 게시글</h2>

        <div class="container" v-if="post">
            <div class="post-card">
                <PostDetailHeader :post="post" :likes="likes" />
                <PostContent :content="post.content" :imageUrl="post.imageUrl" />
            </div>

            <PostInteraction :initialLikes="likes" :commentCount="comments.length" :liked="likedByUser"
                @toggle-like="handleLikeToggle" />
            <PostCommentInput @submit="handleAddComment" />
            <PostCommentList :comments="comments" />
        </div>

        <div v-else class="loading">게시글을 불러오는 중입니다...</div>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/common/Header.vue';
import PostDetailHeader from '@/components/post/free/PostHeader.vue';
import PostContent from '@/components/post/free/PostContent.vue';
import PostCommentInput from '@/components/post/free/PostCommentInput.vue';
import PostCommentList from '@/components/post/free/PostCommentList.vue';
import PostInteraction from '@/components/post/free/PostInteraction.vue';
import { fetchPostById } from '@/api/freePostApi.js';

// ✅ 로그인 사용자 정보
const user = {
    id: 1,
    nickname: '50071'
};

const route = useRoute();
const postId = route.params.postId;

const post = ref(null);
const comments = ref([]);
const likes = ref(0);
const likedByUser = ref(false);

onMounted(async () => {
    try {
        const fetched = await fetchPostById(postId);
        post.value = fetched;
        comments.value = fetched.comments || [];
        likes.value = fetched.likes || 0;

        // ✅ localStorage에 user 기준으로 좋아요 여부 확인
        const likedKey = `liked_post_${postId}_user_${user.id}`;
        likedByUser.value = localStorage.getItem(likedKey) === 'true';
    } catch (err) {
        console.error('상세 게시글 로딩 실패:', err);
    }
});

function handleAddComment(newContent) {
    const newComment = {
        author: user.nickname,
        content: newContent,
        date: new Date().toISOString().slice(0, 10)
    };
    comments.value.push(newComment);

    fetch(`http://localhost:3000/freeposts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comments: comments.value })
    });
}

function handleLikeToggle() {
    const likedKey = `liked_post_${postId}_user_${user.id}`;

    if (likedByUser.value) {
        // 좋아요 취소
        likes.value--;
        likedByUser.value = false;
        localStorage.removeItem(likedKey);
    } else {
        // 좋아요 추가
        likes.value++;
        likedByUser.value = true;
        localStorage.setItem(likedKey, 'true');
    }

    fetch(`http://localhost:3000/freeposts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: likes.value })
    });
}
</script>

<style src="@/assets/post/readFreeDetail.css"></style>