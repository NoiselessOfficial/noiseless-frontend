<script setup lang="ts">
import { DonationService } from '@/services/DonationService';

const active = defineModel('active')
const exitDonateForm = () => {
    active.value = false;
}

let amount: Number;
let email: string;
const donationServiceObject = new DonationService();
const donate = () => {
  try {
    // Precisamos verificar se o e-mail do usuário é válido antes de efetuar a doação.
    donationServiceObject.donate('mercadopago', 'BRL', amount, 1, email);
  } catch (error) {
    
  }
}

// Falta a lógica de formatação do saldo da doação. Exemplo: Transação Nubank, os números começam da esquerda (centavos) e vão para direita (reais).
</script>
<template>
  <form @submit.prevent="onSubmit" class="flex flex-col justify-center items-center h-[400px] w-[396px] bg-[hsla(0,0%,100%,0.05)] border-[1px] rounded-[20px]">
    <span @click="exitDonateForm" class="transform -translate-y-[26px] -translate-x-[120px] text-[20px] cursor-pointer hover:text-[#7bdff6] hover:scale-[1.1] hover:drop-shadow-[0px_0px_6px_hsla(0,0%,100%)] transition duration-400"><- Back</-></span>
    <div class="flex flex-col justify-center h-[200px] w-[330px] gap-6">
        <input type="email" v-model="email" placeholder="E-mail address" class="h-[46px] p-2 border-[1px] rounded-[10px] outline-none" />
        <input type="number" v-model="amount" ref="inputRef" placeholder="0.00" min="1" step="0.01" class="h-[46px] p-2 pl-[22px] border-[1px] rounded-[10px] outline-none" />
    </div>
    <button type="submit" @click.once @click="donate()" class="flex justify-center items-center h-[40px] w-[100px] border-[1px] rounded-[10px] hover:drop-shadow-[0px_0px_6px_hsla(0,0%,100%)]">Submit</button>
    <div class="position-absolute flex">
        <span class="transform -translate-y-[118px] -translate-x-[134px]">$</span>
        <span class="transform -translate-y-[119px] translate-x-[118px] text-[20px] cursor-pointer">+</span>
        <span class="transform -translate-y-[118px] translate-x-[120px] text-[20px]">|</span>
        <span class="transform -translate-y-[118px] translate-x-[122px] text-[20px] cursor-pointer">-</span>
    </div>
  </form>
</template>

<style>
form input::selection {
  background-color: #7A7BD2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

</style>
