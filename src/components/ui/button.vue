<template>
  <button :class="['btn', variant]" type="button" class="cursor-not-allowed transition-all duration-300">
    <slot class="content" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: string
}>()
</script>

<style scoped>
.btn {
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  font-weight: 1000;
}

.v1 {
  position: relative;
  border-radius: 50em;
  background: transparent;
  color: black;
  padding: 0.5% 5%;
  background: radial-gradient(circle, #ffffff, #b1ecf9);
  width: fit-content;
}

.v1::before {
  position: absolute;
  border-radius: inherit;
}

.v2 {
  position: relative;
  border-radius: 50em;
  background: transparent;
  color: white;
  padding: 1.5% 10%;
  background: linear-gradient(45deg, #070025 10%, #7a7bd2 100%);
  width: fit-content;
  border: 1px solid white;
}

.v2::before {
  position: absolute;
  border-radius: inherit;
}

.v3 {
  font-size: 120%;
  color: black;
  padding: 7px 30px;
  flex: 1;
  margin: auto;
  border-radius: 30px;
  box-shadow: 1px 1px 4px #a3a3a3;
  transition: all 0.4s;
  background-color: #d4f5ff;
} :hover{
  scale: 105%;
}

@media (max-width: 700px)  {

}
</style>
