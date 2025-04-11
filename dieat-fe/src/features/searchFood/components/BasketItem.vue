<template>
    <div class="basket-item">
        <span class="item-name">{{ item.name }}</span>
        <div class="item-controls">
            <span class="item-quantity">{{ item.quantity }}</span>
            <button class="delete-button" @click="$emit('remove', item)">✖</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>