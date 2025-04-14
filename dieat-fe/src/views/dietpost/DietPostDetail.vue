<template>
  <Header />

  <div class="post-detail">
    <!-- 제목 + 드롭다운 버튼 -->
    <div class="top-section">
      <h1 class="page-title">식단 게시글</h1>
    </div>

    <!-- 경로 표시 -->
    <div class="breadcrumb">
      <RouterLink to="/" class="text-link">Home &gt; </RouterLink>
      <span>MEAL &gt; </span>
      <RouterLink to="/dietPost" class="text-link">식단 게시글 조회</RouterLink>
      <button class="back-btn" @click="goToList">목록 보기</button>
    </div>

    <!-- 게시글 내용 -->
    <div class="post-container">
      <!-- 제목 + MoreMenu2 -->
      <div class="post-title-row">
        <h2 class="post-title">🔍 {{ post.title }}</h2>
      </div>

      <!-- 작성자 정보 -->
      <div class="info">
        <div class="info-block">
          <span class="label">작성자</span>
          <span class="bar">|</span>
          <span class="value">{{ post.nickname }}</span>
        </div>
        <div class="info-block">
          <span class="label">작성일시</span>
          <span class="bar">|</span>
          <span class="value">{{ post.date }}</span>
        </div>
        <div class="info-block">
          <span class="label">조회수</span>
          <span class="bar">|</span>
          <span class="value">{{ post.views }}</span>
        </div>
     </div>
    <MoreMenu2 />

    <!-- ✅ 메인 이미지 + 화살표 버튼 + 썸네일 이미지 추가 -->
<div class="image-description-box">
  <!-- 메인 이미지 + 좌우 이동 버튼 -->
  <div class="image-slider">
    <button class="arrow-btn" v-if="currentImageIndex > 0" @click="prevImage">◀</button>
    <img :src="images[currentImageIndex]" alt="식단 이미지" class="main-img" />
    <button class="arrow-btn" v-if="currentImageIndex < images.length - 1" @click="nextImage">▶</button>
  </div>

  <!-- 썸네일 리스트 -->
  <div class="thumbnail-list">
    <img
      v-for="(img, idx) in images"
      :key="idx"
      :src="img"
      :class="{ selected: idx === currentImageIndex }"
      @click="currentImageIndex = idx"
    />
  </div>

  <!-- 설명 -->
  <p class="description">{{ post.description }}</p>
</div>


      <!-- 상세 영양 리스트 -->
<div class="nutrition-detail">
  <div
    class="nutrition-item"
    v-for="(item, index) in post.items"
    :key="index"
  >
    <div class="left-info">
      <span class="badge">회원</span>
      <div class="name-block">
        <div class="name">{{ item.name }}</div>
        <div class="unit">100g / 1인분</div>
      </div>
    </div>

    <div class="nutrients">
      <div class="nutrient">
        <strong>{{ item.kcal }}</strong>
        <span>kcal</span>
      </div>
      <div class="nutrient">
        <strong>{{ item.carbs }}</strong>
        <span>탄수화물</span>
      </div>
      <div class="nutrient">
        <strong>{{ item.protein }}</strong>
        <span>단백질</span>
      </div>
      <div class="nutrient">
        <strong>{{ item.fat }}</strong>
        <span>지방</span>
      </div>
      <div class="nutrient">
        <strong>{{ item.sugar }}</strong>
        <span>당</span>
      </div>
    </div>

      <div class="quantity">
        <div class="label">수량</div>
        <div class="value">1</div>
      </div>
  </div>
</div>

      <!-- 총 영양 정보 -->
      <div class="summary">
        <h3>영양 정보</h3>
        <div class="summary-content">
          <div class="summary-left">
            <p>총 열량: <strong>{{ post.total.kcal }} kcal</strong></p>
            <p>총 탄수화물: <strong>{{ post.total.carbs }} g</strong></p>
            <p>총 단백질: <strong>{{ post.total.protein }} g</strong></p>
            <p>총 지방: <strong>{{ post.total.fat }} g</strong></p>
            <p>총 당: <strong>{{ post.total.sugar }} g</strong></p>
          </div>
          <div class="summary-chart">
            <NutrientChart
              :carbs="post.total.carbs"
              :protein="post.total.protein"
              :fat="post.total.fat"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 좋아요 및 댓글 -->
  <div class="interaction">
        ❤️ 좋아요 {{ post.likes }} &nbsp;&nbsp;&nbsp; 💬 댓글 {{ post.comments.length }}
      </div>

      <!-- 댓글 목록 -->
      <div class="comment-list">
        <div class="comment" v-for="(c, i) in post.comments" :key="i">
          <strong>{{ c.writer }}</strong>: {{ c.content }}
        </div>
      </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/common/Header.vue'
import MoreMenu2 from '@/components/dietpost/MoreMenu2.vue'
import imgMain from '@/assets/dietpost/diet_post_img.png'
import imgSub1 from '@/assets/dietpost/diet_sub_img1.png'
import imgSub2 from '@/assets/dietpost/diet_sub_img2.png'
import NutrientChart from '@/components/dietpost/NutrientChart.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function goToList() {
  router.push('/dietPost')
}

// ✅ 썸네일 슬라이드 상태 관리 (추가)
const images = [imgMain, imgSub1, imgSub2]
const currentImageIndex = ref(0)

const nextImage = () => {
  if (currentImageIndex.value < images.length - 1) currentImageIndex.value++
}
const prevImage = () => {
  if (currentImageIndex.value > 0) currentImageIndex.value--
}

const post = {
  title: '스크램블 에그와 토스트 조합!',
  nickname: '웰시킹',
  date: '2025-04-02 14:00:00',
  views: 50,
  description: '담백하면서도 고소한 스크램블 에그와 토스트입니다...',
  likes: 59,
  items: [
    { name: '스크램블 에그', kcal: 177, carbs: 1.9, protein: 12, fat: 13, sugar: 1 },
    { name: '토스트', kcal: 148, carbs: 16, protein: 10, fat: 7, sugar: 1 }
  ],
  total: { kcal: 1200, carbs: 500, protein: 300, fat: 200, sugar: 10 },
  comments: [
    { writer: '열치열', content: '얼치 143g 피스 미쳤다..' },
    { writer: '헬도리군', content: '상상보다 헬치!' }
  ]
}
</script>

<style scoped>
.post-detail {
  padding-top: 10px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: sans-serif;
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.page-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
}

.breadcrumb {
  text-align: right;
  margin: 1rem 1rem 10px;
  color: gray;
}

.text-link {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.back-btn {
  margin-left: 1rem;
  background: #f5f5f5;
  border: 1px solid #ccc;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.post-container {
  border: 1px solid #2caa88;
  border-radius: 12px;
  padding: 1.5rem;
}

.post-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-title {
  font-size: 2rem;
  font-weight: bold;
}

.info {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: #333;
  align-items: center;
}

.info-block {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bar {
  color: #999;
}

.image-description-box {
  border: 1.5px solid #aaa;
  border-radius: 12px;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #fefefe;
}

.image-slider {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-img {
  width: 60%;
  display: block;
  margin: 1rem auto; /* 가운데 정렬 */
  border-radius: 12px;
}

.arrow-btn {
  position: absolute;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  top: 45%;
}

.arrow-btn:first-child {
  left: 10px;
}
.arrow-btn:last-child {
  right: 10px;
}

.thumbnail-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
}

.thumbnail-list img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
}

.thumbnail-list img.selected {
  border: 2px solid #2caa88;
}


.description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.nutrition-detail {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.nutrition-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 10px;
  background: #fff;
  flex-wrap: wrap;
}

.left-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  min-width: 180px;
}

.badge {
  background-color: #0f8f64;
  color: white;
  padding: 2px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
}

.name-block .name {
  font-weight: bold;
  font-size: 1rem;
}

.name-block .unit {
  font-size: 0.75rem;
  color: #777;
}

.nutrients {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.nutrient {
  background-color: #f5f5f5;
  padding: 6px 10px;
  border-radius: 8px;
  text-align: center;
  min-width: 60px;
  font-size: 0.8rem;
}

.nutrient strong {
  display: block;
  font-size: 1rem;
}

.quantity {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #555;
  min-width: 60px;
}

.quantity .value {
  margin-top: 4px;
  background-color: #f0f0f0;
  padding: 4px 10px;
  border-radius: 6px;
}


.food-name {
  font-weight: bold;
  color: #333;
}

.summary {
  background: #f9f9f9;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
}

.summary-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
}

.summary-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.summary-left {
  flex: 1;
  min-width: 250px;
  font-size: 0.95rem;
  line-height: 1.8;
}

.summary-chart {
  width: 250px;
  height: 250px;
}

.interaction {
  margin-top: 1.5rem;
  font-weight: bold;
  color: #d44;
}

.comment-list {
  margin-top: 1rem;
}

.comment {
  margin-bottom: 0.5rem;
}
</style>
