<script setup lang="ts">
import DefaultLayout from '../layouts/defaultLayout.vue';
import { HeroSection, InstallSection, StackSection, EndSection, FooterSection, MisophoniaSection } from '@/components/home'
</script>

<template>
  <DefaultLayout>
    <HeroSection />
    <InstallSection />
    <MisophoniaSection/>
    <StackSection />
    <EndSection />
    <FooterSection />
  </DefaultLayout>
</template>
