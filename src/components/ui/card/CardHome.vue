<script setup>
import BaseCard from './BaseCard.vue'

defineProps({
    titulo: String,
    descricao: String,
    icone: Object
})
</script>

<template>
    <BaseCard>
        <div class="a1">
            <div class="b1">
                <component class="icone" :is="icone" />
            </div>
            <div class="b2">
                <h2>{{ titulo }}</h2>
                <p>{{ descricao }}</p>
            </div>
        </div>
    </BaseCard>
</template>

<style scoped>
.a1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .b1 {
        margin-right: 10%;
    }

    .b2 {
        width: 100%;

        h2 {
            font-size: 1.2rem;
            color: #ffffff;
        }

        p {
            font-size: 0.5rem;
            color: #ffffff;
        }
    }

    .b1 {
        .icone {
            color: #ffffff;
        }
    }
}
</style>
