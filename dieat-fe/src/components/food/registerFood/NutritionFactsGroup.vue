<template>
    <div class="grid grid-cols-5 gap-4">
        <FoodInputField v-model="kcalValue" label="열량" type="number" />
        <FoodInputField v-model="carbValue" label="탄수화물" type="number" />
        <FoodInputField v-model="proteinValue" label="단백질" type="number" />
        <FoodInputField v-model="fatValue" label="지방" type="number" />
        <FoodInputField v-model="sugarValue" label="당류" type="number" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import FoodInputField from './FoodInputField.vue'

const props = defineProps(['kcal', 'carb', 'protein', 'fat', 'sugar'])
const emits = defineEmits([
    'update:kcal', 'update:carb', 'update:protein',
    'update:fat', 'update:sugar'
])

const kcalValue = computed({
    get: () => props.kcal,
    set: val => emits('update:kcal', val)
})
const carbValue = computed({
    get: () => props.carb,
    set: val => emits('update:carb', val)
})
const proteinValue = computed({
    get: () => props.protein,
    set: val => emits('update:protein', val)
})
const fatValue = computed({
    get: () => props.fat,
    set: val => emits('update:fat', val)
})
const sugarValue = computed({
    get: () => props.sugar,
    set: val => emits('update:sugar', val)
})
</script>