<script setup lang="ts">
import { User } from 'lucide-vue-next'
</script>

<template>
  <section class="flex ml-20 gap-10 mt-30">
    <div
      class="rounded-full overflow-hidden border-3 border-white w-30 h-30 flex justify-center align-middle"
    >
      <User :size="130" class="text-white" />
    </div>
    <div class="text-white flex align-middle flex-col h-fit my-auto"><h1 class="text-3xl font-black">Davizin Ramos</h1>
    <h2>Codando às 4 da manhã</h2></div>
  </section>
</template>
