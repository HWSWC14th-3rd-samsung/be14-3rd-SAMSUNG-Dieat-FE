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
                        <h5 class="registmeal-card-nutr-cal-unit">kcal</h5>
                    </div>
                    <div class="registmeal-card-nutr-carb">
                        <h3 class="registmeal-card-nutr-carb-value">{{ food.carb }}</h3>
                        <h5 class="registmeal-card-nutr-carb-unit">탄</h5>
                    </div>
                    <div class="registmeal-card-nutr-protein">
                        <h3 class="registmeal-card-nutr-protein-value">{{ food.protein }}</h3>
                        <h5 class="registmeal-card-nutr-protein-unit">단</h5>
                    </div>
                    <div class="registmeal-card-nutr-fat">
                        <h3 class="registmeal-card-nutr-fat-value">{{ food.fat }}</h3>
                        <h5 class="registmeal-card-nutr-fat-unit">지    </h5>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -16px;  /* right section의 패딩만큼 왼쪽으로 이동 */
}

/* 카드 전체 컨테이너 스타일 */
.registmeal-card {
    width: 453px;
    height: 99px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 12px;
}

.card-left {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 16px;
}

.card-right {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 16px;
}

/* 카테고리 영역 */
.regstmeal-card-category {
    position: absolute;
    top: 0;
    left: 15px;
}

.registmeal-card-category-name {
    background: #98DCC6;
    width: 41px;
    height: 18px;
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 10px;
    color: #000000;
    padding: 0;
    line-height: 1;
}

.registmeal-card-category-name.opendata {
    background: rgba(255, 126, 126, 0.6);
}

.registmeal-card-name {
    position: absolute;
    top: -36.5px;
    left: 50px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    margin: 0;
    height: 18px;
    display: flex;
    align-items: center;
}

.registmeal-card-name-div {
    position: relative;
    margin-top: 30px;
}

.registmeal-card-unit {
    position: absolute;
    top: 0;
    right: 15px;
}

.registmeal-card-unit-name {
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 600;  /* semi bold */
    color: #676767;
    text-align: right;
}

.registmeal-card-nutr-div {
    display: flex;
    gap: 12px;
    position: absolute;
    bottom: 13px;
    left: 15px;
}

.registmeal-card-nutr-cal,
.registmeal-card-nutr-carb,
.registmeal-card-nutr-protein,
.registmeal-card-nutr-fat,
.registmeal-card-nutr-sugar {
    text-align: center;
    background: rgba(233, 233, 233, 0.54);
    padding: 4px 8px;
    border-radius: 4px;
    width: 42px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
}

.registmeal-card-nutr-cal-value,
.registmeal-card-nutr-carb-value,
.registmeal-card-nutr-protein-value,
.registmeal-card-nutr-fat-value,
.registmeal-card-nutr-sugar-value {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 700;  /* bold */
    color: #333333;
    margin: 0;
    line-height: 1;
}

.registmeal-card-nutr-cal-unit,
.registmeal-card-nutr-carb-unit,
.registmeal-card-nutr-protein-unit,
.registmeal-card-nutr-fat-unit,
.registmeal-card-nutr-sugar-unit {
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 600;  /* semi bold */
    color: #787878;
    margin: 0;
    line-height: 1;
}

/* 수량 영역 */
.registmeal-card-amout-div {
    position: absolute;
    bottom: 8px;
    right: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.registmeal-card-amout-title {
    font-size: 12px;
    color: #333333;
    margin-right: 8px;
}

.registmeal-card-amout {
    background: #F5F5F5;
    width: 57px;
    height: 22px;
    border-radius: 4px;
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

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