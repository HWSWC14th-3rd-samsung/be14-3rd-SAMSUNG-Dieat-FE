<template>
    <div class="qna-page">
        <!-- <div class="breadcrumb">
            <RouterLink to="/" class="text-link">Home &gt; </RouterLink>
            <span>Service &gt; </span>
            <RouterLink to="/qnaLayout" class="text-link">문의 사항</RouterLink>
        </div> -->

        <h1 class="page-title">문의 사항</h1>
        <!-- <img src="@/assets/service_img/searching.png" alt="searching bar" class="searchingBar-img" /> -->
        <div class="qna-actions">
            <img src="@/assets/service_img/registQna.png" alt="문의사항 등록" class="regist-qna" @click="goToRegister" />
        </div>

        <div class="board-wrapper">
            <ServiceTable :posts="pagedPosts" titleHeader="문의 제목" :useLink="true" linkPrefix="/qnaDetail" />
        </div>

        <div class="pagination">
            <button @click="prevPage" :disabled="page === 1">&lt;</button>
            <span>{{ page }}</span>
            <button @click="nextPage" :disabled="page === maxPage">&gt;</button>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import ServiceTable from './ServiceTable.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToRegister = () => {
    router.push('/registQna')
}

const page = ref(1)
const postsPerPage = 5

const qnaPosts = ref([
    { id: 1, title: '성공기 게시글 파일 등록 질문', date: '2025-04-01', count: 100 },
    { id: 2, title: '업데이트 안내', date: '2025-03-29', count: 80 },
    { id: 3, title: '이벤트 공지', date: '2025-03-27', count: 70 },
    { id: 4, title: '시스템 점검', date: '2025-03-25', count: 90 },
    { id: 5, title: '정기 점검 안내', date: '2025-03-23', count: 60 },
    { id: 6, title: '새 기능 소개', date: '2025-03-21', count: 85 },
    { id: 7, title: '긴급 공지', date: '2025-03-19', count: 95 },
    { id: 8, title: '환영합니다', date: '2025-03-17', count: 120 },
])

const maxPage = computed(() => Math.ceil(qnaPosts.value.length / postsPerPage))

const pagedPosts = computed(() => {
    const start = (page.value - 1) * postsPerPage
    return qnaPosts.value.slice(start, start + postsPerPage)
})

function prevPage() {
    if (page.value > 1) page.value--
}

function nextPage() {
    if (page.value < maxPage.value) page.value++
}
</script>

<style scoped>
.qna-page {
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Pretendard', sans-serif;
    background-color: var(--color-background);
}

.breadcrumb {
    text-align: right;
    color: gray;
    margin-bottom: 1rem;
}

.text-link {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

.page-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2.5rem;
}

.searchingBar-img {
    display: block;
    margin: 3rem auto 2rem;
    max-width: 300px;
}

.qna-actions {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
}

.regist-qna {
    width: 180px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.regist-qna:hover {
    transform: scale(1.03);
}

.board-wrapper {
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.pagination {
    text-align: center;
    margin-top: 2rem;
}

.pagination button {
    background: none;
    border: none;
    font-size: 18px;
    margin: 0 10px;
    cursor: pointer;
    color: #333;
}

.pagination button:disabled {
    color: #ccc;
    cursor: default;
}
</style>