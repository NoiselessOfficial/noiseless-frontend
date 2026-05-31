<script setup lang="ts">
import DefaultLayout from '../layouts/defaultLayout.vue'
import LogoSection from '@/components/support/logoSection.vue'
import cardSection from '@/components/support/cardSection.vue'
import { NeveBg } from '@/components/ui'
</script>

<template>
  <DefaultLayout>
    <div class="flex w-screen justify-center gap-50 px-30 mt-30">
      <LogoSection />
      <cardSection />
    </div>
  </DefaultLayout>
  <NeveBg/>
</template>
