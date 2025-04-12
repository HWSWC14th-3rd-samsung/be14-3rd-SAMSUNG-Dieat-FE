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
            <tr v-for="post in posts" :key="post.title">
                <td class="title-cell">{{ post.title }}</td>
                <td>{{ post.author }}</td>
                <td>{{ post.date }}</td>
                <td>{{ post.comments }}</td>
                <td>{{ post.views }}</td>
                <td>{{ post.likes }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
defineProps({
    posts: {
        type: Array,
        required: true
    }
});
</script>