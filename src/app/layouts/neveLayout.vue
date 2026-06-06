<script setup lang="ts">
import Navbar from '@/components/base/navbar.vue'
import ImageBg from '@/components/base/imageBg.vue';
import NeveBg from '@/components/ui/neveBg.vue';
</script>

<template>
  <div class="min-h-screen bg-[#070025]">
    <ImageBg/>
    <Navbar class="relative z-10 mt-10"" />
    <main class="content">
      <slot />
    </main>
  </div>
  <NeveBg/>
</template>
