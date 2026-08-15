<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Upload, Filter, Music, Users } from 'lucide-vue-next'
import CardHome from './cardHome.vue'

const offset = ref(0)

const handleScroll = () => {
  requestAnimationFrame(() => {
    offset.value = window.scrollY
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="w-full min-h-[70vh] flex flex-col lg:flex-row items-center mt-10 lg:mt-0">

    <!-- SHADOW DIV -->
    <div  class="flex items-center ml- w-full h-1/2 absolute">
      <div class="w-160 h-full bg-white/10 blur-[100px]"></div>
    </div>
    <div
      class="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 lg:py-12"
      :style="{
        transform: `translateY(${offset * 0.4}px)`
      }"
    >
      <div
        class="flex items-center gap-2 border border-white/20 px-4 py-1 rounded-full w-fit mb-6"
      >
        <Users class="w-4 h-4 text-white" />
        <h1 class="text-sm md:text-base text-white">
          Helping up to 20% of the population sensitive to sound.
        </h1>
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-white leading-tight">
        For a Delightful and
        <span
          class="bg-clip-text text-transparent bg-linear-to-r from-[#B1ECF9] to-white"
        >
          Noiseless
        </span>
        Experience
      </h1>

      <h2 class="text-sm md:text-base text-white/70 mt-3 max-w-xl">
        Noiseless is a software focused on assisting those impacted by misophonia (estimated 5-20% of adults).
      </h2>

      <div class="flex gap-10 mt-10">
        <CardHome
          class=""
          titulo="Upload"
          descricao="Upload files"
          :icone="Upload"
        />
        <CardHome
          class=""
          titulo="Filter"
          descricao="Intelligent filtering"
          :icone="Filter"
        />
        <CardHome
          class=""
          titulo="Listen"
          descricao="Listen delightfully"
          :icone="Music"
        />
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex justify-end items-center relative">
      <img
        src="/images/laptop.png"
        alt="laptop"
        class="w-10/12 mt-8 mr-8 drop-shadow-[0px_0px_26px_hsl(0,0%,80%)]"
        :style="{
          transform: `translateY(${offset * -0.3}px)`, opacity: 1 - offset / 600
        }"
      />
    </div>

  </section>
</template>

<style>
.banner-float {
  animation: flutuando 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}

@keyframes flutuando {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>
