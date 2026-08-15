<script setup lang="ts">
import NavItem from '@/components/base/navItem.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="flex flex-col text-white mt-5 items-center gap-4">
    <ul class="flex text-[100%] items-center gap-10">
      <RouterLink v-if="route.path !== '/'" class="my-auto" to="/">
        <div class="flex gap-5">
          <img
            src="/images/nono.ico"
            alt=""
            class="h-[40px] w-[40px] hover:scale-110 hover:drop-shadow-[0px_0px_6px_hsla(0,0%,100%)] transition duration-100"
          />
        </div>
      </RouterLink>
      <a href="https://github.com/NoiselessOfficial" target="_"
        ><span
          class="font-bold hover:text-[#7bdff6] hover:border-[#7bdff6] border-2 border-white px-4 py-1 rounded-3xl"
          >Docs</span
        ></a
      >
      <NavItem v-if="route.path !== '/donate'" to="/donate" active-class="text-[#7bdff6]" class="py-1"
        >Donate</NavItem
      >
    </ul>
  </nav>
</template>
