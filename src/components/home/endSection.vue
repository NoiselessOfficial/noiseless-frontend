<script setup lang="ts">
import { Button } from '@/components/ui'
</script>

<template>
  <section
    class="bg-gradient-to-r from-[#070025] from-20% to-[#7A7BD2] text-white pt-20 pb-20 p-10 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-10"
  >
    <div>
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
    <div class="lg:w-100 md:w-70 lg:ml-30 hidden md:block">
      <img src="../../../public/images/support.png" class="" alt="" />
    </div>
  </section>
</template>
