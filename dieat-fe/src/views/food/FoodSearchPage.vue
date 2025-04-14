<template>
    <header>
        <Header />
    </header>

    <div class="food-search-page">
        <h2>음식 데이터 검색</h2>

        <div class="search-bar-container">
            <SearchBar v-model="searchKeyword" @search="searchFood" @add="onAddFood" @settings="onSettingsClick" />
            <SearchResultList v-if="searchResults.length > 0" :results="searchResults" @select="handleSelectResult" />
        </div>

        <div class="main-content">
            <div class="search-result">
                <FoodTable v-if="selectedFood" :items="[selectedFood]" @add-to-basket="handleAddToBasket" />
                <p v-else class="no-data">표시할 데이터가 없습니다</p>
            </div>

            <div class="basket-panel">
                <BasketPanel :items="basket" @remove-item="removeFromBasket" @update-quantity="updateBasketQuantity" />
                <button class="complete-button">완료</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Header from '@/components/common/Header.vue';
import FoodTable from '@/components/food/searchFood/FoodTable.vue';
import BasketPanel from '@/components/food/searchFood/BasketPanel.vue';
import SearchResultList from '@/components/food/searchFood/SearchResultList.vue';
import SearchBar from '@/components/food/searchFood/SearchBar.vue';

const searchKeyword = ref('');
const searchResults = ref([]);
const selectedFood = ref(null);
const basket = ref([]);
const isManuallySelected = ref(false);

const router = useRouter();

const allFoods = ref([]);

function onAddFood() {
    router.push('/registerFood');
}

// 🔍 검색어 변경 감지
watch(searchKeyword, (newKeyword) => {
    if (isManuallySelected.value) {
        isManuallySelected.value = false;
        return;
    }

    if (newKeyword.trim()) {
        searchResults.value = mockSearch(newKeyword);
        console.log('[watch] searchResults:', searchResults.value);
    } else {
        searchResults.value = [];
        selectedFood.value = null;
    }
});

onMounted(async () => {
    try {
        const res = await fetch('http://localhost:3000/fooddata');
        if (!res.ok) throw new Error('음식 데이터를 불러오지 못 했습니다.');
        allFoods.value = await res.json();
    } catch (e) {
        console.error(e);
    }
});

function searchFood(keyword = searchKeyword.value) {
    if (!keyword.trim()) {
        selectedFood.value = null;
        return;
    }

    selectedFood.value =
        allFoods.value.find(item => item.name === keyword.trim()) || null;
}

function mockSearch(keyword) {
    return allFoods.value
        .filter(item => item.name.includes(keyword.trim()))
        .map(item => ({ name: item.name }));
}

function handleSelectResult(item) {
    isManuallySelected.value = true;
    searchKeyword.value = item.name;
    searchResults.value = [];
    searchFood(item.name);
}

function handleAddToBasket(item) {
    const exists = basket.value.find(b => b.name === item.name);
    if (!exists) {
        basket.value.push({ ...item, quantity: 1 });
    } else {
        exists.quantity += 1;
    }
}

function removeFromBasket(index) {
    basket.value.splice(index, 1);
}

function updateBasketQuantity({ index, quantity }) {
    if (quantity >= 0) {
        basket.value[index].quantity = quantity;
    }
}

function onSettingsClick() {
    alert('설정 버튼 클릭됨 (추후 기능 추가)');
}
</script>

<style src="@/assets/food/searchFood.css"></style>