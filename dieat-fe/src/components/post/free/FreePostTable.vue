<template>
    <table class="post-table">
        <thead>
            <tr>
                <th>제목</th>
                <th>작성자</th>
                <th>일시</th>
                <th>댓글 수</th>
                <th>조회수</th>
                <th>좋아요</th>
            </tr>
        </thead>
        <tbody>
            <!-- 🔥 게시글이 있을 때 -->
            <tr v-for="(post, index) in posts" :key="index" class="clickable-row">
                <td class="title-cell" @click="goToDetail(post.id)">
                    {{ post.title }}
                </td>
                <td>{{ post.author }}</td>
                <td>{{ post.date }}</td>
                <td>{{ post.comments }}</td>
                <td>{{ post.views }}</td>
                <td>{{ post.likes }}</td>
            </tr>

            <!-- 🔥 게시글이 없을 때에도 구조 유지 -->
            <tr v-if="posts.length === 0">
                <td colspan="6" class="no-result">검색 결과가 없습니다.</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    posts: {
        type: Array,
        required: true
    }
})

const router = useRouter()

function goToDetail(postId) {
    router.push(`/readFree/${postId}`)
}
</script>

<style scoped>
.no-result {
    text-align: center;
    padding: 2rem;
    font-size: 1rem;
    color: #999;
}
</style>