<script setup lang="ts">
import NavItem from '@/components/base/NavItem.vue'
import { ref } from 'vue'
import Profile from '@/app/pages/Profile.vue'

const abrir = ref(false)

</script>

<template>
  <nav class="flex justify-evenly text-white mt-5">
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
      <li
        class="hover:text-[#7bdff6] hover:transition duration-300 cursor-pointer"
        @click="abrir = true"
      >
        Profile
      </li>
      <li>|</li>
      <!-- Verificação de ID do usuário para exibir opções de login e cadastro -->
      <NavItem to="/auth">Authentication</NavItem>
    </ul>
  </nav>
  <Profile v-model="abrir" />
</template>
