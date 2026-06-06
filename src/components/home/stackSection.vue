<script setup lang="ts">
import { Users } from 'lucide-vue-next'
import { CardTec } from '@/components/ui/card';
</script>

<template>
  <section class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-4/5 m-auto mb-40">
    <CardTec
      titulo="Java"
      descricao="High-level object-oriented language which provides us a fully cross-platform development with WORA"
      :icone="Users"
    />
    <CardTec
      titulo="JavaFX"
      descricao="JavaFX is a set of graphics and media packages for building desktop applications"
      :icone="Users"
    />
    <CardTec
      titulo="DSP"
      descricao="Digital Signal Processing (DSP) is the mathematical manipulation of analog signals to digital signals"
      :icone="Users"
    />
    <CardTec
      titulo="XXXXX"
      descricao="XXXXXXXXX"
      :icone="Users"
    />
  </section>
</template>
