<template>
  <header>
    <Header />
  </header>
  <div class="post-list-page">
    <h2 class="page-title">자유 게시글</h2>

    <!-- 검색 바 컴포넌트 -->
    <PostSearchBar v-model="searchKeyword" />

    <!-- 게시글 등록 버튼 -->
    <div class="post-action">
      <button class="create-button">게시글 등록</button>
    </div>

    <!-- 게시글 테이블 -->
    <FreePostTable :posts="filteredPosts" />

    <!-- 페이지네이션 -->
    <Pagination :total="filteredTotal" :current-page="currentPage" :per-page="postsPerPage"
      @page-change="handlePageChange" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Header from '@/components/common/Header.vue';
import PostSearchBar from '../components/PostSearchBar.vue';
import FreePostTable from '../components/FreePostTable.vue';
// import Pagination from '../components/Pagination.vue';

const searchKeyword = ref('');
const currentPage = ref(1);
const postsPerPage = 10;

const posts = ref([
  { title: '다이어트 중인데 야식 너무 고민돼... 이럴 땐 뭘 먹죠?', author: '지불 빅', date: '2025-04-02', comments: 32, views: 64, likes: 32 },
  { title: '편의점 헬이로 식단 짜본 분...? 뭐 사야 하나요?', author: 'rosie', date: '2025-04-02', comments: 23, views: 84, likes: 43 },
  { title: '빵 너무 먹고 싶은데 쉬운 가능법 좀 있을까요 ㅠㅠ', author: '수지 강', date: '2025-04-02', comments: 53, views: 89, likes: 52 },
  { title: '닭가슴살 20개 있는데... 다 굽는 거 말고 방법 없을까요?', author: 'M K', date: '2025-04-02', comments: 3, views: 13, likes: 3 },
  { title: '비건 식단 해보신 분? 탄력성 + 포만감 유지 균형 중요!', author: '헬간종', date: '2025-04-02', comments: 7, views: 33, likes: 12 },
  { title: '오늘은 식단 포기했어요... 대신 산책 1시간 했습니다', author: 'Jake.go', date: '2025-04-02', comments: 21, views: 122, likes: 32 },
  { title: '하루에 닭가슴살 먹다가 이 악물 현황', author: 'Die.eat', date: '2025-04-02', comments: 65, views: 156, likes: 57 },
  { title: '살은 안빠지는데 왜 자꾸 배고플까요...?', author: 'Eat.everyday', date: '2025-04-02', comments: 43, views: 128, likes: 45 }
]);

const filteredPosts = computed(() => {
  const filtered = posts.value.filter(p => p.title.includes(searchKeyword.value));
  const start = (currentPage.value - 1) * postsPerPage;
  return filtered.slice(start, start + postsPerPage);
});

const filteredTotal = computed(() => {
  return posts.value.filter(p => p.title.includes(searchKeyword.value)).length;
});

function handlePageChange(page) {
  currentPage.value = page;
}
</script>

<style scoped>
/* 기존 스타일 유지 */
</style>