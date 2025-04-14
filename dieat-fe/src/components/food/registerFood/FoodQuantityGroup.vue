<template>
    <div class="food-register-grid-3">
        <FoodInputField v-model="amountValue" label="기준량" type="number" />
        <FoodInputField v-model="unitValue" label="측정 단위" />
        <FoodInputField v-model="serveUnitValue" label="제공 단위" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import FoodInputField from './FoodInputField.vue'

const props = defineProps(['amount', 'unit', 'serveUnit'])
const emits = defineEmits(['update:amount', 'update:unit', 'update:serveUnit'])

const amountValue = computed({
    get: () => props.amount,
    set: val => emits('update:amount', val)
})

const unitValue = computed({
    get: () => props.unit,
    set: val => emits('update:unit', val)
})

const serveUnitValue = computed({
    get: () => props.serveUnit,
    set: val => emits('update:serveUnit', val)
})
</script>