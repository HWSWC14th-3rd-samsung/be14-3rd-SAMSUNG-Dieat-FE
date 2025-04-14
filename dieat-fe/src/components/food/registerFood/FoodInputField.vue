<template>
    <div class="mb-4">
        <label class="block font-semibold mb-2">{{ label }}</label>
        <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            class="w-full p-2 border rounded-md" />
    </div>
</template>

<script setup>
defineProps({
    modelValue: [String, Number],
    label: String,
    type: {
        type: String,
        default: 'text'
    }
})
defineEmits(['update:modelValue'])
</script>