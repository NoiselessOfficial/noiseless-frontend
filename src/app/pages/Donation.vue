<script setup lang="ts">
import defaultLayout from '../layouts/defaultLayout.vue'
import ImageBackground from '@/components/donation/imageBackground.vue';
import Navbar from '@/components/base/Navbar.vue'
import DonationForm from '@/components/donate/DonateForm.vue'
import { ref } from 'vue'

const donateForm = ref(false)
</script>

<template>
  <defaultLayout>
    <div class="flex items-center justify-evenly h-[800px] text-white">
      <div v-if="!donateForm" class="flex flex-col gap-[10px]">
        <h1 class="text-[40px]">
          Make a
          <a
            @click="donateForm = true"
            class="no-underline text-[#7bdff6] cursor-pointer"
            >Donation</a
          >
        </h1>
        <h5>Help us to make the best experience ever.</h5>

        <a
          @click="donateForm = true"
          class="no-underline text-[#7bdff6] hover:text-white cursor-pointer"
        >
          <div
            class="flex items-center justify-evenly flex-row h-[60px] w-[240px] bg-[hsla(0, 0%, 100%, 0.199)] border border-white rounded-[20px] hover:drop-shadow-[0px_0px_16px_hsl(0,0%,100%)] transition duration-100 hover:animate-pulse"
          >
            <img class="h-10 w-10" src="/images/cash.ico" alt="" />
            <h1 class="text-[40px]">Donate</h1>
          </div>
        </a>
      </div>

      <DonationForm v-if="donateForm" v-model:active="donateForm" />

      <div class="nono">
        <img
          class="h-[400px] w-[400px] drop-shadow-[0px_0px_30px_hsla(0,0%,100%,0.23)] hover:animate-pulse"
          src="/images/nono.ico"
          alt=""
        />
      </div>
    </div>
  </defaultLayout>
  <ImageBackground/>
</template>
