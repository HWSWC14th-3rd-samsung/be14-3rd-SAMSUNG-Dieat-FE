<template>
  <header>
    <Header />
  </header>

  <main class="post-list-page">
    <!-- 제목 -->
    <h2 class="page-title">자유 게시글</h2>

    <!-- 검색창 (가운데 정렬) -->
    <PostSearchBar />

    <!-- 게시글 등록 버튼 (오른쪽 정렬) -->
    <div class="create-button-wrapper">
      <button class="create-button">게시글 등록 📝</button>
    </div>

    <!-- 테이블 -->
    <div class="post-table-wrapper">
      <FreePostTable :posts="filteredPosts" />
    </div>

    <!-- 페이지네이션 -->
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @change="handlePageChange" />

  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import Header from '@/components/common/Header.vue';
import FreePostTable from '../components/FreePostTable.vue';
import PostSearchBar from '../components/PostSearchBar.vue';
import Pagination from '../components/Pagination.vue';

const searchKeyword = ref('');
const currentPage = ref(1);
const postsPerPage = 10;

const posts = ref([
  { title: '단백질 쉐이크 이제 못 먹겠어요... 다른 대체 식품 있을까요?', author: 'jerry0417', date: '2025-04-02', comments: 1, views: 3, likes: 0 },
  { title: '다이어트 중인데 야식 너무 고픈데... 이럴 땐 뭘 먹죠?', author: '지원 박', date: '2025-04-02', comments: 32, views: 64, likes: 32 },
  { title: '편의점 털이로 식단 짜본 분...? 뭐 사야 하나요?', author: 'rosie', date: '2025-04-02', comments: 23, views: 84, likes: 43 },
  { title: '빵 너무 먹고 싶은데 식단 가능한 빵 있을까요 ㅠㅠ', author: '수지 강', date: '2025-04-02', comments: 53, views: 89, likes: 52 },
  { title: '닭가슴살 20팩 있는데... 다 굽는 거 말고 방법 없을까요?', author: 'M K', date: '2025-04-02', comments: 3, views: 13, likes: 3 },
  { title: '비건 식단 해보신 분? 단백질 + 포만감 유지 꿀팁 좀요!', author: '윈터공주', date: '2025-04-02', comments: 7, views: 33, likes: 12 },
  { title: '오늘은 식단 포기했어요... 대신 산책 1시간 했습니다', author: 'Jake_go', date: '2025-04-02', comments: 21, views: 122, likes: 32 },
  { title: '아침에 닭가슴살 먹다가 이 악물 뻔함', author: 'Die_eat', date: '2025-04-02', comments: 65, views: 156, likes: 57 },
  { title: '살은 안 빠지는데 왜 자꾸 배고플까요...?', author: 'Eat_everyday', date: '2025-04-02', comments: 43, views: 128, likes: 45 }
]);

const filteredPosts = computed(() => {
  const filtered = posts.value.filter(p => p.title.includes(searchKeyword.value));
  const start = (currentPage.value - 1) * postsPerPage;
  return filtered.slice(start, start + postsPerPage);
});

const filteredTotal = computed(() => {
  return posts.value.filter(p => p.title.includes(searchKeyword.value)).length;
});

const totalPages = computed(() => Math.ceil(filteredTotal.value / postsPerPage));

function handlePageChange(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
</script>