<script lang="ts" setup>
import { Authentication } from '@/services/Authentication.ts'
const authObject = new Authentication()
</script>

<template>
  <form
    class="h-full gap-8 flex items-center justify-center flex-col gap-4"
    action=""
  >
    <h1 class="text-5xl font-bold text-white">Reset Password</h1>

    <p class="text-white text-center w-3/4">
      Enter your email to receive a reset link.
    </p>

    <input
      class="w-3/4 py-2 px-4 min-h-[50px] text-xl rounded-[20px] border bg-white placeholder:text-black focus:outline-0"
      type="email"
      placeholder="E-MAIL"
    />

    <div class="w-3/4 gap-4 flex items-center justify-between">
      <button
        class="w-1/2 min-h-[80px] border text-2xl text-[#04d1ff] hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200"
      >
        Send Link
      </button>

      <button
        type="button"
        class="w-1/2 min-h-[80px] border text-2xl text-white hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200"
        v-on:click="authObject.alterarForm('login', 'forgot-password')"
      >
        Back
      </button>
    </div>
  </form>
</template>
