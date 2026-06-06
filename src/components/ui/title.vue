<template>
  <div :class="['ttl', variant]">
    <slot class="content" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  variant?: string
}>()
</script>

<style scoped>
.ttl {
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  font-weight: 1000;
  width: fit-content;
}

.v1 {
  position: relative;
  border-radius: 50em;
  background: transparent;
  color: white;
}

.v1::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  border-radius: inherit;
  background: linear-gradient(to right, #b1ecf9, #ffffff);
  color: linear-gradient(to right, #b1ecf9, #ffffff);

  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
