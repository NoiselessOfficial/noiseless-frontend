<script setup lang="ts">
import { Users } from 'lucide-vue-next'
import { CardTec } from '@/components/ui/card';
</script>

<template>
  <section class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-4/5 m-auto mb-40">
    <CardTec
      titulo="Electron"
      descricao="Cross-platform desktop application framework"
      :icone="Users"
    />
    <CardTec
      titulo="Electron"
      descricao="Cross-platform desktop application framework"
      :icone="Users"
    />
    <CardTec
      titulo="Electron"
      descricao="Cross-platform desktop application framework"
      :icone="Users"
    />
    <CardTec
      titulo="Electron"
      descricao="Cross-platform desktop application framework"
      :icone="Users"
    />
  </section>
</template>
