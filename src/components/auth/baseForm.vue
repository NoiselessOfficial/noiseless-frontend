<script setup lang="ts">
import { ref } from 'vue'
import BtnChange from './btnChange.vue'
import FormAuth from './formAuth.vue'

const stateL = ref(true)
</script>

<template>
    <div
      class="flex m-auto w-130 flex-col items-center mt-20 p-10 rounded-3xl border-2 border-white"
    >
      <BtnChange @click="stateL = !stateL" :state="stateL" class="mb-10 hover:scale-[110%]"/>
      <FormAuth :state="stateL" />
    </div>
</template>
