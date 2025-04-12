<template>
    <div class="meal-stats">
        <h3>오늘 하루</h3>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-label">칼로리</div>
                <div class="stat-value">{{ calculateTotalCalories() }} kcal</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">탄수화물</div>
                <div class="stat-value">{{ calculateTotalCarbs() }}g</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">단백질</div>
                <div class="stat-value">{{ calculateTotalProtein() }}g</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">지방</div>
                <div class="stat-value">{{ calculateTotalFat() }}g</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject, watch } from 'vue'

const selectedDate = inject('selectedDate')
const todayMeals = ref([])

const fetchTodayMeals = async () => {
    try {
        const response = await fetch('http://localhost:3000/meals')
        if (!response.ok) {
            throw new Error('식사 데이터를 가져오는데 실패했습니다.')
        }
        const allMeals = await response.json()
        
        // 선택된 날짜의 식사만 필터링
        todayMeals.value = allMeals.filter(meal => {
            const mealDate = new Date(meal.meal_dt).toISOString().split('T')[0]
            return mealDate === selectedDate.value
        })
    } catch (error) {
        console.error('오늘의 식사 데이터 조회 오류:', error)
        todayMeals.value = []
    }
}

const calculateTotalCalories = () => {
    return Math.round(todayMeals.value.reduce((sum, meal) => sum + (meal.meal_calories || 0), 0))
}

const calculateTotalCarbs = () => {
    return Math.round(todayMeals.value.reduce((sum, meal) => sum + (meal.meal_carbs || 0), 0))
}

const calculateTotalProtein = () => {
    return Math.round(todayMeals.value.reduce((sum, meal) => sum + (meal.meal_protein || 0), 0))
}

const calculateTotalFat = () => {
    return Math.round(todayMeals.value.reduce((sum, meal) => sum + (meal.meal_fat || 0), 0))
}

// 컴포넌트 마운트 시 초기 데이터 로드
onMounted(() => {
    fetchTodayMeals()
})

// selectedDate가 변경될 때마다 데이터 업데이트
watch(selectedDate, () => {
    fetchTodayMeals()
})
</script>

<style scoped>
.meal-stats {
    background: white;
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