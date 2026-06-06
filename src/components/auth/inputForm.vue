<script setup lang="ts">
const props = defineProps<{
  pch: string
  lab: string
  type: string
}>()

const model = defineModel<string>()
</script>

<template>
  <div>
    <label class="text-white">{{ props.lab }}</label>
    <input
      :type="props.type"
      :placeholder="props.pch"
      v-model="model"
      class="bg-[#d4f5ff] w-full p-3 shadow-xl rounded-2xl"
    />
  </div>
</template>
