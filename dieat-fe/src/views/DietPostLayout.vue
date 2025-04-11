<template>
    <header>
        <Header />
    </header>
    <div class="diet-post-layout">
      <h1>식단 게시판</h1>
  
      <!-- 🔍 검색 및 필터 영역 -->
      <div class="filter-bar">
        <input
          v-model="filters.keyword"
          type="text"
          placeholder="식단 키워드를 입력하세요"
          class="filter-input"
        />
  
        <div class="nutrient-filters">
          <div class="filter-group">
            <label>칼로리</label>
            <input v-model.number="filters.minCalories" type="number" placeholder="최소" />
            <input v-model.number="filters.maxCalories" type="number" placeholder="최대" />
          </div>
          <div class="filter-group">
            <label>단백질</label>
            <input v-model.number="filters.minProtein" type="number" placeholder="최소" />
            <input v-model.number="filters.maxProtein" type="number" placeholder="최대" />
          </div>
          <div class="filter-group">
            <label>탄수화물</label>
            <input v-model.number="filters.minCarbs" type="number" placeholder="최소" />
            <input v-model.number="filters.maxCarbs" type="number" placeholder="최대" />
          </div>
          <div class="filter-group">
            <label>지방</label>
            <input v-model.number="filters.minFat" type="number" placeholder="최소" />
            <input v-model.number="filters.maxFat" type="number" placeholder="최대" />
          </div>
          <div class="filter-group">
            <label>당</label>
            <input v-model.number="filters.minSugar" type="number" placeholder="최소" />
            <input v-model.number="filters.maxSugar" type="number" placeholder="최대" />
          </div>
        </div>
  
        <button class="search-button" @click="searchPosts">검색</button>
      </div>
  
      <!-- 📝 게시물 리스트 -->
      <div class="post-list">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import PostCard from '../components/PostCard.vue'
  import Header from '@/components/common/Header.vue'
  
  const posts = [
    {
      id: 1,
      title: '닭가슴살 도시락',
      img: 'diet1.jpg',
      likes: 25,
      comments: 5
    },
    {
      id: 2,
      title: '아보카도 샐러드',
      img: 'diet2.jpg',
      likes: 12,
      comments: 3
    },
    {
      id: 3,
      title: '단호박 샐러드',
      img: 'diet3.jpg',
      likes: 18,
      comments: 7
    }
  ]
  
  const filters = reactive({
    keyword: '',
    minCalories: null,
    maxCalories: null,
    minProtein: null,
    maxProtein: null,
    minCarbs: null,
    maxCarbs: null,
    minFat: null,
    maxFat: null,
    minSugar: null,
    maxSugar: null
  })
  
  function searchPosts() {
    console.log('검색 실행됨:', filters)
    // 추후 API 연동 시 필터값을 서버로 넘겨주면 됩니다.
  }
  </script>
  
  <style scoped>
  .diet-post-layout {
    padding: 2rem;
    max-width: 960px;
    margin: 0 auto;
  }
  
  .filter-bar {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .filter-input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .nutrient-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .filter-group {
    display: flex;
    flex-direction: column;
    width: 150px;
  }
  
  .filter-group input {
    margin-top: 4px;
    margin-bottom: 6px;
    padding: 0.3rem;
  }
  
  .search-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #008080;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .post-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  </style>
  