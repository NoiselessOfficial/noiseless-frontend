<script setup lang="ts">
import { ref } from 'vue'
import InputForm from './inputForm.vue'
import Button from '../ui/Button.vue'
import EndForm from './endForm.vue'

const props = defineProps<{
  state: boolean
}>()

const email = ref('')
const senha = ref('')
const senhaC = ref('')

function enviar() {
  if (!props.state && senha.value != senhaC.value) {
    alert('As senhas digitadas não são iguais')
  }
}
</script>

<template>
  <div :state="state" class="w-full">
    <form id="form" class="flex flex-col gap-3 w-full relative">
      <InputForm pch="email" lab="Email" v-model="email" type="email" />
      <InputForm pch="senha" lab="Senha" v-model="senha" type="password" />
      <transition name="expand" class="relative">
        <div v-if="!state">
          <InputForm
            pch="confirmar senha"
            lab="Confirmar Senha"
            v-model="senhaC"
            type="password"
          />
        </div>
      </transition>
      <EndForm />
      <div class="flex justify-center items-center gap-10 mt-8">
        <button class="bg-black/40 w-fit h-fit p-2 rounded-full">
          <img src="https://www.google.com/favicon.ico" alt="Google" />
        </button>
        <Button variant="v3" @click="enviar" class="my-auto">Confirmar</Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s ease;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0px;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 240px;
  opacity: 1;
}
</style>
