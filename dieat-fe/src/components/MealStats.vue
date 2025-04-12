<template>
    <div class="meal-stats">
        <h3>오늘 하루</h3>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-content">
                    <div class="stat-label">칼로리</div>
                    <div class="stat-value">{{ calculateTotalCalories() }} kcal</div>
                </div>
                <div class="line-div"></div>
                <div class="nutrient-bar">
                    <div class="nutrient-fill calories-fill"></div>
                </div>
                <div class="target-value">0 kcal</div>
            </div>
            <div class="stat-item">
                <div class="stat-content">
                    <div class="stat-label">탄수화물</div>
                    <div class="stat-value">{{ calculateTotalCarbs() }}g</div>
                </div>
                <div class="line-div"></div>
                <div class="nutrient-bar">
                    <div class="nutrient-fill carbs-fill"></div>
                </div>
                <div class="target-value">0 g</div>
            </div>
            <div class="stat-item">
                <div class="stat-content">
                    <div class="stat-label">단백질</div>
                    <div class="stat-value">{{ calculateTotalProtein() }}g</div>
                </div>
                <div class="line-div"></div>
                <div class="nutrient-bar">
                    <div class="nutrient-fill protein-fill"></div>
                </div>
                <div class="target-value">0 g</div>
            </div>
            <div class="stat-item">
                <div class="stat-content">
                    <div class="stat-label">지방</div>
                    <div class="stat-value">{{ calculateTotalFat() }}g</div>
                </div>
                <div class="line-div"></div>
                <div class="nutrient-bar">
                    <div class="nutrient-fill fat-fill"></div>
                </div>
                <div class="target-value">0 g</div>
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
    width: 400px;
    height: 376px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
    width: 287px;
    position: relative;
    font-size: 16px;
    letter-spacing: -0.02em;
    font-weight: 800;
    font-family: Inter;
    color: #000;
    text-align: left;
    display: flex;
    align-items: center;
    height: 25px;
    margin: 0;
}

.stats-grid {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    position: relative;
    width: 347px;
    margin-left: auto;
    margin-right: auto;
}

.stats-grid::before {
    content: '';
    position: absolute;
    top: 20px;
    height: 245px;
    left: 33.33%;
    border-left: 1px dashed rgba(154, 154, 154, 0.8); /* #9a9a9a with 80% opacity */
    z-index: 3;
}

.stats-grid::after {
    content: '';
    position: absolute;
    top: 20px;
    height: 245px;
    left: 66.66%;
    border-left: 1px dashed rgba(154, 154, 154, 0.8); /* #9a9a9a with 80% opacity */
    z-index: 3;
}

.stat-item {
    text-align: center;
    background: white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    padding: 0;
    position: relative;
    z-index: 2;
}

.stat-item:nth-child(1) {
    margin-bottom: 15px;
}

.stat-item:nth-child(2) {
    margin-bottom: 15px;
}

.stat-item:nth-child(3) {
    margin-bottom: 15px;
}

.stat-item:nth-child(4) {
    margin-bottom: 0;
}

.stat-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 343px;
    margin-bottom: 4px;
    margin-left: auto;
    margin-right: auto;
}

.line-div {
    width: 347px;
    position: relative;
    border-top: 1px solid rgba(107, 107, 107, 0.11);
    box-sizing: border-box;
    height: 1px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}

.stat-label {
    width: 54px;
    position: relative;
    font-size: 14px;
    letter-spacing: -0.02em;
    font-family: Inter;
    color: #000;
    text-align: left;
    display: flex;
    align-items: center;
    height: 16px;
    margin-left: 0;
}

.stat-value {
    font-size: 14px;
    font-weight: 600;
    font-family: Inter;
    color: #696969;
    margin-right: 2px;
}

.nutrient-bar {
    width: 347px;
    height: 8px;
    background-color: #f5f5f5;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 4px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
}

.nutrient-fill {
    height: 100%;
    border-radius: 3px;
    width: 60%;
}

.calories-fill {
    background-color: #FD5D5D; /* 칼로리 */
}

.carbs-fill {
    background-color: #FDCA5D; /* 탄수화물 */
}

.protein-fill {
    background-color: #50E250; /* 단백질 */
}

.fat-fill {
    background-color: #5D7DFD; /* 지방 */
}

.target-value {
    width: 62px;
    font-size: 10px;
    letter-spacing: -0.02em;
    font-weight: 800;
    font-family: Inter;
    color: #9e9e9e;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 16px;
    position: relative;
    margin-right: 10px;
    align-self: flex-end;
}
</style>