<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue';
import {Button} from '@/components/ui/index.ts';
</script>

<template>
    <div class="page">
        <Navbar />
        <div class="content">
            <h1>Adeus mundo cruel</h1>
        </div>
        <Button variant="p1">Teste</Button>
    </div>
</template>

<script setup></script>

<style scoped>
.page {
    min-height: 100vh;
    background-color: #070025;
}
</style>