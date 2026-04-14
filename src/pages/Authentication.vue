<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue';
import LoginForm from '@/components/auth/LoginForm.vue';
import SigninForm from '@/components/auth/SigninForm.vue';
</script>

<template>
    <div class="min-h-screen bg-[#070025]">
        <Navbar/>
        <!-- Form Login-->
        <div class="min-h-[800px] flex flex-col items-center justify-center gap-4" id="login">
            <LoginForm/>
        </div>
        <!-- Form Cadastro -->
        <div class="hidden min-h-[800px] flex-col items-center justify-center gap-4" id="signin">
            <SigninForm/>
        </div>
    </div>
</template>