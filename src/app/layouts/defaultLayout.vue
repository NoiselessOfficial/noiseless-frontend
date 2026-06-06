<script setup lang="ts">
import Navbar from '@/components/base/navbar.vue'
import ImageBg from '@/components/base/imageBg.vue'
</script>

<template>
  <div class="min-h-screen bg-[#070025] overflow-x-hidden">
    <ImageBg class="hidden md:block" />
    <div class="hidden md:block">
      <Navbar class="relative z-10 mt-10" />
    </div>
    <main class="content">
      <slot />
    </main>
  </div>
</template>
