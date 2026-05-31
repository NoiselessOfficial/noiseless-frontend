<script setup lang="ts">
import {UserSection, Modal} from '@/components/profile';

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Modal 
    :modelValue="modelValue" 
    @update:modelValue="emit('update:modelValue', $event)" 
  >
  <UserSection/>
  </Modal>
</template>