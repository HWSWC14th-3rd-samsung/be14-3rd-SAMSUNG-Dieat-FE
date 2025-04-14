<template>
    <div class="meal-list">
        <div v-if="filteredMeals.length === 0" class="no-meals">
            등록된 식사 정보가 없습니다.
        </div>
        <MealCard
            v-else
            v-for="meal in filteredMeals"
            :key="meal.id"
            :meal="meal"
        />
    </div>
</template>

<script setup>
    import { inject, computed } from 'vue'
    import MealCard from '@/components/meal/MealCard.vue'

    const selectedDate = inject('selectedDate')
    const meals = inject('meals')

    const filteredMeals = computed(() => {
        if (!meals.value) return [];
        
        return meals.value.filter(meal => {
            if (!meal.meal_dt) return false;
            try {
                // DB date format: "2025-04-13 21:00"
                const mealDateStr = meal.meal_dt.split(' ')[0]; // "2025-04-13"
                return mealDateStr === selectedDate.value;
            } catch (error) {
                console.error('날짜 형식 오류:', error);
                return false;
            }
        });
    })
</script>

<style scoped>
    .meal-list {
        width: 582px;
        margin: 0 auto;
        padding: 20px;
    }

    .no-meals {
        text-align: center;
        color: #999;
        padding: 40px;
        background-color: #f5f5f5;
        border-radius: 4px;
        font-size: 1.1em;
    }
</style>