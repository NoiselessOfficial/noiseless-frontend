<script setup lang="ts">
const props = defineProps<{
  state: boolean
}>()
</script>

<template>
  <div
    class="w-50 h-10 relative overflow-hidden flex rounded-3xl btnBase border-0 shadow-xl/20 cursor-pointer"
    :class="props.state ? 'btnL' : 'btnC'"
  >
    <h1 class="text-center my-auto mx-auto text-black text-[120%]">
      {{ state ? 'login' : 'cadastro' }}
    </h1>

    <div
      class="w-full absolute top-0 left-0 transition-all flex h-full"
    >
      <img
        :class="props.state ? 'translate-x-4 rotate-0': 'translate-x-38 rotate-360'"
        class="transition-all h-8 my-auto duration-700"
        src="/images/nono.ico"
        alt=""
      />
    </div>
  </div>
</template>


<style scoped>
.btnBase {
  transition: all 1s;
  background: linear-gradient(to right, #fff, #b1ecf9, #fff);
  background-size: 200%;
}

.btnL {
  background-position: 100%;
}

.btnC {
  background-position: 0%;
}
</style>
