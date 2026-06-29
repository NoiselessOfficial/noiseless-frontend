<script setup lang="ts">
const props = defineProps<{
  gateway: string
  image: string
  h: string
  w: string
  disabled?: boolean
}>()

const model = defineModel<string>();
</script>

<template>
  <label
    class="flex justify-center items-center h-[60px] w-[85px] rounded-[10px] border-[1px] bg-[hsla(0,0%,100%,0.20)] transition duration-400"
    :class="props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[hsla(0,0%,100%,0.40)]'"
  >
    <input
      class="peer sr-only"
      type="radio"
      name="gateway"
      :value="gateway"
      :disabled="props.disabled"
      v-model="model"
    />
    <img
      :style="{ height: h, width: w }"
      class="drop-shadow-[0px_0px_3px_#000000] peer-checked:scale-[1.1] peer-checked:drop-shadow-[0px_0px_4px_#7bdff6] transition duration-400"
      :src="image"
      :alt="gateway + ' gateway'"
    />
  </label>
</template>
