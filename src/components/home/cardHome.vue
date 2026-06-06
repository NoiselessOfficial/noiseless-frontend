<script setup>
import BaseCard from '@/components/ui/card/baseCard.vue'

defineProps({
  titulo: String,
  descricao: String,
  icone: Object
})
</script>

<template>
  <BaseCard>
    <div class="flex justify-center w-full text-white gap-2 items-center">
      <div class="b1">
        <component class="icone" :is="icone" />
      </div>
      <div class="">
        <h2 class=" md:text-2xl">{{ titulo }}</h2>
        <p class="text-[6px] md:text-[10px] w-full">{{ descricao }}</p>
      </div>
    </div>
  </BaseCard>
</template>

<style scoped>
.a1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .b1 {
    margin-right: 10%;
  }

  .b1 {
    .icone {
      color: #ffffff;
    }
  }
}
</style>
