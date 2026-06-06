import { ref, onMounted, onUnmounted } from 'vue'

export function useView() {
  const item = ref(null)
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (!entry) return

      isVisible.value = entry.isIntersecting

      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })

    if (item.value) {
      observer.observe(item.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { item, isVisible }
}
