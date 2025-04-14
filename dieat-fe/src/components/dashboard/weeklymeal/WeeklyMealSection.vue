<template>
  <div class="weekly-chart-wrapper">
    <div class="y-axis-labels">
      <div
        v-for="tick in yAxisTicks"
        :key="tick"
        class="y-label"
      >
        {{ tick }}kcal
      </div>
    </div>
    <div class="chart-scroll-area" ref="scrollAreaRef">
      <canvas ref="chartRef" :width="canvasWidth" :height="300" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
  Chart, BarController, BarElement, CategoryScale,
  LinearScale, Tooltip
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import dayjs from 'dayjs'
import { sampleMeals } from '../data/sampleMeals'
import { nutritionGoals } from '../data/nutritionGoals'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, annotationPlugin)

const chartRef = ref(null)
const scrollAreaRef = ref(null)

const sortedMeals = [...sampleMeals].sort((a, b) => a.date.localeCompare(b.date))
const minDate = dayjs(sortedMeals[0].date)
const maxDate = dayjs(sortedMeals[sortedMeals.length - 1].date)

const dateRange = []
let current = minDate
while (current.isSame(maxDate) || current.isBefore(maxDate)) {
  dateRange.push(current.format('YYYY-MM-DD'))
  current = current.add(1, 'day')
}

// 날짜별 칼로리와 이름
const groupedCalories = {}
const groupedNames = {}

dateRange.forEach(date => {
  groupedCalories[date] = []
  groupedNames[date] = []
})

sampleMeals.forEach(meal => {
  if (groupedCalories[meal.date]) {
    groupedCalories[meal.date].push(meal.calories)
    groupedNames[meal.date].push(meal.name)
  }
})

const maxStackSize = Math.max(...Object.values(groupedCalories).map(v => v.length))
const fixedColors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF']

const datasets = []
for (let i = 0; i < maxStackSize; i++) {
  datasets.push({
    data: dateRange.map(date => groupedCalories[date][i]),
    backgroundColor: fixedColors[i % fixedColors.length],
    stack: 'calories',
    barThickness: 8,
    borderRadius: 6,
    mealNames: dateRange.map(date => groupedNames[date][i]) // ✅ 추가
  })
}

datasets.push({
  type: 'line',
  label: '목표 섭취 칼로리',
  data: new Array(dateRange.length).fill(nutritionGoals.calories),
  borderColor: '#FFA500',
  borderWidth: 2,
  borderDash: [6, 4],
  pointRadius: 0,
  fill: false
})

const canvasWidth = dateRange.length * 60

const maxCalorieSum = Math.max(
  ...Object.values(groupedCalories).map(arr => arr.reduce((a, b) => a + b, 0)),
  nutritionGoals.calories
) + 200

const maxYValue = Math.ceil(maxCalorieSum)
const numYTicks = 6
const yAxisStep = Math.ceil(maxYValue / (numYTicks - 1) / 10) * 10
const yAxisMax = yAxisStep * (numYTicks - 1)

const yAxisTicks = []
for (let y = yAxisMax; y >= 0; y -= yAxisStep) {
  yAxisTicks.push(y)
}

onMounted(() => {
  const topValueLabelPlugin = {
    id: 'topValueLabel',
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart

      chart.data.labels.forEach((label, index) => {
        const total = chart.data.datasets
          .filter(ds => ds.type !== 'line')
          .map(ds => ds.data[index])
          .reduce((sum, val) => sum + (val || 0), 0)

        const xPos = x.getPixelForValue(index)
        const yPos = y.getPixelForValue(total)

        ctx.save()
        ctx.fillStyle = '#444'
        ctx.font = 'bold 10px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(`${total}kcal`, xPos, yPos - 3)
        ctx.restore()
      })
    }
  }

  const ctx = chartRef.value.getContext('2d')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dateRange.map(d => `${dayjs(d).format('M월 D')}일`),
      datasets
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (ctx) {
              const ds = ctx.dataset
              const index = ctx.dataIndex
              const mealName = ds.mealNames?.[index] || '이름 없음'
              return `${mealName}: ${ctx.raw} kcal`
            }
          }
        },
        annotation: {
          goalLine: {
            type: 'line',
            yMin: nutritionGoals.calories,
            yMax: nutritionGoals.calories,
            borderColor: '#F4A100',
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
              display: true,
              content: '목표 섭취',
              position: 'start',
              backgroundColor: '#F4A100',
              color: '#fff',
              font: {
                weight: 'bold'
              }
            },
            xScaleID: 'x',
            xMin: -0.5,
            xMax: dateRange.length - 0.5
          }
        },
        topValueLabel: true
      },
      scales: {
        y: {
          stacked: true,
          beginAtZero: true,
          min: 0,
          max: yAxisMax,
          ticks: {
            stepSize: yAxisStep,
            display: false
          },
          grid: {
            display: true,
            color: '#ddd',
            lineWidth: 1,
            drawTicks: false,
            drawBorder: false
          }
        }
      }
    },
    plugins: [topValueLabelPlugin]
  })

  requestAnimationFrame(() => {
    scrollAreaRef.value.scrollLeft = scrollAreaRef.value.scrollWidth
  })
})
</script>

<style scoped>
.weekly-chart-wrapper {
  display: flex;
  height: 300px;
  width: 100%;
  background: white;
}

.y-axis-labels {
  width: 60px;
  flex-shrink: 0;
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  font-size: 12px;
  color: #555;
  background: white;
  transform: translateY(-12px);
}

.chart-scroll-area {
  overflow-x: auto;
  overflow-y: hidden;
}
canvas {
  display: block;
}
</style>
