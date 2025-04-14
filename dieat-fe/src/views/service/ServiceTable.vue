<template>
    <table class="post-table">
        <thead>
            <tr>
                <th class="no-col">No.</th>
                <th class="title-col">제목</th>
                <th class="date-col">일시</th>
                <th class="count-col">조회수</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(post, index) in posts" :key="index">
                <td class="no-col">{{ index + 1 }}</td>
                <td class="title-col">{{ post.title }}</td>
                <td class="date-col">{{ post.date }}</td>
                <td class="count-col">{{ post.count }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
defineProps({
    posts: {
        type: Array,
        required: true,
    },
})
</script>

<style scoped>
.post-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
    margin-top: 1rem;
    font-size: 15px;
}

.post-table thead th {
    background-color: #f2f2f2;
    font-weight: 600;
    text-align: center;
    padding: 12px;
    border-bottom: 2px solid #ccc;
    border-radius: 6px;
}

.post-table tbody td {
    background-color: #ffffff;
    padding: 16px 12px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    font-size: 14px;
}

/* 열 정렬 */
.no-col {
    text-align: right;
    width: 10%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.title-col {
    text-align: left;
    width: 50%;
}

.date-col {
    text-align: center;
    width: 20%;
}

.count-col {
    text-align: right;
    width: 20%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

/* hover 효과 */
.post-table tbody tr:hover td {
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
}
</style>