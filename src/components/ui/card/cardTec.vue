<script setup>
import BaseCard from './baseCard.vue'
import { useView } from '@/composables/useView'

const { item, isVisible } = useView()

defineProps({
  titulo: String,
  descricao: String,
  icone: Object
})
</script>

<template>
  <BaseCard>
    <div
      ref="item"
      class="transition-all duration-700 ease-out"
      :class="
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      "
    >
      <div class="border-l-5 border-[#B1ECF9] pl-2">
        <component class="icone text-[#B1ECF9]" :size="40" :is="icone" />
      </div>
      <div class="">
        <h2 class="text-white text-2xl font-extrabold mt-1">
          {{ titulo }}
        </h2>
        <p class="text-white">{{ descricao }}</p>
      </div>
    </div>
  </BaseCard>
</template>
