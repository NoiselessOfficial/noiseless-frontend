<script setup lang="ts"></script>

<template>
    <RouterView />
</template>

<style>
@import 'tailwindcss';
@font-face {
    font-family: 'JetBrains-Regular';
    src: url('/fonts/JetBrainsMono-Regular.ttf');
}

* {
    font-family: 'JetBrains-Regular';
}

*::selection {
    background-color: none;
}
</style>
