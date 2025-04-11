<template>
  <div class="post-card">
    <!-- 👤 사용자 정보 + 상단 바 -->
    <div class="post-header">
      <img src="@/assets/default-profile.png" alt="사용자 이미지" class="user-image" />
      <span class="nickname">{{ post.nickname }}</span>
      <button @click="toggleFollow" class="follow-btn">
        {{ isFollowing ? '팔로잉' : '팔로우' }}
      </button>
      <button class="more-btn">⋮</button>
    </div>

    <!-- 🖼️ 썸네일 + 제목 + 북마크 -->
    <div class="image-container">
      <img :src="require(`@/assets/${post.img}`)" alt="식단 이미지" />
      <div class="title-bookmark">
        <h3>{{ post.title }}</h3>
        <button @click="toggleBookmark" class="bookmark-btn">
          {{ isBookmarked ? '🔖' : '📑' }}
        </button>
      </div>
    </div>

    <!-- 📅 날짜 + ❤️ 좋아요 + 💬 댓글 -->
    <div class="meta">
      <span>{{ post.date }}</span>
      <span>❤️ {{ post.likes }}</span>
      <span>💬 {{ post.comments }}</span>
    </div>

    <!-- 🔥 영양 정보 -->
    <div class="nutrition-tags">
      <div class="tag">열량 {{ post.calories }} kcal</div>
      <div class="tag">탄수화물 {{ post.carbs }} g</div>
      <div class="tag">단백질 {{ post.protein }} g</div>
      <div class="tag">지방 {{ post.fat }} g</div>
      <div class="tag">당 {{ post.sugar }} g</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  post: Object
})

const isFollowing = ref(false)
const isBookmarked = ref(false)

function toggleFollow() {
  isFollowing.value = !isFollowing.value
}

function toggleBookmark() {
  isBookmarked.value = !isBookmarked.value
}
</script>

<style scoped>
.post-card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.user-image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.nickname {
  font-weight: bold;
  margin-right: auto;
}

.follow-btn,
.more-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.image-container {
  position: relative;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.title-bookmark {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
}

.title-bookmark h3 {
  font-size: 1.1rem;
  margin: 0;
}

.bookmark-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.5rem;
}

.nutrition-tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.6rem;
  gap: 6px;
}

.tag {
  background: #f2f2f2;
  border-radius: 20px;
  padding: 0.3rem 0.8rem;
  font-size: 0.75rem;
}
</style>
