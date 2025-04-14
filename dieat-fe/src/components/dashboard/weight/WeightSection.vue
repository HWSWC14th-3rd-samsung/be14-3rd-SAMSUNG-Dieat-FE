<template>
  <div class="weight-chart-wrapper">
    <div class="y-axis-labels">
      <div
        v-for="tick in yTicks"
        :key="tick"
        class="y-label"
      >
        {{ tick }}kg
      </div>
    </div>
    <div class="chart-scroll-area" ref="scrollAreaRef">
      <canvas ref="chartRef" :width="canvasWidth" :height="canvasHeight" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
  Chart, LineController, LineElement, PointElement,
  LinearScale, CategoryScale, Tooltip
} from 'chart.js'
import dayjs from 'dayjs'
import { weightRecords } from '../data/weightData'
import { weightGoals } from '../data/weightGoals'

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip)

const chartRef = ref(null)
const scrollAreaRef = ref(null)

// 1. 날짜 목록 생성
const startDate = dayjs(weightRecords[0].date)
const endDate = dayjs(weightRecords[weightRecords.length - 1].date)
const dateRange = []
let current = startDate
while (current.isBefore(endDate) || current.isSame(endDate)) {
  dateRange.push(current.format('M/D'))
  current = current.add(1, 'day')
}

// 2. 체중 매핑
const dateToWeightMap = Object.fromEntries(weightRecords.map(r => [r.date, r.weight]))
const data = dateRange.map(date => dateToWeightMap[date] ?? null)

// 3. y축 눈금
const values = weightRecords.map(r => r.weight).concat([weightGoals.startWeight, weightGoals.goalWeight])
const rawMin = Math.min(...values)
const rawMax = Math.max(...values)

let minY, maxY

if (Number.isInteger(rawMin)) {
  minY = rawMin - 1
} else {
  minY = Math.floor(rawMin)
}

if (Number.isInteger(rawMax)) {
  maxY = rawMax + 1
} else {
  maxY = Math.ceil(rawMax)
}

const yTicks=[];
for(let i=maxY;i>=minY;i--){
  yTicks.push(i);
}

// 4. 차트 크기
const canvasWidth = dateRange.length * 60
const canvasHeight = 300

onMounted(() => {
  const ctx = chartRef.value.getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dateRange.map(d => dayjs(d).format('M월 D일')), 
      datasets: [
        {
          data,
          borderColor: '#46a3ff',
          backgroundColor: '#46a3ff44',
          pointRadius: 4,
          tension: 0.3,
          spanGaps: true
        },
        {
          label: '시작 체중',
          data: new Array(dateRange.length).fill(weightGoals.startWeight),
          borderColor: '#ff4d4d', // 빨간색
          borderWidth: 2,
          borderDash: [4, 4],
          pointRadius: 0
        },
        {
          label: '목표 체중',
          data: new Array(dateRange.length).fill(weightGoals.goalWeight),
          borderColor: '#4d79ff', // 파란색
          borderWidth: 2,
          borderDash: [4, 4],
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: false // ✅ 범례 제거
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#555'
          }
        },
        y: {
          min: minY,
          max: maxY,
          ticks: {
        //     stepSize: step,
        //     callback: v => `${v}kg`,
            color: '#fff'
          },
          grid: {
            drawTicks: false
          }
        }
      }
    }
  })

  requestAnimationFrame(() => {
    scrollAreaRef.value.scrollLeft = scrollAreaRef.value.scrollWidth
  })
})
</script>

<style scoped>
.weight-chart-wrapper {
  display: flex;
  height: 300px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
}

.y-axis-labels {
  width: 50px;
  flex-shrink: 0;
  padding: 4px 4px 20px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  font-size: 12px;
  color: #555;
  background: white;
}

.chart-scroll-area {
  overflow-x: auto;
  overflow-y: hidden;
}

canvas {
  display: block;
}
</style>
