<script setup lang="ts">
import NeveLayout from '../layouts/neveLayout.vue';
import LogoSection from '@/components/support/logoSection.vue'
import cardSection from '@/components/support/cardSection.vue'
</script>

<template>
  <NeveLayout>
    <div class="flex w-screen justify-center gap-50 px-30 mt-30">
      <LogoSection />
      <cardSection />
    </div>
  </NeveLayout>
</template>
