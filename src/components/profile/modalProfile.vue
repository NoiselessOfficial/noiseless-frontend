<!-- src/components/profile/modals/ProfileModal.vue -->
<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])
const showOverlay = ref(false)
const showContent = ref(false)

watch( () => props.modelValue, (state) => {
    if (state == true) {
      showOverlay.value = true
      setTimeout(() => {
        showContent.value = true
      }, 10)
    } else {
      showContent.value = false
      setTimeout(() => {
        showOverlay.value = false
        close()
      }, 300)
    }
  }
)

function close() {
  emit('update:modelValue', false)
}
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="showOverlay"
        class="overlay fixed inset-0 bg-black/50 flex justify-end"
        @click.self="close"
      >
        <transition name="slide">
          <div v-if="showContent" class="flex items-center h-screen">
            <ChevronRight
              class="text-white text-4xl cursor-pointer hover:scale-110 transition-all mr-2"
              @click="close()"
              size="70"
            />
            <div class="bg-[#171717] border-l-2 border-white h-screen w-180">
              <slot />
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>