<script lang="ts" setup>
import { Authentication } from '@/services/Authentication.ts'
const authObject = new Authentication()
</script>

<template>
    <form
        class="h-full gap-8 flex items-center justify-center flex-col gap-4"
        action=""
    >
        <h1 class="text-5xl font-bold text-white">Welcome to Noiseless</h1>
        <input
            class="w-3/4 py-2 px-4 min-h-[50px] text-xl rounded-[20px] border bg-white placeholder:text-black focus:outline-0"
            type="mail"
            placeholder="E-MAIL"
        />
        <div
            class="w-3/4 border rounded-[20px] bg-white flex items-center justify-between pr-4"
        >
            <input
                class="w-full min-h-[50px] text-xl placeholder:text-black pl-4 focus:outline-0"
                type="password"
                id="password"
                placeholder="PASSWORD"
            />
            <img
                src="/images/openeye.png"
                class="hover:cursor-pointer max-h-[50px]"
                id="1"
                v-on:click="authObject.mostrarSenha('1', 'password')"
            />
        </div>
        <div class="w-3/4 gap-4 flex items-center justify-between">
            <button
                class="w-1/2 min-h-[80px] border text-2xl text-[#04d1ff] hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200"
            >
                Login
            </button>
            <button
                type="button"
                class="w-1/2 min-h-[80px] border text-2xl text-white hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200"
                v-on:click="authObject.alterarForm('signin', 'login')"
            >
                Create account
            </button>
        </div>
        <div class="w-3/4 flex items-center justify-center">
            <button
                type="button"
                class="text-white hover:text-[#7bdff6] hover:cursor-pointer"
                v-on:click="authObject.alterarForm('forgot-password', 'login')"
            >
                Forgot your password?
            </button>
        </div>
        <fieldset
            class="w-3/4 border border-b-0 border-l-0 border-r-0 border-white"
        >
            <legend align="center" class="px-6 text-xl text-white">or</legend>
        </fieldset>
        <button
            class="w-3/4 border text-2xl border-white text-white hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200"
        >
            <img
                src="/images/google.png"
                alt="Google"
                class="w-6 h-6 inline mr-2"
            />
            Continue with Google
        </button>
    </form>
</template>
