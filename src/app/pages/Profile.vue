<script setup>
import Modal from '@/components/ui/Modal.vue'
import UserSection from '@/components/profile/userSection.vue'

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
      <h1
        class="text-white text-6xl mr-4 my-auto font-black cursor-pointer"
        @click.self="close()"
      >
        >
      </h1>
      <div class="bg-[#171717] border-l-2 border-white h-screen w-180">
        <UserSection />
      </div>
    </div>
  </Modal>
</template>
