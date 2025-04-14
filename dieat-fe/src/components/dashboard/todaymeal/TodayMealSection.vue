<template>
  <div class="today-meal-section">
    <div class="meal-list">
      <MealCard v-for="(meal, index) in meals" :key="index" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MealCard from './MealCard.vue'
import { sampleMeals } from '../data/sampleMeals'
import dayjs from 'dayjs'

// ✅ 오늘 날짜 (형식: YYYY-MM-DD)
const today = dayjs().format('YYYY-MM-DD')

// ✅ 오늘 날짜에 해당하는 식사만 필터링
const meals = ref(sampleMeals.filter(meal => meal.date === today))
</script>

<style scoped>
.today-meal-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.meal-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 8px 8px;
  text-align: left;
}

.meal-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-right: 8px;
}
</style>
