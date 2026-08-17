<script setup lang="ts">
import NeveLayout from '../layouts/neveLayout.vue';
import DonationForm from '@/components/donation/donateForm.vue'
import { ref } from 'vue'
const donateForm = ref(false)
</script>

<template>
  <NeveLayout>
    <div class="flex flex-col h-170 overflow-hidden md:flex-row lg:h-200 items-center justify-center gap-10 p-10 lg:gap-40 text-white">
      <div v-if="!donateForm" class="flex flex-col gap-5">
        <h1 class="text-[40px]">
          Make a
          <a
            @click="donateForm = false"
            class="no-underline text-[#7bdff6] cursor-pointer"
            >Donation</a
          >
        </h1>
        <h5 class="w-90">We are not currently accepting donations, but you can help us by spreading the word about the project.</h5>

        <!-- <a
          @click="donateForm = true"
          class="no-underline text-[#7bdff6] hover:text-white cursor-pointer"
        >
          <div
            class="flex items-center justify-evenly mx-auto md:m-0 flex-row h-[60px] w-[240px] bg-[hsla(0, 0%, 100%, 0.199)] border border-white rounded-[20px] hover:drop-shadow-[0px_0px_16px_hsl(0,0%,100%)] transition duration-100 hover:animate-pulse"
          >
            <img class="h-10 w-10" src="/images/cash.ico" alt="" />
            <h1 class="text-[40px]">Donate</h1>
          </div>
        </a> -->
      </div>

      <DonationForm v-if="donateForm" v-model:active="donateForm" />

      <div class="nono">
        <img
          class="h-auto w-50 md:w-100 block drop-shadow-[0px_0px_30px_hsla(0,0%,100%,0.23)] hover:animate-pulse"
          src="/images/nono.ico"
          alt=""
        />
      </div>
    </div>
  </NeveLayout>
</template>
