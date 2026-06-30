<script setup lang="ts">
import { Instagram, Github, Mail } from 'lucide-vue-next'
import { socialMedias } from '@/constants/links';
</script>

<template>
  <div
    class="border-t-2 border-white py-10 flex px-20 gap-10 justify-between items-center md:flex-row flex-wrap"
  >
    <div class="flex flex-row gap-5">
      <img
        src="/images/nono.ico"
        alt=""
        class="h-10 w-10 hover:scale-110 hover:drop-shadow-[0px_0px_6px_hsla(0,0%,100%)] transition duration-100"
      />
      <p class="flex items-center text-[24px] text-white font-bold">
        Noiseless
      </p>
    </div>
    <div class="text-white flex gap-10 flex-col lg:flex-row text-[80%]">
      <div class="flex gap-2">
        <Mail />
        <a :href="socialMedias.email">noiselessofficial@outlook.com</a>
      </div>
      <div class="flex gap-2">
        <Github />
        <a :href="socialMedias.github">NoiselessOfficial</a>
      </div>
      <div class="flex gap-2">
        <Instagram />
        <a :href="socialMedias.instagram">NoiselessOfficial</a>
      </div>
    </div>
  </div>
</template>
