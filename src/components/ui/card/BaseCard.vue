<template>
    <div class="card">
        <header v-if="$slots.header">
            <slot name="header" />
        </header>
        <main>
            <slot />
        </main>
        <footer v-if="$slots.footer">
            <slot name="footer" />
        </footer>
    </div>
</template>

<style scoped>
.card {
    background: none;
}
</style>
