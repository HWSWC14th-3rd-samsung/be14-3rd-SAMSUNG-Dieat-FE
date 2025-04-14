<template>
  <header>
    <Header />
  </header>

  <main class="post-list-page">
    <h2 class="page-title">자유 게시글</h2>

    <PostSearchBar />

    <div class="create-button-wrapper">
      <button class="create-button">게시글 등록 📝</button>
    </div>

    <div class="post-table-wrapper">
      <FreePostTable :posts="paginatedPosts" />
    </div>

    <Pagination :current-page="currentPage" :total-pages="totalPages" :range="2" @change="handlePageChange" />
  </main>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { fetchPosts } from '@/api/freePostApi.js';
import Header from '@/components/common/Header.vue';
import FreePostTable from '@/components/post/free/FreePostTable.vue';
import PostSearchBar from '@/components/post/free/PostSearchBar.vue';
import Pagination from '@/components/post/free/Pagination.vue';

const searchKeyword = ref('');
const currentPage = ref(1);
const postsPerPage = 10;

watch(searchKeyword, () => {
  currentPage.value = 1;
});

onMounted(async () => {
  try {
    posts.value = await fetchPosts();
  } catch (err) {
    console.error('게시글 불러오기 실패:', err);
  }
});

const posts = ref([]);

const filtered = computed(() =>
  posts.value.filter(p => p.title.includes(searchKeyword.value))
);

const totalPages = computed(() =>
  Math.ceil(filtered.value.length / postsPerPage)
);

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  return filtered.value.slice(start, start + postsPerPage);
});

function handlePageChange(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
</script>

<style src="@/assets/post/readFreeList.css"></style>