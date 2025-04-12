<template>
  <div>
    <div class="week-range-container">
      <button class="arrow-button" @click="previousWeek">
        <LeftArrowIcon />
      </button>
      <div class="week-range" @click="isCalendarVisible = !isCalendarVisible">
        <div class="week-range-text">{{ getWeekRangeText() }}</div>
        <Calendar
        v-if="isCalendarVisible"
        v-model="selectedDate"
        :attributes="getAttributes()"
        @dayclick="onDayClick"
        class="calendar-popup"
        :show-nav="false"
        />
      </div>
      <button class="arrow-button" @click="nextWeek">
        <RightArrowIcon />
      </button>
    </div>
    <div class="calendar-grid">
      <div
        v-for="day in getWeekDays()"
        :key="day.date"
        class="calendar-day"
        :class="{ 
          'selected': selectedDate === day.date,
          'today': isToday(day.date)
        }"
        @click="selectDate(day.date)"
      >
        <div class="day-name">{{ day.dayName }}</div>
        <div class="day-date">{{ day.day }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { Calendar } from 'v-calendar'
import LeftArrowIcon from './icons/LeftArrowIcon.vue'
import RightArrowIcon from './icons/RightArrowIcon.vue'

const selectedDate = inject('selectedDate')
const currentWeekOffset = ref(0)
const isCalendarVisible = ref(false)

function isToday(date) {
  const today = new Date().toISOString().split('T')[0]
  return date === today
}

function getWeekDays() {
  const days = []
  const today = new Date()
  const lastSunday = new Date(today)
  lastSunday.setDate(today.getDate() - today.getDay() + (currentWeekOffset.value * 7))
  const dayNames = ['일', '월', '화', '수', '목', '금', '토']

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(lastSunday)
    currentDate.setDate(lastSunday.getDate() + i)
    days.push({
      date: currentDate.toISOString().split('T')[0],
      day: String(currentDate.getDate()),
      dayName: dayNames[currentDate.getDay()]
    })
  }

  return days
}

function getWeekRangeText() {
  const days = getWeekDays()
  const startDate = new Date(days[0].date)
  const endDate = new Date(days[6].date)
  return `${startDate.getFullYear()}년 ${startDate.getMonth() + 1}월 ${startDate.getDate()}일  -  ${endDate.getFullYear()} ${endDate.getMonth() + 1}월 ${endDate.getDate()}일`
}

function getAttributes() {
  return [
    {
      key: 'today',
      highlight: {
        color: 'blue',
        fillMode: 'light'
      },
      dates: new Date()
    }
  ]
}

const selectDate = (date) => {
  selectedDate.value = date
}

const onDayClick = (day) => {
  selectedDate.value = day.id
  isCalendarVisible.value = false
  const clickedDate = new Date(day.id)
  const today = new Date()
  const diffTime = clickedDate - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  currentWeekOffset.value = Math.floor(diffDays / 7)
}

const previousWeek = () => {
  currentWeekOffset.value--
}

const nextWeek = () => {
  currentWeekOffset.value++
}
</script>

<style scoped>
.week-range-container {
  width: 582px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 67px;
  background: #EFEFEF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;
}

.week-range {
  width: 100%;
  position: relative;
  height: 100%;
  text-align: center;
  font-size: 16px;
  color: #000;
  font-family: Inter;
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.week-range-text {
  width: 100%;
  position: relative;
  font-size: 16px;
  letter-spacing: -0.02em;
  font-weight: 600;
  font-family: Inter;
  color: #000;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.calendar-popup {
  background: yellow;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.arrow-button {
  background: red;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}

.calendar-grid {
  width: 582px;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.calendar-day {
  padding: 10px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.calendar-day.today {
  background-color: #FFF8ED;
}

.calendar-day:hover {
  background-color: #f5f5f5;
}

.calendar-day.selected {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.calendar-day.today.selected {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.day-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.day-date {
  font-size: 0.9em;
  color: #666;
}

.selected .day-date {
  color: white;
}
</style> 