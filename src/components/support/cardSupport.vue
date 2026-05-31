<script setup lang="ts">
defineProps({
  titulo: String
})
</script>

<template>
  <div class="bg-[#8C819E]/20 p-5 rounded-3xl backdrop-blur-md border border-white/20 rounded-md p-2 shadow-lg w-150">
    <h1 class="text-white text-4xl font-black mb-6">{{ titulo }}</h1>
    <div class="flex flex-col gap-5">
      <slot></slot>
    </div>
  </div>
</template>
