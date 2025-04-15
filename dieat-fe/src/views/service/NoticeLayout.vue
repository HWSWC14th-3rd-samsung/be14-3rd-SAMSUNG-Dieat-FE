<template>
    <div class="notice-page">
        <div class="breadcrumb">
            <RouterLink to="/" class="text-link">Home &gt; </RouterLink>
            <span>Service &gt; </span>
            <RouterLink to="/noticeLayout" class="text-link">공지 사항</RouterLink>
        </div>

        <h1 class="page-title">공지 사항</h1>
        <img src="@/assets/service_img/searching.png" alt="searching bar" class="searchingBar-img" />

        <div class="card-list">
            <div class="card" v-for="(post, index) in noticePosts" :key="index">
                <RouterLink :to="`/noticeDetail/${index + 1}`" class="card-title">
                    {{ post.title }}
                </RouterLink>
                <div class="card-meta">
                    <span>📅 {{ post.date }}</span>
                    <span>👁️ {{ post.count }}</span>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

const noticePosts = ref([
    { title: '공지사항입니다. 공지사항', date: '2025-03-27', count: '18' },
    { title: 'Dieat 서비스 안내', date: '2025-03-27', count: '18' },
    { title: '3월 업데이트 안내', date: '2025-03-24', count: '65' },
    { title: '시스템 점검 시간 안내', date: '2025-03-14', count: '69' },
    { title: '공지사항에는', date: '2025-03-11', count: '73' },
    { title: '또 무슨 공지가 있을까요', date: '2025-03-08', count: '99' },
    { title: '그래서 저희의 요점은', date: '2025-03-01', count: '123' },
    { title: '다잇, 삼성 사랑.', date: '2025-02-27', count: '232' }
])
</script>

<style scoped>
/* 페이지 레이아웃 */
.notice-page {
    max-width: 1024px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Pretendard', sans-serif;
    background-color: var(--color-background);
}

/* 상단 경로 표시 */
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

/* 타이틀 */
.page-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2.5rem;
}

/* 검색바 이미지 */
.searchingBar-img {
    display: block;
    margin: 3rem auto 2rem;
    max-width: 300px;
}

/* 카드 리스트 전체 */
.card-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 4rem;
}

/* 각 카드 */
.card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    padding: 1.5rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

/* 카드 제목 링크 */
.card-title {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    color: #222;
    text-decoration: none;
    margin-bottom: 0.5rem;
}

.card-title:hover {
    color: var(--color-accent);
    text-decoration: underline;
}

/* 카드 메타 정보 */
.card-meta {
    font-size: 0.9rem;
    color: gray;
    display: flex;
    justify-content: space-between;
}

/* 게시글 상세 제목 애니메이션 */
.animated-title {
    cursor: pointer;
    transition: transform 0.2s ease;
}

.animated-title:hover {
    transform: scale(1.05);
    animation: pulseColor 1.2s infinite;
}

@keyframes pulseColor {
    0% {
        color: var(--color-primary);
    }

    50% {
        color: var(--color-accent);
    }

    100% {
        color: var(--color-primary);
    }
}
</style>