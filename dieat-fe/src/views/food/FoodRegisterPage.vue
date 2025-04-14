<template>
    <Header />

    <div class="food-register-page">
        <h2 class="food-register-title">음식 데이터 등록</h2>

        <div class="food-register-container">
            <!-- 음식 제목 -->
            <label class="food-register-label">음식 제목</label>
            <input v-model="foodTitle" placeholder="예: 닭가슴살 볶음밥" class="food-register-input" />

            <!-- 음식량 입력 -->
            <label class="food-register-label">음식량</label>
            <div class="food-register-grid-3">
                <div class="unit-input-wrapper">
                    <input v-model="amount" class="food-register-input with-unit" type="number" />
                    <span class="unit">기준량</span>
                </div>
                <div class="unit-input-wrapper">
                    <input v-model="unit" class="food-register-input with-unit" />
                    <span class="unit">측정 단위</span>
                </div>
                <div class="unit-input-wrapper">
                    <input v-model="serveUnit" class="food-register-input with-unit" />
                    <span class="unit">제공 단위</span>
                </div>
            </div>

            <!-- 영양 성분 입력 -->
            <label class="food-register-label">영양 성분</label>
            <div class="food-register-grid-5">
                <div class="unit-input-wrapper">
                    <input v-model="kcal" class="food-register-input with-unit" type="number" />
                    <span class="unit">kcal</span>
                    <div class="unit-caption">열량</div>
                </div>
                <div class="unit-input-wrapper">
                    <input v-model="carb" class="food-register-input with-unit" type="number" />
                    <span class="unit">g</span>
                    <div class="unit-caption">탄수화물</div>
                </div>
                <div class="unit-input-wrapper">
                    <input v-model="protein" class="food-register-input with-unit" type="number" />
                    <span class="unit">g</span>
                    <div class="unit-caption">단백질</div>
                </div>
                <div class="unit-input-wrapper">
                    <input v-model="fat" class="food-register-input with-unit" type="number" />
                    <span class="unit">g</span>
                    <div class="unit-caption">지방</div>
                </div>
                <div class="unit-input-wrapper">
                    <input v-model="sugar" class="food-register-input with-unit" type="number" />
                    <span class="unit">g</span>
                    <div class="unit-caption">당류</div>
                </div>
            </div>

            <!-- 버튼 그룹 -->
            <div class="food-register-button-group">
                <button class="primary-button">등록</button>
                <button class="gray-button">취소</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/common/Header.vue'

const foodTitle = ref('')
const amount = ref(100)
const unit = ref('g')
const serveUnit = ref('1개')
const kcal = ref(0)
const carb = ref(0)
const protein = ref(0)
const fat = ref(0)
const sugar = ref(0)
</script>

<style src="@/assets/food/registerFood.css"></style>