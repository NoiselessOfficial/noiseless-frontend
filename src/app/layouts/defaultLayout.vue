<!-- app/layouts/DefaultLayout.vue -->
<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#070025]">
    <Navbar />
    <main class="content">
      <slot />
    </main>
  </div>
</template>
