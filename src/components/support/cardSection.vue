<script lang="ts" setup>
import CardSuport from './cardSupport.vue'
import ItemCard from './itemCard.vue'
import { Users } from 'lucide-vue-next'
import { Light } from '../ui/index.ts';
</script>

<template>
  <div class="relative flex flex-col gap-15">
    <Light class="top-20 left-80"/>
    <CardSuport titulo="Social media">
      <ItemCard text="Noiseless" :icone="Users" />
      <ItemCard text="noiselessofficial@outlook.com" :icone="Users" />
      <ItemCard text="projNoiseless" :icone="Users" />
    </CardSuport>
    <CardSuport titulo="Support">
      <ItemCard text="Suporte" :icone="Users" />
    </CardSuport>
  </div>
</template>
