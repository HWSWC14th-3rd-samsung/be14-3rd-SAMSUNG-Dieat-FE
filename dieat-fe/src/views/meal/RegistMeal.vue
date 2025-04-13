<template>
    <header>
        <Header />
    </header>
    <div class="registmeal-wrapper">
        <div class="registmeal-container">
            <div class="registmeal-leftsection">
                <div class="registmeal-name-div">
                    <h3 class="registmeal-name">식사 이름</h3>
                    <input type="text" class="registmeal-name-input">
                </div>
                <div class="registmeal-desc-div">
                    <h3 class="registmeal-desc">식사 설명</h3>
                    <input type="text" class="registmeal-desc-input">
                </div>
                <div class="registmeal-time-wrapper">
                    <div class="registmeal-time-div">
                        <h3 class="registmeal-time">식사 시간</h3>
                        <input type="text" class="registmeal-time-input">
                    </div>
                    <div class="registmeal-img-div">
                        <h3 class="registmeal-img-title">대표 이미지</h3>
                        <div class="registmeal-img-bg">
                            <h5 class="registmeal-img-i">대표 이미지 등록</h5>
                            <div class="registmeal-img-plus"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="registmeal-nutrient-title">총 영양성분</h3>
                    <div class="registmeal-nutrient-graph">
                        <div class="nutrient-bar-container">
                            <div class="nutrient-bar" style="height: 170px;">
                                <div class="nutrient-bar-fill calorie" style="height: 60%;"></div>
                            </div>
                            <span class="nutrient-label">칼로리</span>
                        </div>
                        <div class="nutrient-bar-container">
                            <div class="nutrient-bar" style="height: 170px;">
                                <div class="nutrient-bar-fill carb" style="height: 40%;"></div>
                            </div>
                            <span class="nutrient-label">탄수화물</span>
                        </div>
                        <div class="nutrient-bar-container">
                            <div class="nutrient-bar" style="height: 170px;">
                                <div class="nutrient-bar-fill protein" style="height: 30%;"></div>
                            </div>
                            <span class="nutrient-label">단백질</span>
                        </div>
                        <div class="nutrient-bar-container">
                            <div class="nutrient-bar" style="height: 170px;">
                                <div class="nutrient-bar-fill fat" style="height: 20%;"></div>
                            </div>
                            <span class="nutrient-label">지방</span>
                        </div>
                        <!-- 그리드 라인 -->
                        <div class="grid-line" style="bottom: 25%;"></div>
                        <div class="grid-line" style="bottom: 50%;"></div>
                        <div class="grid-line" style="bottom: 75%;"></div>
                    </div>
                </div>
            </div>
            <div class="registmeal-rightsection">
                <h3 class="registmeal-mealtitle">음식</h3>
                <div class="registmeal-mealplus" @click="RegistMealCard">+버튼</div>
                <div class="registmeal-mealminus">-버튼</div>
            </div>
            <div>
                <MealCard />
            </div>
            <div class="registmeal-footer">
                <button>식단 불러오기</button>
                <button>식사 불러오기</button>
                <button>등록</button>
                <button>취소</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import RegistMealCard from '@/components/meal/RegistMealCard.vue';
    import Header from '@/components/common/Header.vue';


</script>

<style scoped>
.registmeal-wrapper {
    margin-top: 20px;
}

/* 전체 등록 창을 감싸는 컨테이너 스타일 추가 */
.registmeal-container {
    width: 1054px;
    height: 784px;
    margin: 0 auto;
    background-color: rgba(217, 217, 217, 0.3);
    display: flex;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
}

.registmeal-leftsection {
    width: 426px; /* 466px - 40px(좌우 margin) */
    height: 684px;
    padding: 20px;
    margin-left: 40px;
    position: relative;
}

/* 경계선 위치 고정 */
.registmeal-container::after {
    content: '';
    position: absolute;
    left: 466px;
    top: 20px;
    width: 1px;
    height: calc(100% - 100px); /* 전체 높이에서 상단 패딩(20px) + footer 높이(60px) + 하단 패딩(20px) 제외 */
    background-color: rgba(128, 128, 128, 0.3);
}

.registmeal-rightsection {
    width: 547px;
    height: 684px;
    padding: 20px;
    margin-left: 40px;
}

.registmeal-name,
.registmeal-desc,
.registmeal-time,
.registmeal-img-title,
.registmeal-nutrient-title {
    font-family: 'Inter';
    font-weight: 800; /* ExtraBold */
    font-size: 16px;
    margin-bottom: 10px;
}

.registmeal-name-input {
    width: 344px;
    height: 30px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.registmeal-desc-input {
    width: 344px;
    height: 80px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.registmeal-time-input {
    width: 133px;
    height: 30px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
}

.registmeal-img-div {
    margin-bottom: 20px;
}

.registmeal-img-bg {
    width: 145px;
    height: 116px;
    background-color: #CDCDCD;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
}

.registmeal-img-i {
    margin: 0;
    text-align: center;
    position: absolute;
    top: 25px;
    width: 100%;
}

.registmeal-img-plus {
    width: 20px;
    height: 20px;
    position: relative;
    margin-top: auto;
    margin-bottom: 30px;
}

.registmeal-img-plus::before,
.registmeal-img-plus::after {
    content: '';
    position: absolute;
    background-color: #666;
}

.registmeal-img-plus::before {
    width: 20px;
    height: 2px;
    top: 9px;
    left: 0;
}

.registmeal-img-plus::after {
    width: 2px;
    height: 20px;
    left: 9px;
    top: 0;
}

.registmeal-nutrient-title {
    font-family: 'Inter';
    font-weight: 800;
    font-size: 16px;
    margin-top: -30px;
    margin-bottom: 10px;
}

.registmeal-nutrient-graph {
    background: white;
    width: 343px;
    height: 240px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
    position: relative;
}

.nutrient-bar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    position: relative;
    z-index: 2;
}

.nutrient-bar {
    width: 30px;
    background-color: #E6E6E6;
    margin-bottom: 10px;
    position: relative;
}

.nutrient-bar-fill {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}

.nutrient-label {
    font-family: 'Inter';
    font-weight: 500; /* Medium */
    font-size: 12px;
    color: #666;
    text-align: center;
}

/* 각 영양소별 색상 */
.nutrient-bar-fill.calorie { background-color: #FF4B4B; }
.nutrient-bar-fill.carb { background-color: #FFA94B; }
.nutrient-bar-fill.protein { background-color: #4CAF50; }
.nutrient-bar-fill.fat { background-color: #4B7BFF; }

/* 배경 그리드 라인 */
.grid-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #E6E6E6;
    z-index: 1;
}

.registmeal-footer {
    clear: both;
    padding: 20px;
    text-align: center;
    border-top: 1px solid #eee;
    width: calc(100% - 40px);
    height: 60px;
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.registmeal-footer button {
    margin: 0 10px;
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.registmeal-footer button:nth-child(1),
.registmeal-footer button:nth-child(2) {
    background-color: #ff4b4b;
    color: white;
}

.registmeal-footer button:nth-child(3) {
    background-color: #4CAF50;
    color: white;
}

.registmeal-footer button:nth-child(4) {
    background-color: #9e9e9e;
    color: white;
}

.registmeal-mealplus,
.registmeal-mealminus {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
}

.registmeal-mealtitle {
    margin-bottom: 15px;
}

.registmeal-time-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 344px; /* 식사 이름, 설명 input과 동일한 너비 */
    margin-bottom: 20px;
}

.registmeal-time-div {
    margin-bottom: 20px;
}

.registmeal-img-div {
    margin-bottom: 20px;
}
</style>