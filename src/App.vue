<script setup lang="ts">
import '@/styles/index.css'
import { onMounted } from 'vue'
import { useLenis } from '@/composables/useLenis'

onMounted(() => {
  useLenis()
})

</script>

<template>
  <RouterView />
</template>