<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <li>
    <RouterLink
      :to="to"
      class=" hover:text-[#7bdff6] hover:transition duration-300" active-class="text-[#7bdff6]"
    >
      <slot />
    </RouterLink>
  </li>
</template>