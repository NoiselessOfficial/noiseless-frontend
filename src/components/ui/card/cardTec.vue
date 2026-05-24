<script setup>
import BaseCard from './baseCard.vue'

defineProps({
  titulo: String,
  descricao: String,
  icone: Object
})
</script>

<template>
  <BaseCard>
    <div class="">
      <div class="border-l-5 border-[#B1ECF9] pl-2">
        <component class="icone text-[#B1ECF9]" :size="40" :is="icone" />
      </div>
      <div class="">
        <h2 class="text-white text-2xl font-[900] mt-1">
          {{ titulo }}
        </h2>
        <p class="text-white">{{ descricao }}</p>
      </div>
    </div>
  </BaseCard>
</template>
