<script setup lang="ts">
import { Users } from 'lucide-vue-next'
import { CardTec } from '@/components/ui/card';
</script>

<template>
  <section class="grid grid-cols-4 gap-40 w-4/5 m-auto mb-40">
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
