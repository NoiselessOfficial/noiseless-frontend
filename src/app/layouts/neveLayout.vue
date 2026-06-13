<script setup lang="ts">
import Navbar from '@/components/base/navbar.vue'
import NavbarMobile from '@/components/base/navbarMobile.vue';
import ImageBg from '@/components/base/imageBg.vue'
import NeveBg from '@/components/ui/neveBg.vue';
</script>

<template>
  <div class="min-h-screen bg-[#070025] overflow-x-hidden">
    <ImageBg class="z-0 pointer-events-none"/>
    <div class="hidden md:block">
      <Navbar class="relative z-10 mt-10" />
    </div>
    <div class="block md:hidden">
      <NavbarMobile class="relative z-10 mt-10"/>
    </div>
    <main class="content">
      <slot />
    </main>
    <NeveBg/>
  </div>
</template>
