<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue';
import { Users } from 'lucide-vue-next';
import { Button } from '@/components/ui/index';
import { BaseCard, CardHome } from '@/components/ui/card/index';
</script>

<template>
    <div class="min-h-screen bg-[#070025]">
        <Navbar />
        <div class="content">
            <section class="flex items-center w-full h-[80vh]">
                <div class="h-full w-1/2 pl-[15vh] flex flex-col justify-center">
                    <div
                        class="flex items-center justify-center gap-2.5 w-[320px] border border-white py-[3px] rounded-full mb-[30px]">
                        <Users color="white" />
                        <h1 class="text-[1.3rem] text-white">Helping +200 persons</h1>
                    </div>
                    <div>
                        <h1 class="text-[3rem] text-white font-bold">
                            For a Delightful and <span class="text-[#B1ECF9]">Noiseless</span> Experience
                        </h1>
                        <h2 class="text-[1rem] text-white mt-[5px] font-[200]">
                            Made for Misophonic people, Noiseless is a software that improves your listening
                            in your routine.
                        </h2>
                    </div>
                    <div class="w-full flex justify-start mt-[5vh]">
                        <CardHome class="w-[150px] mr-5" titulo="Upload" descricao="Upload files" :icone="Users" />
                        <CardHome class="w-[150px] mr-5" titulo="Filter" descricao="Intelligent filtering"
                            :icone="Users" />
                        <CardHome class="w-[150px]" titulo="Listen" descricao="Listen delightfully" :icone="Users" />
                    </div>
                </div>
                <div class="b2">
                    <img src="/images/laptop.png" alt="">
                </div>
            </section>
        </div>
    </div>
</template>