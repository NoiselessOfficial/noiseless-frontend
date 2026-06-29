<script setup lang="ts">
import { Braces, Coffee, AudioWaveform, Layout } from 'lucide-vue-next'
import { CardTec } from '@/components/ui/card';
</script>

<template>
  <section class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-4/5 m-auto">
    <CardTec
      titulo="Java"
      descricao="High-level object-oriented language which provides us a fully cross-platform development with WORA"
      :icone="Coffee"
    />
    <CardTec
      titulo="JavaFX"
      descricao="JavaFX is a set of graphics and media packages for building desktop applications"
      :icone="Layout"
    />
    <CardTec
      titulo="DSP"
      descricao="Digital Signal Processing (DSP) is the mathematical manipulation of analog signals to digital signals"
      :icone="AudioWaveform"
    />
    <CardTec
      titulo="C"
      descricao="Is a language that allows for low-level memory access, useful for calculations and high performance"
      :icone="Braces"
    />
  </section>
</template>
