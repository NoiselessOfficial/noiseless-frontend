<script setup lang="ts">
import { Button } from '@/components/ui'
</script>

<template>
  <section
    class="bg-gradient-to-r from-[#070025] from-20% to-[#7A7BD2] text-white pt-20 pb-20 pl-20 grid grid-cols-2"
  >
    <div>
      <h1
        class="text-5xl bg-clip-text font-[900] text-transparent bg-gradient-to-r from-[#ffffff] from-10% to-[#7A7BD2]"
      >
        You've reached the end of <br />
        the page.
      </h1>
      <p class="mt-5 font-[900] text-1xl">
        If you've made it this far, it's because you're interested.<br />
        So go ahead and register now.
      </p>
      <Button variant="v2" class="mt-10">Install now</Button>
    </div>
    <div>
      <h1>Aqui vai ficar a img do boneco</h1>
    </div>
  </section>
</template>
