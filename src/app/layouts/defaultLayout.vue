<script setup lang="ts">
import Navbar from '@/components/base/navbar.vue'
import NavbarMobile from '@/components/base/navbarMobile.vue';
import ImageBg from '@/components/base/imageBg.vue'
</script>

<template>
  <div class="min-h-screen bg-[#070025] overflow-x-hidden">
    <ImageBg/>
    <div class="hidden md:block">
      <Navbar class="relative z-10 mt-10" />
    </div>
    <div class="block md:hidden">
      <NavbarMobile/>
    </div>
    <main class="content">
      <slot />
    </main>
  </div>
</template>
