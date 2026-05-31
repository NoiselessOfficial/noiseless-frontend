<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
import SigninForm from '@/components/auth/SigninForm.vue'
import ForgotPassForm from '@/components/auth/ForgotPassForm.vue'
import DefaultLayout from '@/app/layouts/defaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <div class="min-h-screen bg-[#070025]">
      <!-- Form Login-->
      <div
        class="min-h-[800px] flex flex-col items-center justify-center gap-4"
        id="login"
      >
        <LoginForm />
      </div>
      <!-- Form Cadastro -->
      <div
        class="hidden min-h-[800px] flex-col items-center justify-center gap-4"
        id="signin"
      >
        <SigninForm />
      </div>

      <!-- Form Esqueci minha senha -->
      <div
        class="hidden min-h-[800px] flex-col items-center justify-center gap-4"
        id="forgot-password"
      >
        <ForgotPassForm />
      </div>
    </div>
  </DefaultLayout>
</template>
