<template>
    <div class="weekly-stats">
        <h3>주간 통계</h3>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-label">평균 칼로리</div>
                <div class="stat-value">{{ averageCalories }} kcal</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">평균 탄수화물</div>
                <div class="stat-value">{{ averageCarbs }}g</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">평균 단백질</div>
                <div class="stat-value">{{ averageProtein }}g</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">평균 지방</div>
                <div class="stat-value">{{ averageFat }}g</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, watch, onMounted, computed } from 'vue'

const selectedDate = inject('selectedDate')
const weeklyMeals = ref([])

const fetchWeeklyStats = async (date) => {
    try {

        const currentDate = new Date(date)
        const startOfWeek = new Date(currentDate)
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())
        const endOfWeek = new Date(startOfWeek)
        endOfWeek.setDate(startOfWeek.getDate() + 6)


        const startDate = startOfWeek.toISOString().split('T')[0]
        const endDate = endOfWeek.toISOString().split('T')[0]

        const response = await fetch('http://localhost:3000/meals')
        if (!response.ok) {
            throw new Error('주간 통계 데이터를 가져오는데 실패했습니다.')
        }
        const allMeals = await response.json()
        
        weeklyMeals.value = allMeals.filter(meal => {
            const mealDate = new Date(meal.meal_dt).toISOString().split('T')[0]
            return mealDate >= startDate && mealDate <= endDate
        })
    } catch (error) {
        console.error('주간 통계 조회 오류:', error)
        weeklyMeals.value = []
    }
}

// 평균값 계산
const averageCalories = computed(() => {
    if (weeklyMeals.value.length === 0) return 0
    const total = weeklyMeals.value.reduce((sum, meal) => sum + (meal.meal_calories || 0), 0)
    return Math.round(total / weeklyMeals.value.length)
})

const averageCarbs = computed(() => {
    if (weeklyMeals.value.length === 0) return 0
    const total = weeklyMeals.value.reduce((sum, meal) => sum + (meal.meal_carbs || 0), 0)
    return Math.round(total / weeklyMeals.value.length)
})

const averageProtein = computed(() => {
    if (weeklyMeals.value.length === 0) return 0
    const total = weeklyMeals.value.reduce((sum, meal) => sum + (meal.meal_protein || 0), 0)
    return Math.round(total / weeklyMeals.value.length)
})

const averageFat = computed(() => {
    if (weeklyMeals.value.length === 0) return 0
    const total = weeklyMeals.value.reduce((sum, meal) => sum + (meal.meal_fat || 0), 0)
    return Math.round(total / weeklyMeals.value.length)
})

// 컴포넌트 마운트 시 초기 데이터 로드
onMounted(() => {
    fetchWeeklyStats(selectedDate.value)
})

// selectedDate가 변경될 때마다 주간 통계 업데이트
watch(selectedDate, (newDate) => {
    fetchWeeklyStats(newDate)
})
</script>

<style scoped>
.weekly-stats {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
    margin: 0 0 20px 0;
    color: #333;
    font-size: 1.2em;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.stat-item {
    text-align: center;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 6px;
}

.stat-label {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 5px;
}

.stat-value {
    font-size: 1.2em;
    font-weight: bold;
    color: #4CAF50;
}
</style>
