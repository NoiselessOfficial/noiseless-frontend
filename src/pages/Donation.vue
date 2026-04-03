<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue';
</script>

<template>
    <div class="page">
        <Navbar />

        <div class="content">
            <div class="donate">
                <h1>Make a <a href="#">Donate</a></h1>
                <h5>Help us to make the best experience ever.</h5>

                <a href=""><div class="donate-btn">
                    <img src="/images/cash.ico" alt="">
                    <h1>Donate</h1>
                </div></a>
            </div>
            
            <div class="nono">
                <img src="/images/nono.ico" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.page {
    min-height: 100vh;
    background-color: #070025;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 200px;
    color: #FFFFFF;
}

.donate {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.donate a {
    text-decoration: none;
    color: #B1ECF9;
}

.donate-btn {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    height: 60px;
    width: 240px;
    background-color: hsla(0, 0%, 100%, 0.199);
    border: 1px solid #FFFFFF;
    border-radius: 20px;
    margin-top: 20px;
    filter: drop-shadow(0px 0px 20px hsl(0, 0%, 100%));
}

.donate-btn img {
    height: 40px;
    width: 40px;
}

.nono img {
    width: 400px;
    height: 400px;
    filter: drop-shadow(0px 0px 30px hsla(0, 0%, 100%, 0.23));
}
</style>