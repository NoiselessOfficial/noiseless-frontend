<script setup lang="ts">
import { Button } from '@/components/ui'
import { useView } from '@/composables/useView';

const {item, isVisible} = useView()
</script>

<template>
  <section
    class="bg-linear-to-r from-[#070025] from-20% to-[#7A7BD2] text-white my-20 py-20 p-10 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-10"
  >
    <div ref="item" :class="isVisible? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'" class="transition-all duration-1500">
      <h1
        class="bg-clip-text text-2xl md:text-3xl lg:text-5xl text-white font-bold"
      >
        You've reached the end of <br />
        the page.
      </h1>
      <p class="mt-5 font-black text-1xl">
        If you've made it this far, it's because you're interested.<br />
        So go ahead and register now.
      </p>
      <div class="flex justify-center md:justify-start">
        <Button variant="v2" class="mt-10 text-2xl lg:text-4xl"
          >Install now</Button
        >
      </div>
    </div>
    <div class="lg:w-100 md:w-70 lg:ml-30 hidden md:block transition-all duration-1500" :class="isVisible? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-30'">
      <img src="../../../public/images/support.png" class="" alt="" />
    </div>
  </section>
</template>
