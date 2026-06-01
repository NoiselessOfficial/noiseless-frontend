<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  to: string
  icone: Object
  text: String
}>()
</script>

<template>
  <a :href="to">
    <div class="flex gap-3 item transition p-3 hover:bg-black/40 rounded-2xl duration-300">
      <div
        class="backdrop-blur-md bg-[rgb(1,1,1)]/20 border-white/30 border-1 rounded-md p-2 shadow-[inset_0_1px_5px_1px_rgba(255,255,255,0.2)]"
      >
        <component class="text-white" :is="icone" :size="35" />
      </div>
      <div class="flex flex-1">
        <h2 class="text-white h-fit my-auto font-black">{{ text }}</h2>
      </div>
      <ChevronRight class="text-white h-fit my-auto" :size="35"/>
    </div>
  </a>
</template>

<style scoped>
</style>