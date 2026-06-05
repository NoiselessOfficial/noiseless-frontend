<script setup lang="ts">
import DefaultLayout from '../layouts/defaultLayout.vue';
import { HeroSection, InstallSection, StackSection, EndSection } from '@/components/home'
</script>

<template>
  <DefaultLayout>
    <HeroSection />
    <InstallSection />
    <StackSection />
    <EndSection />
  </DefaultLayout>
</template>
