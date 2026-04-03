<template>
    <button :class="['btn', variant]">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    variant?: string;
}>();
</script>

<style scoped>
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.p1 {
    background-color: #007bff;
    color: white;
}
</style>
