<script setup lang="ts">
import Navbar from '@/components/base/navbar.vue'
import ImageBg from '@/components/base/imageBg.vue'
import NeveBg from '@/components/ui/neveBg.vue'
</script>

<template>
  <div class="min-h-screen bg-[#070025]">
    <ImageBg />
    <div class="hidden md:block">
      <Navbar class="relative z-10 mt-10" />
    </div>
    <div class="block md:hidden">
      <NavbarMobile />
    </div>
    <main class="content">
      <slot />
    </main>
  </div>
  <NeveBg />
</template>
