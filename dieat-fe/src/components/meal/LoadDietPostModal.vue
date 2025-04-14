<template>
    <div v-if="show" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <div class="modal-header">
                <h2>식단 불러오기</h2>
                <button class="close-button" @click="closeModal">×</button>
            </div>
            <div class="modal-body">
                <div class="calendar-section">
                    <div class="calendar-header">
                        <div class="calendar-navigation">
                            <button @click="prevMonth">
                                <span class="arrow left"></span>
                            </button>
                            <span class="current-month">{{ loadDietMonth }}</span>
                            <button @click="nextMonth">
                                <span class="arrow right"></span>
                            </button>
                        </div>
                    </div>
                    <div class="calendar-grid">
                        <div class="weekdays">
                            <span>일</span>
                            <span>월</span>
                            <span>화</span>
                            <span>수</span>
                            <span>목</span>
                            <span>금</span>
                            <span>토</span>
                        </div>
                        <div class="days">
                            <div
                                v-for="day in calendarDays"
                                :key="day.date"
                                :class="[
                                    'day',
                                    { 'current-month': day.currentMonth },
                                    { 'other-month': !day.currentMonth },
                                    { 'selected': isSelectedDate(day.date) },
                                    { 'has-diet': hasDiet(day.date) }
                                ]"
                                @click="selectDate(day.date)"
                            >
                                {{ day.dayNumber }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-section">
                    <div class="diet-list-section">
                        <div class="diet-list-header">
                            <h4>식단 목록</h4>
                        </div>
                        <div class="diet-list">
                            <div v-for="diet in selectedDateDiets" :key="diet.id" 
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
import { defineProps, defineEmits, ref, computed, onMounted, watch } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close', 'confirm']);

const currentDate = ref(new Date());
const selectedDate = ref(null);
const dietsData = ref([]);
const selectedDateDiets = ref([]);
const selectedDiet = ref(null);

const API_URL = 'http://localhost:3000/diets'; // API 엔드포인트는 실제 서버에 맞게 수정 필요

const fetchMonthlyDiets = async () => {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('서버 응답 오류');
        }
        
        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
            const currentYear = currentDate.value.getFullYear();
            const currentMonth = String(currentDate.value.getMonth() + 1).padStart(2, '0');
            const yearMonth = `${currentYear}-${currentMonth}`;
            
            dietsData.value = data
                .filter(diet => diet.diet_dt.startsWith(yearMonth))
                .map(diet => diet.diet_dt);
        } else {
            dietsData.value = [];
        }
    } catch (error) {
        console.error('식단 데이터 조회 중 오류 발생:', error);
        dietsData.value = [];
    }
};

watch(currentDate, () => {
    fetchMonthlyDiets();
});

onMounted(() => {
    if (props.show) {
        fetchMonthlyDiets();
    }
});

watch(() => props.show, (newValue) => {
    if (newValue) {
        fetchMonthlyDiets();
    }
});

const loadDietMonth = computed(() => {
    return `${currentDate.value.getFullYear()}년 ${currentDate.value.getMonth() + 1}월`;
});

const calendarDays = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = currentDate.value.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0);
    
    const days = [];
    
    const firstDayWeekday = firstDay.getDay();
    for (let i = firstDayWeekday - 1; i >= 0; i--) {
        days.push({
            date: new Date(year, month - 1, prevMonthLastDay.getDate() - i),
            dayNumber: prevMonthLastDay.getDate() - i,
            currentMonth: false
        });
    }
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push({
            date: new Date(year, month, i),
            dayNumber: i,
            currentMonth: true
        });
    }
    
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
        days.push({
            date: new Date(year, month + 1, i),
            dayNumber: i,
            currentMonth: false
        });
    }
    
    return days;
});

const isSelectedDate = (date) => {
    if (!selectedDate.value) return false;
    return date.toDateString() === selectedDate.value.toDateString();
};

const selectDate = async (date) => {
    selectedDate.value = date;
    await fetchDietsByDate(date);
};

const prevMonth = () => {
    currentDate.value = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() - 1,
        1
    );
};

const nextMonth = () => {
    currentDate.value = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() + 1,
        1
    );
};

const closeModal = () => {
    emit('close');
};

const confirmSelection = () => {
    emit('confirm', selectedDate.value);
};

const hasDiet = (date) => {
    if (!dietsData.value || dietsData.value.length === 0) {
        return false;
    }
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const targetDate = `${year}-${month}-${day}`;
    
    return dietsData.value.some(dietDate => {
        const dietDateStr = dietDate.split(' ')[0];
        return dietDateStr === targetDate;
    });
};

const fetchDietsByDate = async (date) => {
    try {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const targetDate = `${year}-${month}-${day}`;
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error('서버 응답 오류');
        }
        
        const allData = await response.json();
        
        const filteredData = allData.filter(diet => {
            const dietDate = new Date(diet.diet_dt);
            const dietDateStr = dietDate.toISOString().split('T')[0];
            return dietDateStr === targetDate;
        });

        if (filteredData.length === 0) {
            alert('선택한 날짜에 등록된 식단 정보가 없습니다.');
            selectedDateDiets.value = [];
            return;
        }

        selectedDateDiets.value = filteredData.map(diet => ({
            id: diet.diet_code,
            title: diet.diet_title || '식단 이름 없음',
            time: new Date(diet.diet_dt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
            kcal: Math.round(diet.total_calories) || 0,
            carbs: Math.round(diet.total_carbs) || 0,
            protein: Math.round(diet.total_protein) || 0,
            fat: Math.round(diet.total_fat) || 0,
            sodium: Math.round(diet.total_sugar) || 0
        }));
    } catch (error) {
        console.error('식단 데이터 조회 중 오류 발생:', error);
        selectedDateDiets.value = [];
    }
};

const selectDiet = (diet) => {
    if (selectedDiet.value && selectedDiet.value.id === diet.id) {
        selectedDiet.value = null;
    } else {
        selectedDiet.value = diet;
    }
};

watch(selectedDate, () => {
    selectedDiet.value = null;
});
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
    width: 1225px;
    height: 611px;
    max-height: 611px;
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
    height: calc(611px - 70px);
}

.calendar-section {
    flex: 2;
    border: none;
    border-right: 1px solid #eee;
    border-radius: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.calendar-header {
    margin-bottom: 0;
    background-color: #F6F6F6;
    padding: 15px;
    border-radius: 0;
}

.calendar-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    padding: 0 5px;
}

.calendar-navigation button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    margin: 0 -5px;
}

.arrow {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
}

.arrow.left {
    transform: rotate(-135deg);
}

.arrow.right {
    transform: rotate(45deg);
}

.current-month {
    font-weight: bold;
}

.weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    margin-bottom: 10px;
}

.weekdays span {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    color: #555555;
}

.weekdays span:first-child {
    color: #FF4B4B;
}

.weekdays span:last-child {
    color: #333;
}

.day:nth-child(7n+1) {
    color: #FF4B4B;
}

.day:nth-child(7n) {
    color: #333;
}

.other-month.day:nth-child(7n+1),
.other-month.day:nth-child(7n) {
    color: #ccc;
}

.days {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 72px);
    gap: 0.5px;
    background-color: #f5f5f5;
    padding: 0.5px;
}

.day {
    height: 72px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    padding: 8px 0 0 12px;
}

.day:hover {
    background-color: #f8f8f8;
}

.current-month {
    color: #000000;
    background-color: white;
}

.other-month {
    color: #ccc;
    background-color: #fafafa;
}

.selected {
    background-color: #FFA18E !important;
    color: white !important;
    font-family: 'Inter';
    font-weight: 800;
    font-size: 14px;
}

.selected:hover {
    background-color: #ff9277 !important;
}

.selected.has-diet {
    background-color: #FFA18E !important;
}

.right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-right: 20px;
    overflow: hidden;
}

.diet-list-section {
    flex: 1;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 17px 17px 17px 17px;
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
    display: flex;
    flex-direction: column;
}

.modal-footer {
    padding: 0;
    border-top: none;
    display: flex;
    position: relative;
    height: 40px;
    width: 100%;
    margin-bottom: 15px;
}

.cancel-button {
    padding: 8px 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    position: absolute;
    right: 110px;
}

.confirm-button {
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    background-color: #FF4B4B;
    color: white;
    cursor: pointer;
    position: absolute;
    right: 220px;
}

.confirm-button:hover {
    background-color: #ff3333;
}

.cancel-button:hover {
    background-color: #f5f5f5;
}

.calendar-grid {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.has-diet {
    background-color: #FFF8ED !important;
    z-index: 1;
}

.has-diet:hover {
    background-color: #FFF0DB !important;
}

.diet-card {
    background: white;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
    transition: all 0.2s ease;
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