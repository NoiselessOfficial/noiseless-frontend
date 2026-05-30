<script setup lang="ts">
import NavItem from '@/components/base/NavItem.vue'
</script>

<template>
  <nav class="flex justify-evenly text-white">
    <RouterLink to="/">
      <div class="flex flex-row gap-5 mr-50">
        <img
          src="/images/nono.ico"
          alt=""
          class="h-[40px] w-[40px] hover:scale-110 hover:drop-shadow-[0px_0px_6px_hsla(0,0%,100%)] transition duration-100"
        />
        <p class="flex items-center text-[24px] font-bold">Noiseless</p>
      </div>
    </RouterLink>

    <ul class="flex flex-row p-2 gap-6 text-[20px]">
      <NavItem to="/donate">Donate</NavItem>
      <NavItem to="/support">Support</NavItem>
      <NavItem to="/profile">Profile</NavItem>
      <li>|</li>
      <!-- Verificação de ID do usuário para exibir opções de login e cadastro -->
      <NavItem to="/auth">Authentication</NavItem>
    </ul>
  </nav>
</template>
