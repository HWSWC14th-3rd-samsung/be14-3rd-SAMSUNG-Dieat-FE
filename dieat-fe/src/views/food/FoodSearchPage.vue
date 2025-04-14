<template>
  <header>
    <Header />
  </header>

  <div class="food-search-page">
    <h2>음식 데이터 검색</h2>

    <div class="search-bar-container">
      <SearchBar v-model="searchKeyword" @search="searchFood" @add="onAddFood" @selectFilter="handleFilter" />
      <SearchResultList v-if="searchResults.length > 0" :results="searchResults" @select="handleSelectResult" />
    </div>

    <div class="main-content">
      <div class="search-result">
        <FoodTable v-if="selectedFood" :items="selectedFood" @add-to-basket="handleAddToBasket" />
        <p v-else class="no-data">표시할 데이터가 없습니다</p>
      </div>

      <div class="basket-panel">
        <BasketPanel :items="basket" @remove-item="removeFromBasket" @update-quantity="updateBasketQuantity" />
        <button class="complete-button" @click="goToRegisterMeal" id="completeButton">완료</button>
      </div>
    </div>
  </div>

  <RegisterFoodForm v-if="showModal" :isModal="true" @close="showModal = false" @register="handleRegisterFood" />
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRegistMealStore } from '@/stores/registMeal'

import Header from '@/components/common/Header.vue'
import FoodTable from '@/components/food/searchFood/FoodTable.vue'
import BasketPanel from '@/components/food/searchFood/BasketPanel.vue'
import SearchResultList from '@/components/food/searchFood/SearchResultList.vue'
import SearchBar from '@/components/food/searchFood/SearchBar.vue'
import RegisterFoodForm from '@/components/food/registerFood/RegisterFoodForm.vue'

const searchKeyword = ref('')
const searchResults = ref([])
const selectedFood = ref(null)
const basket = ref([])
const isManuallySelected = ref(false)
const showModal = ref(false)

const allFoods = ref([])
const router = useRouter()
const registMealStore = useRegistMealStore()

function onAddFood() {
  showModal.value = true;
}

function handleRegisterFood(food) {
  allFoods.value.push(food);
  basket.value.push({ ...food, quantity: 1 });
  selectedFood.value = [food];
  searchKeyword.value = food.name;
  isManuallySelected.value = true;
  searchResults.value = [];
}

function goToRegisterMeal() {
  console.log('완료 버튼 클릭됨')
  
  if (basket.value.length === 0) {
    alert('장바구니에 담긴 음식이 없습니다.')
    return
  }

  console.log('장바구니 데이터:', basket.value)
  
  try {
    console.log('Pinia store에 데이터 저장 시도')
    registMealStore.setSelectedFoods(basket.value)
    console.log('Pinia store에 데이터 저장 성공:', registMealStore.selectedFoods)
    
    console.log('라우터 이동 시도: /registmeal')
    router.push('/registmeal')
    console.log('라우터 이동 명령 실행 완료')
  } catch (error) {
    console.error('오류 발생:', error)
  }
  
  return
}

watch(searchKeyword, (newKeyword) => {
  if (isManuallySelected.value) {
    isManuallySelected.value = false
    return
  }

  if (newKeyword.trim()) {
    searchResults.value = mockSearch(newKeyword)
  } else {
    searchResults.value = []
    selectedFood.value = null
  }
})

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/food')
    if (!res.ok) throw new Error('음식 데이터를 불러오지 못 했습니다.')
    allFoods.value = await res.json()

    const savedFoods = registMealStore.selectedFoods
    if (savedFoods && savedFoods.length > 0) {
      basket.value = savedFoods
    }
    
    // 완료 버튼에 직접 이벤트 리스너 추가 (테스트용)
    setTimeout(() => {
      const completeButton = document.getElementById('completeButton')
      if (completeButton) {
        console.log('완료 버튼 찾음, 이벤트 리스너 추가')
        completeButton.addEventListener('click', () => {
          console.log('완료 버튼 직접 클릭 이벤트 발생')
          if (basket.value.length > 0) {
            registMealStore.setSelectedFoods(basket.value)
            console.log('직접 라우터 이동 시도')
            window.location.href = '/registmeal'
          }
        })
      } else {
        console.log('완료 버튼을 찾을 수 없음')
      }
    }, 1000)
  } catch (e) {
    console.error(e)
  }
})

function searchFood(keyword = searchKeyword.value) {
  if (!keyword.trim()) {
    selectedFood.value = null
    return
  }
  selectedFood.value = allFoods.value.filter(item => item.name === keyword.trim())
}

function mockSearch(keyword) {
  const uniqueNames = new Set()
  return allFoods.value
    .filter(item => item.name.includes(keyword.trim()))
    .filter(item => {
      if (uniqueNames.has(item.name)) return false
      uniqueNames.add(item.name)
      return true
    })
    .map(item => ({ name: item.name }))
}

function handleSelectResult(item) {
  isManuallySelected.value = true
  searchKeyword.value = item.name
  searchResults.value = []
  searchFood(item.name)
}

function handleFilter(type) {
  if (!selectedFood.value) return;

  if (type === 'latest') {
    selectedFood.value = [...selectedFood.value].sort((a, b) => b.id - a.id);
  } else if (type === 'accuracy') {
    selectedFood.value = [...selectedFood.value].sort((a, b) => b.accurate - a.accurate);
  } else if (type === 'ratio') {
    selectedFood.value = [...selectedFood.value].sort((a, b) => {
      const aRatio = a.accurate + a.inaccurate === 0 ? 0 : a.accurate / (a.accurate + a.inaccurate);
      const bRatio = b.accurate + b.inaccurate === 0 ? 0 : b.accurate / (b.accurate + b.inaccurate);
      return bRatio - aRatio;
    });
  }
}

function handleAddToBasket(item) {
  const exists = basket.value.find(b => b.id === item.id)
  if (!exists) {
    basket.value.push({ ...item, quantity: 1 })
  } else {
    exists.quantity += 1
  }
}

function removeFromBasket(index) {
  basket.value.splice(index, 1)
}

function updateBasketQuantity({ index, quantity }) {
  if (quantity >= 0) basket.value[index].quantity = quantity
}
</script>

<style src="@/assets/food/searchFood.css"></style>
