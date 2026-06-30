<script setup lang="ts">
import { Braces, Coffee, AudioWaveform, Layout } from 'lucide-vue-next'
import { CardTec } from '@/components/ui/card';
</script>

<template>
  <section class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-4/5 m-auto">
    <CardTec
      titulo="Java"
      descricao="High-level object-oriented language which provides a fully cross-platform development with WORA."
      :icone="Coffee"
    />
    <CardTec
      titulo="JavaFX"
      descricao="Java library that provides a massive set of graphics and media packages for building desktop applications."
      :icone="Layout"
    />
    <CardTec
      titulo="C"
      descricao="Low-level language that allows the management of system memory. Useful for calculations and high performance."
      :icone="Braces"
    />
    <CardTec
      titulo="DSP"
      descricao="Digital Signal Processing is the mathematical manipulation of digital signals."
      :icone="AudioWaveform"
    />
  </section>
</template>
