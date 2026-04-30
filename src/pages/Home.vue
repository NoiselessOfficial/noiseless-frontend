<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue'
import { Users } from 'lucide-vue-next'
import { Button, Title } from '@/components/ui/index'
import { BaseCard, CardHome, CardTec } from '@/components/ui/card/index'
</script>

<template>
    <div class="min-h-screen bg-[#070025]">
        <Navbar />
        <div class="content">
            <section class="flex items-center w-full h-[80vh]">
                <div
                    class="h-full w-1/2 pl-[15vh] flex flex-col justify-center"
                >
                    <div
                        class="flex items-center justify-center gap-2.5 w-[320px] border border-white py-[3px] rounded-full mb-[30px]"
                    >
                        <Users color="white" />
                        <h1 class="text-[1.3rem] text-white">
                            Helping +200 persons
                        </h1>
                    </div>
                    <div>
                        <h1 class="text-[3rem] text-white font-[900]">
                            For a Delightful and
                            <span
                                class="bg-clip-text text-transparent bg-gradient-to-r from-[#B1ECF9] to-white"
                                >Noiseless</span
                            >
                            Experience
                        </h1>
                        <h2 class="text-[1rem] text-white mt-[5px] font-[200]">
                            Made for Misophonic people, Noiseless is a software
                            that improves your listening in your routine.
                        </h2>
                    </div>
                    <div class="w-full flex justify-start mt-[5vh]">
                        <CardHome
                            class="w-[150px] mr-5"
                            titulo="Upload"
                            descricao="Upload files"
                            :icone="Users"
                        />
                        <CardHome
                            class="w-[150px] mr-5"
                            titulo="Filter"
                            descricao="Intelligent filtering"
                            :icone="Users"
                        />
                        <CardHome
                            class="w-[150px]"
                            titulo="Listen"
                            descricao="Listen delightfully"
                            :icone="Users"
                        />
                    </div>
                </div>
                <div class="b2">
                    <img src="/images/laptop.png" alt="" />
                </div>
            </section>
            <section class="justify-center items-center flex flex-col">
                <Title variant="v1" class="m-auto mb-10"> Install </Title>
                <h1
                    class="bg-clip-text font-[900] text-transparent bg-gradient-to-r from-[#B1ECF9] to-white text-center text-5xl"
                >
                    Open source misophonia <br />
                    software
                </h1>
                <Button variant="v1" class="mt-10 text-4xl text-[#070025]">
                    Install Now!
                </Button>
                <Title variant="v1" class="m-auto mt-15 mb-30">
                    Stacks
                </Title>
            </section>
            <section class="grid grid-cols-4 gap-40 w-4/5 m-auto mb-40">
                <CardTec
                    titulo="Electron"
                    descricao="Cross-platform desktop application framework"
                    :icone="Users"
                />
                <CardTec
                    titulo="Electron"
                    descricao="Cross-platform desktop application framework"
                    :icone="Users"
                />
                <CardTec
                    titulo="Electron"
                    descricao="Cross-platform desktop application framework"
                    :icone="Users"
                />
                <CardTec
                    titulo="Electron"
                    descricao="Cross-platform desktop application framework"
                    :icone="Users"
                />
            </section>
            <section
                class="bg-gradient-to-r from-[#070025] from-20% to-[#7A7BD2] text-white pt-20 pb-20 pl-20 grid grid-cols-2"
            >
                <div>
                    <h1
                        class="text-5xl bg-clip-text font-[900] text-transparent bg-gradient-to-r from-[#ffffff] from-10% to-[#7A7BD2]"
                    >
                        You've reached the end of <br> the page.
                    </h1>
                    <p class="mt-5 font-[900] text-1xl">
                        If you've made it this far, it's because you're
                        interested.<br> So go ahead and register now.
                    </p>
                    <Button variant="v2" class="mt-10">Install now</Button>
                </div>
                <div>
                    <h1>asofbausifsaofb</h1>
                </div>
            </section>
        </div>
    </div>
</template>
