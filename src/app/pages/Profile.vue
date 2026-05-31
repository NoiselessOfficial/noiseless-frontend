<script setup>
import Modal from '@/components/ui/Modal.vue'
import UserSection from '@/components/profile/userSection.vue'
import { ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  modelValue: Boolean
})

function close() {
  emit('update:modelValue', false)
}

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Modal
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <div class="h-screen w-screen flex justify-end">
      <ChevronRight
        class="text-white text-6xl mr-2 my-auto font-black cursor-pointer hover:size-20 transition-all"
        @click.self="close()" size="70"
      />
      <div class="bg-[#171717] border-l-2 border-white h-screen w-180">
        <UserSection />
      </div>
    </div>
  </Modal>
</template>
