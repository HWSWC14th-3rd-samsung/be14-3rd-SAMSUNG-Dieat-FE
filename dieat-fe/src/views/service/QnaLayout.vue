<template>
    <div class="page-wrapper">
        <div class="breadcrumb">
            <RouterLink to="/" class="text-link">Home &gt; </RouterLink>
            <span>Service &gt; </span>
            <RouterLink to="/qnaLayout" class="text-link">문의 사항</RouterLink>
        </div>

        <h1>문의 사항</h1>

        <img src="@/assets/service_img/searching.png" alt="searching bar" class="searchingBar-img" />
        <img src="@/assets/service_img/registQna.png" alt="문의사항 등록" class="regist-qna" @click="goToRegister" />

        <div class="board-wrapper">
            <ServiceTable :posts="pagedPosts" titleHeader="공지 제목" :useLink="true" linkPrefix="/qnaDetail" />
        </div>

        <div class="pagination">
            <button @click="prevPage" :disabled="page === 1">&lt;</button>
            <span>{{ page }}</span>
            <button @click="nextPage" :disabled="page === maxPage">&gt;</button>
        </div>
    </div>

    <br /><br /><br /><br />
    <Footer />
</template>

<script setup>
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
    { title: '성공기 게시글 파일 등록 질문', date: '2025-04-01', count: 100 },
    { title: '업데이트 안내', date: '2025-03-29', count: 80 },
    { title: '이벤트 공지', date: '2025-03-27', count: 70 },
    { title: '시스템 점검', date: '2025-03-25', count: 90 },
    { title: '정기 점검 안내', date: '2025-03-23', count: 60 },
    { title: '새 기능 소개', date: '2025-03-21', count: 85 },
    { title: '긴급 공지', date: '2025-03-19', count: 95 },
    { title: '환영합니다', date: '2025-03-17', count: 120 }
])

const maxPage = computed(() => Math.ceil(qnaPosts.value.length / postsPerPage))

const pagedPosts = computed(() =>
    qnaPosts.value.slice((page.value - 1) * postsPerPage, page.value * postsPerPage)
)

function prevPage() {
    if (page.value > 1) page.value--
}

function nextPage() {
    if (page.value < maxPage.value) page.value++
}
</script>

<style scoped>
.page-wrapper {
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.breadcrumb {
    text-align: right;
    color: gray;
    margin-bottom: 1rem;
}

.text-link {
    color: inherit;
    text-decoration: none;
    font-weight: normal;
    cursor: pointer;
}

h1 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
}

.searchingBar-img {
    display: block;
    margin: 2rem auto;
    max-width: 100%;
    height: auto;
}

.regist-qna {
    display: block;
    margin-left: auto;
    margin-bottom: 1.5rem;
    max-width: 160px;
    cursor: pointer;
}

.board-wrapper {
    margin-top: 1rem;
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

@media (max-width: 768px) {
    .regist-qna {
        margin-right: auto;
        margin-left: auto;
    }
}
</style>