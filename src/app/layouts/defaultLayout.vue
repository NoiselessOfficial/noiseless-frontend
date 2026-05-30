<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue'
import ImageBg from '@/components/base/ImageBg.vue';
</script>

<template>
  <div class="min-h-screen bg-[#070025]">
    <ImageBg/>
    <Navbar class="relative z-10 mt-10"" />
    <main class="content">
      <slot />
    </main>
  </div>
</template>
