<script setup lang="ts">
import NavItem from '@/components/base/NavItem.vue';
</script>

<template>
    <nav class="flex flex-row justify-evenly items-center h-[60px] text-white">
        <div class="flex flex-row gap-5">
            <RouterLink to="/"><img src="/images/nono.ico" alt="" class="h-[40px] w-[40px] hover:scale-110 hover:drop-shadow-[0px_0px_6px_hsla(0,0%,100%)] transition duration-100"></RouterLink>
            <p class="flex items-center text-[24px] font-bold">Noiseless</p>
        </div>

        <ul class="flex flex-row p-2 gap-6 text-[20px]">
            <NavItem to="/donate">Donate</NavItem>
            <NavItem to="/support">Support</NavItem>
            <NavItem to="/profile">Profile</NavItem>
            <li>|</li>
            <!-- Verificação de ID do usuário para exibir opções de login e cadastro -->
            <NavItem to="/login">Login</NavItem>
            <RouterLink to="/register" class="flex items-center justify-center w-[140px] h-[30px] rounded-[20px] p-2 bg-[#7bdff6] text-black hover:text-white hover:text-[18px] hover:transition duration-300">Register</RouterLink>
        </ul>
    </nav>
</template>