<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue';
</script>

<template>
    <div class="min-h-screen bg-[#070025]">
        <Navbar/>
        <!-- Form Login-->
        <div class="min-h-[800px] flex flex-col items-center justify-center gap-4" id="login">
            <form class="h-full gap-8 flex items-center justify-center flex-col gap-4" action="">
                <h1 class="text-5xl font-bold text-white">Welcome to Noiseless</h1>
                <input class="w-3/4 py-2 px-4 min-h-[50px] text-xl rounded-[20px] border bg-white placeholder:text-black focus:outline-0" type="mail" placeholder="E-MAIL">
                <div class="w-3/4 border rounded-[20px] bg-white flex items-center justify-between pr-4">
                    <input class="w-full min-h-[50px] text-xl placeholder:text-black pl-4 focus:outline-0" type="password" id="password" placeholder="PASSWORD">
                    <img src="/images/openeye.png" class="hover:cursor-pointer max-h-[50px]" id="1" v-on:click="mostrarSenha('1', 'password')">
                </div>
                <div class="w-3/4 gap-4 flex items-center justify-between">
                    <button class="w-1/2 min-h-[80px] border text-2xl text-[#04d1ff] hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200">Login</button>
                    <button type="button" class="w-1/2 min-h-[80px] border text-2xl text-white hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200" v-on:click="alterarForm('signin', 'login')">Create account</button>
                </div>
                <fieldset class="w-3/4 border border-b-0 border-l-0 border-r-0 border-white">
                    <legend align="center" class="px-6 text-xl text-white">or</legend>
                </fieldset>
                <button class="w-3/4 border text-2xl border-white text-white hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200">
                    <img src="/images/google.png" alt="Google" class="w-6 h-6 inline mr-2">
                    Continue with Google
                </button>
            </form>
        </div>
        <!-- Form Cadastro -->
        <div class="hidden min-h-[800px] flex-col items-center justify-center gap-4" id="signin">
            <form class="h-full gap-8 flex items-center justify-center flex-col gap-4" action="">
                <h1 class="text-5xl font-bold text-white">Welcome to Noiseless</h1>
                <input class="w-3/4 py-2 px-4 text-xl rounded-[20px] border bg-white placeholder:text-black focus:outline-0" type="mail" placeholder="E-MAIL">
                <div class="w-3/4 border rounded-[20px] bg-white flex items-center justify-between pr-4">
                    <input class="w-full min-h-[50px] text-xl placeholder:text-black pl-4 focus:outline-0" type="password" id="pass" placeholder="PASSWORD">
                    <img src="/images/openeye.png" class="hover:cursor-pointer max-h-[50px]" id="2" v-on:click="mostrarSenha('2', 'pass')">
                </div>
                <div class="w-3/4 border rounded-[20px] bg-white flex items-center justify-between pr-4">
                    <input class="w-full min-h-[50px] text-xl placeholder:text-black pl-4 focus:outline-0" type="password" id="passwor" placeholder="CONFIRM PASSWORD">
                    <img src="/images/openeye.png" class="hover:cursor-pointer max-h-[50px]" id="3" v-on:click="mostrarSenha('3', 'passwor')">
                </div>
                <div class="w-3/4 gap-4 flex items-center justify-between">
                    <button class="w-1/2 min-h-[80px] border text-2xl text-[#04d1ff] hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200">Create account</button>
                    <button type="button" class="w-1/2 min-h-[80px] border text-2xl text-white hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200" v-on:click="alterarForm('login', 'signin')">Login</button>
                </div>
                <fieldset class="w-3/4 border border-b-0 border-l-0 border-r-0 border-white">
                    <legend align="center" class="px-6 text-xl text-white">or</legend>
                </fieldset>
                <button class="w-3/4 border text-2xl border-white text-white hover:text-[#7bdff6] hover:cursor-pointer py-2 px-4 rounded-[20px] transition duration-200">
                    <img src="/images/google.png" alt="Google" class="w-6 h-6 inline mr-2">
                    Continue with Google
                </button>
            </form>
        </div>
    </div>
</template>

<!-- Métodos -->
<script lang="ts">
export default {
    methods: {
        // Pega os forms de login e cad e altera a visibilidade.
        alterarForm(id1: string, id2: string) {
            const form1 = document.getElementById(id1);
            const form2 = document.getElementById(id2);
            if (form1 && form2) {
                form1.classList.replace('hidden', 'flex');
                form2.classList.replace('flex', 'hidden');
            }
        },
        // Pega a imagem e o input, verifica o input e altera a imagem baseado no tipo.
        mostrarSenha(img: string, input: string) {
            const image = document.getElementById(img);
            const inputEl = document.getElementById(input);
            if (image && inputEl) {
                if (inputEl.getAttribute('type') === 'password') {
                    inputEl.setAttribute('type', 'text');
                    image.setAttribute('src', '/images/closedeye.png');
                } else {
                    inputEl.setAttribute('type', 'password');
                    image.setAttribute('src', '/images/openeye.png');
                }
            }
        }
    }
}
</script>