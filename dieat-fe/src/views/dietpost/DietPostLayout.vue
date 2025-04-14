<template>
  <header>
    <Header />
  </header>
  <div class="layout-wrapper">
    <main class="content">
      <!-- 🔹 경로 표시 (오른쪽 정렬 + 헤더 바로 아래) -->
      <div class="breadcrumb">
            <RouterLink to="/" class="text-link">Home &gt; </RouterLink>
            <span>MEAL &gt; </span>
            <RouterLink to="/dietPost" class="text-link">식단 게시글 조회</RouterLink>
        </div>

      <!-- 🔹 제목 + 검색/버튼 그룹 -->
      <div class="top-row">
        <h1 class="page-title">식단 게시글</h1>
        <div class="right-controls">
          <div class="search-section">
            <!-- 드롭다운 메뉴 -->
            <select v-model="selectedSort" class="dropdown">
              <option value="date">등록순</option>
              <option value="views">조회수</option>
              <option value="likes">좋아요순</option>
            </select>

            <!-- 검색창 -->
            <div class="search-bar">
              <input
                v-model="searchKeyword"
                type="text"
                placeholder="검색할 식단을 입력하세요."
              />
              <button @click="handleSearch">🔍</button>
            </div>
          </div>
          <div class="button-group">
            <button class="btn register">식단 등록</button>
            <button class="btn my-posts">나의 게시글</button>
          </div>
        </div>
      </div>


      <!-- 🔹 게시글 목록 -->
      <div class="post-grid">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>

      <!-- 🔹 페이지네이션 -->
      <div class="pagination">
        <button>◀</button>
        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>▶</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PostCard from '@/components/dietpost/PostCard.vue'
import Header from '@/components/common/Header.vue'

const searchKeyword = ref('')
const selectedSort = ref('date')

// 임시 게시글 데이터
const originalPosts = ref([
  { id: 1, title: '닭가슴살 도시락', likes: 12, views: 90, date: '2024-04-01' },
  { id: 2, title: '계란 샐러드', likes: 45, views: 60, date: '2024-03-29' },
  { id: 3, title: '토스트와 스크램블', likes: 78, views: 150, date: '2024-04-05' }
])

const filteredPosts = computed(() => {
  let result = [...originalPosts.value]

  // 제목 검색 (LIKE 검색)
  if (searchKeyword.value.trim()) {
    result = result.filter(post =>
      post.title.includes(searchKeyword.value.trim())
    )
  }

  // 정렬
  if (selectedSort.value === 'likes') {
    result.sort((a, b) => b.likes - a.likes)
  } else if (selectedSort.value === 'views') {
    result.sort((a, b) => b.views - a.views)
  } else {
    result.sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  return result
})

function handleSearch() {
  console.log('🔍 검색:', searchKeyword.value, '정렬:', selectedSort.value)
  // filteredPosts가 자동 업데이트됨
}

const posts = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  nickname: '헬스킹',
  title: `닭가슴살 도시락 ${i + 1}`,
  date: '2025-03-26',
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 10),
  calories: 300 + i,
  carbs: 20 + i,
  protein: 35 - i,
  fat: 10 + i,
  sugar: 2 + i
}))

</script>

<style scoped>
.layout-wrapper {
  width: 100%;
  padding-top: 10px; /* 헤더 고정 고려 */
  background-color: #f9f9f9;
  min-height: 100vh;
}

.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
}

/* 🔹 경로 표시 우측 정렬 */
.breadcrumb {
  display: block;
  text-align: right;
  margin-top: 1rem;
  margin-right: 3rem;
  color: gray;
  flex-wrap: nowrap;
}

  .text-link {
  color: inherit;
  text-decoration: none;
  font-weight: normal;
  cursor: pointer;
}

/* 🔹 제목 + 버튼 정렬 */
.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.page-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: -80px;
  margin-left: -80px;
}

.button-group {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.register,
.my-posts {
  background-color: #0f8f64;
  color: white;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}

.right-controls {
  display: flex;
  flex-direction: column;
  gap: 15rem;
}

@media (min-width: 768px) {
  .right-controls {
    flex-direction: row;
    align-items: center;
  }
}

/* 🔹 검색창 */
.search-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

/* 드롭다운 스타일 */
.dropdown {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #ff5335;
  font-weight: bold;
}

/* 검색창 전체 */
.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #ff5335;
  border-radius: 999px;
  overflow: hidden;
  flex: 1;
}

/* 검색 입력창 */
.search-bar input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  font-size: 0.95rem;
}

/* 검색 버튼 */
.search-bar button {
  padding: 0 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}


/* 🔹 카드 리스트 */
.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* 🔹 페이지네이션 */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.pagination button {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
}

.pagination .active {
  background: #0f8f64;
  color: white;
  font-weight: bold;
}
</style>
