<template>
    <div class="registmeal-cards-wrapper">
        <div v-for="(food, index) in foods" :key="food.id" class="registmeal-card">
            <button v-if="showDeleteButton" class="delete-button" @click="$emit('delete', index)">×</button>
            <div class="card-left">
                <div class="regstmeal-card-category">
                    <h3 class="registmeal-card-category-name" :class="{ 'opendata': food.type === 'OPENDATA' }">
                        {{ getFoodType(food.type) }}
                    </h3>
                </div>
                <div class="registmeal-card-name-div">
                    <h3 class="registmeal-card-name">{{ food.name }}</h3>
                </div>
                <div class="registmeal-card-unit">
                    <h5 class="registmeal-card-unit-name">{{ food.unit }}</h5>
                </div>
            </div>
            <div class="card-right">
                <div class="registmeal-card-nutr-div">
                    <div class="registmeal-card-nutr-cal">
                        <h3 class="registmeal-card-nutr-cal-value">{{ food.kcal }}</h3>
                        <h5 class="registmeal-card-nutr-cal-unit">칼로리</h5>
                    </div>
                    <div class="registmeal-card-nutr-carb">
                        <h3 class="registmeal-card-nutr-carb-value">{{ food.carb }}</h3>
                        <h5 class="registmeal-card-nutr-carb-unit">탄수화물</h5>
                    </div>
                    <div class="registmeal-card-nutr-protein">
                        <h3 class="registmeal-card-nutr-protein-value">{{ food.protein }}</h3>
                        <h5 class="registmeal-card-nutr-protein-unit">단백질</h5>
                    </div>
                    <div class="registmeal-card-nutr-fat">
                        <h3 class="registmeal-card-nutr-fat-value">{{ food.fat }}</h3>
                        <h5 class="registmeal-card-nutr-fat-unit">지방</h5>
                    </div>
                    <div class="registmeal-card-nutr-sugar">
                        <h3 class="registmeal-card-nutr-sugar-value">{{ food.sugar }}</h3>
                        <h5 class="registmeal-card-nutr-sugar-unit">당</h5>
                    </div>
                </div>
                <div class="registmeal-card-amout-div"> 
                    <h3 class="registmeal-card-amout-title">수량</h3>
                    <div class="registmeal-card-amout">
                        {{ food.quantity }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    foods: {
        type: Array,
        required: true,
        default: () => []
    },
    showDeleteButton: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['delete']);

const getFoodType = (type) => {
    if (type === 'OPENDATA') return '공공';
    if (type === 'USERDATA') return '회원';
    return '회원';  // 기본값
};
</script>

<style scoped>
.registmeal-cards-wrapper {
    width: 100%;
}

/* 카드 전체 컨테이너 스타일 */
.registmeal-card {
    width: 453px;
    height: 99px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 12px;
}

.card-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
}

.card-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
}

/* 카테고리 영역 */
.regstmeal-card-category {
    display: flex;
    align-items: center;
}

.registmeal-card-category-name {
    background: #98DCC6;
    width: 41px;
    height: 22px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 10px;
    color: #000000;
}

.registmeal-card-category-name.opendata {
    background: rgba(255, 126, 126, 0.6);
}

/* 음식 이름 영역 */
.registmeal-card-name {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    margin: 8px 0;
}

/* 단위 표시 영역 */
.registmeal-card-unit {
    position: absolute;
    top: 24px;
    right: 24px;
}

.registmeal-card-unit-name {
    color: #666666;
    font-size: 12px;
}

/* 영양소 정보 영역 */
.registmeal-card-nutr-div {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.registmeal-card-nutr-cal,
.registmeal-card-nutr-carb,
.registmeal-card-nutr-protein,
.registmeal-card-nutr-fat,
.registmeal-card-nutr-sugar {
    text-align: center;
}

.registmeal-card-nutr-cal-value,
.registmeal-card-nutr-carb-value,
.registmeal-card-nutr-protein-value,
.registmeal-card-nutr-fat-value,
.registmeal-card-nutr-sugar-value {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 2px;
}

.registmeal-card-nutr-cal-unit,
.registmeal-card-nutr-carb-unit,
.registmeal-card-nutr-protein-unit,
.registmeal-card-nutr-fat-unit,
.registmeal-card-nutr-sugar-unit {
    font-size: 12px;
    color: #666666;
}

/* 수량 영역 */
.registmeal-card-amout-div {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 8px;
}

.registmeal-card-amout-title {
    font-size: 12px;
    color: #333333;
}

.registmeal-card-amout {
    background: #F5F5F5;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
}

/* 삭제 버튼 스타일 */
.delete-button {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ff4b4b;
    color: white;
    border: none;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: all 0.2s ease;
    padding: 0;
    margin: 0;
}

.delete-button:hover {
    background-color: #ff3333;
    transform: scale(1.1);
}

.delete-button:active {
    transform: scale(0.95);
}
</style>