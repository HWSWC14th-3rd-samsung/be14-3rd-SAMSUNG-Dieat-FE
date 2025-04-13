<template>
    <div class="meal-card">
        <div class="meal-time">{{ formatTime(meal.meal_dt) }}</div>
        <div class="meal-content">
            <div class="meal-name">{{ meal.meal_title || meal.name }}</div>
            <div class="meal-desc">{{ meal.meal_desc || meal.description }}</div>
            <div class="meal-nutrition">
                <span>칼로리: {{ meal.meal_calories || meal.calories }}kcal</span>
                <span>탄수화물: {{ meal.meal_carbs || meal.carbs }}g</span>
                <span>단백질: {{ meal.meal_protein || meal.protein }}g</span>
                <span>지방: {{ meal.meal_fat || meal.fat }}g</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        meal: {
            type: Object,
            required: true
        }
    })

    const formatTime = (dateTimeStr) => {
        if (!dateTimeStr) return ''
        const date = new Date(dateTimeStr)
        return date.toLocaleTimeString('ko-KR', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        })
    }
</script>

<style scoped>
.meal-card {
    background: white;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 15px;
}

.meal-time {
    font-weight: bold;
    color: #4CAF50;
    min-width: 60px;
}

.meal-content {
    flex: 1;
}

.meal-name {
    font-size: 1.1em;
    margin-bottom: 5px;
    font-weight: bold;
}

.meal-desc {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 10px;
}

.meal-nutrition {
    display: flex;
    gap: 15px;
    font-size: 0.9em;
    color: #666;
}

.meal-nutrition span {
    background: #f5f5f5;
    padding: 4px 8px;
    border-radius: 4px;
}
</style>