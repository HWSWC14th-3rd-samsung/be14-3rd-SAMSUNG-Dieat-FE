<template>
    <div v-if="show" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <div class="modal-header">
                <h2>식단 불러오기</h2>
                <button class="close-button" @click="closeModal">×</button>
            </div>
            <div class="modal-body">
                <div class="bookmark-section">
                    <div class="bookmark-header">
                        <h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            북마크
                        </h3>
                    </div>
                    <div class="bookmark-categories">
                        <div class="category-item" 
                            :class="{ 'active': selectedCategory === 'all' }"
                            @click="selectCategory('all')">
                            <span>모든 게시물</span>
                            <span class="count">103</span>
                        </div>
                        <div class="category-item"
                            :class="{ 'active': selectedCategory === 'diet' }"
                            @click="selectCategory('diet')">
                            <span>다이어트</span>
                            <span class="count">16</span>
                        </div>
                        <div class="category-item"
                            :class="{ 'active': selectedCategory === 'meat' }"
                            @click="selectCategory('meat')">
                            <span>고기 먹고 싶을 때</span>
                            <span class="count">8</span>
                        </div>
                        <div class="category-item"
                            :class="{ 'active': selectedCategory === 'home' }"
                            @click="selectCategory('home')">
                            <span>집에 살 빼야 할 때</span>
                            <span class="count">19</span>
                        </div>
                        <div class="category-item"
                            :class="{ 'active': selectedCategory === 'night' }"
                            @click="selectCategory('night')">
                            <span>야식</span>
                            <span class="count">60</span>
                        </div>
                    </div>
                </div>
                <div class="right-section">
                    <div class="diet-list-section">
                        <div class="diet-list-header">
                        </div>
                        <div class="diet-list">
                            <div v-for="diet in bookmarkedDiets" :key="diet.id" 
                                class="diet-card"
                                :class="{ 'selected-diet': selectedDiet && selectedDiet.id === diet.id }"
                                @click="selectDiet(diet)">
                                <div class="diet-card-content">
                                    <div class="diet-info">
                                        <div class="diet-name">{{ diet.title }}</div>
                                        <div class="diet-time">{{ diet.time }}</div>
                                    </div>
                                    <div class="diet-nutrients">
                                        <div class="nutrient">
                                            <span class="value">{{ diet.kcal }}</span>
                                            <span class="unit">kcal</span>
                                        </div>
                                        <div class="nutrient">
                                            <span class="value">{{ diet.carbs }}</span>
                                            <span class="unit">탄수화물</span>
                                        </div>
                                        <div class="nutrient">
                                            <span class="value">{{ diet.protein }}</span>
                                            <span class="unit">단백질</span>
                                        </div>
                                        <div class="nutrient">
                                            <span class="value">{{ diet.fat }}</span>
                                            <span class="unit">지방</span>
                                        </div>
                                        <div class="nutrient">
                                            <span class="value">{{ diet.sodium }}</span>
                                            <span class="unit">나트륨</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="cancel-button" @click="closeModal">취소</button>
                        <button class="confirm-button" @click="confirmSelection">확인</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close', 'confirm']);
const selectedCategory = ref('all');
const selectedDiet = ref(null);
const bookmarkedDiets = ref([
    {
        id: 1,
        title: '토마토 파스타',
        time: '12:30',
        kcal: 650,
        carbs: 85,
        protein: 18,
        fat: 22,
        sodium: 10
    },
    {
        id: 2,
        title: '고구마피자(도미노)',
        time: '18:00',
        kcal: 900,
        carbs: 85,
        protein: 30,
        fat: 40,
        sodium: 15
    }
    // 더미 데이터 추가 가능
]);

const closeModal = () => {
    emit('close');
};

const confirmSelection = () => {
    if (selectedDiet.value) {
        emit('confirm', selectedDiet.value);
    }
};

const selectCategory = (category) => {
    selectedCategory.value = category;
};

const selectDiet = (diet) => {
    if (selectedDiet.value && selectedDiet.value.id === diet.id) {
        selectedDiet.value = null;
    } else {
        selectedDiet.value = diet;
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    border-radius: 8px;
    width: 759px;
    height: 636px;
    max-height: 636px;
    display: flex;
    flex-direction: column;
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
}

.close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
}

.modal-body {
    padding: 0;
    display: flex;
    gap: 20px;
    height: calc(636px - 70px);
}

.bookmark-section {
    flex: none;
    width: 220px;
    height: 492px;
    padding: 20px;
    overflow-y: auto;
}

.bookmark-header {
    margin-bottom: 20px;
}

.bookmark-header h3 {
    margin: 0;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.bookmark-header svg {
    color: #909090;
}

.bookmark-categories {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.category-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: #F8F8F8;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
}

.category-item:hover {
    background-color: #EEEEEE;
}

.category-item.active {
    background-color: #FFA18E;
    color: white;
}

.category-item.active:hover {
    background-color: #FFA18E;
}

.category-item span {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
}

.category-item .count {
    font-size: 8px;
    color: #909090;
    font-family: 'Inter';
    font-weight: 700;
}

.category-item.active .count {
    color: white;
}

.right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}

.diet-list-section {
    flex: 1;
    border-left: 1px solid #eee;
    padding: 17px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.diet-list-header {
    margin-bottom: 15px;
}

.diet-list-header h4 {
    margin: 0;
    font-size: 16px;
}

.diet-list {
    flex: 1;
    overflow-y: auto;
    padding: 0 8px;
    margin-right: -8px;
}

.modal-footer {
    padding: 0;
    position: relative;
    margin: 20px;
}

.cancel-button {
    padding: 11px 23px;
    border: none;
    border-radius: 4px;
    background-color: #D9D9D9;
    color: white;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    right: 150px;
    top: -30px;
    font-size: 14px;
    font-weight: 600;
}

.confirm-button {
    padding: 11px 23px;
    border: none;
    border-radius: 4px;
    background-color: #FF4B4B;
    color: white;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    right: 250px;
    top: -30px;
    font-size: 14px;
    font-weight: 600;
}

.confirm-button:hover {
    background-color: #ff3333;
}

.cancel-button:hover {
    background-color: #f5f5f5;
}

.diet-card {
    background: white;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
    transition: all 0.2s ease;
    cursor: pointer;
}

.diet-card:hover {
    background-color: #f9f9f9;
}

.selected-diet {
    background-color: white !important;
    border: 2px solid #FFA18E !important;
}

.diet-card-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.diet-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.diet-name {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;
    color: #000000;
}

.diet-time {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    color: #666666;
}

.diet-nutrients {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F8F8F8;
    padding: 12px;
    border-radius: 4px;
}

.nutrient {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.nutrient .value {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    color: #000000;
}

.nutrient .unit {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    color: #666666;
}
</style> 