<script setup lang="ts">
import { Braces, Coffee, CirclePower, Layout } from 'lucide-vue-next'
import { CardTec } from '@/components/ui/card'
import { Title } from '@/components/ui'
</script>

<template>
  <Title variant="v1" class="m-auto mb-20 mt-20 drop-shadow-[0px_0px_26px_hsl(0,0%,80%)]">Technologies</Title>
  <section
    class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-4/5 m-auto drop-shadow-[0px_0px_20px_hsl(0,0%,50%)]"
  >
    <CardTec
      titulo="Java"
      descricao="Java is a high-level object-oriented language which provides a fully cross-platform development with WORA."
      :icone="Coffee"
    />
    <CardTec
      titulo="Spring"
      descricao="Spring is a powerful Java-based framework for building scalable and maintainable applications."
      :icone="CirclePower"
    />
    <CardTec
      titulo="JavaFX"
      descricao="Java library that provides a massive set of graphics and media packages for building desktop applications."
      :icone="Layout"
    />
    <CardTec
      titulo="C++"
      descricao="C++ is a mid-level language that provides OOP and low-level memory management. Useful for calculations and high performance."
      :icone="Braces"
    />
  </section>
</template>
