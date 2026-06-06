<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps<{
  to: string
}>()
</script>

<template>
  <li>
    <RouterLink
      :to="to"
      v-bind="$attrs"
      :class="[
        'flex transition duration-300 hover:text-[#7bdff6]',
        $attrs.class
      ]"
    >
      <slot />
    </RouterLink>
  </li>
</template>
