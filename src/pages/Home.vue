<script setup lang="ts">
import Navbar from '@/components/base/Navbar.vue';
import { Users } from 'lucide-vue-next';
import { Button } from '@/components/ui/index';
import { BaseCard, CardHome } from '@/components/ui/card/index';
</script>

<template>
    <div class="page">
        <Navbar />
        <div class="content">
            <section class="a1">
                <div class="b1">
                    <div class="c1">
                        <Users color="white" />
                        <h1>Helping +200 persons </h1>
                    </div>
                    <div class="c2">
                        <h1>For a Delightful <br /> Experience <span>Noiseless</span></h1>
                        <h2>Thinking in Misophonic people, Noiseless is a software that improves your way to
                            listen in your routine. (RASCUNHO)</h2>
                    </div>
                    <div class="c3">
                        <CardHome class="card" titulo="Upload" descricao="Upload files" :icone="Users" />
                        <CardHome class="card" titulo="Filter" descricao="Intelligent filtering" :icone="Users" />
                        <CardHome class="card" titulo="Listen" descricao="Listen delightfully" :icone="Users" />
                    </div>
                </div>
                <div class="b2">
                    <h2>asdadssad</h2>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.page {
    min-height: 100vh;
    background-color: #070025;
}

.a1 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80vh;

    .b1 {
        height: 100%;
        width: 50%;
        padding-left: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .c1{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 220px;
            border: 1px solid #FFFFFF;
            padding: 3px;
            border-radius: 999px;
            margin-bottom: 15px;

            h1 {
                font-size: 0.8rem;
                color: #FFFFFF;
            }

        }

        .c2 {
            h1 {
                font-size: 2.5rem;
                color: #FFFFFF;
            }

            h1 span {
                color: #B1ECF9;
            }

            h2 {
                font-size: 1rem;
                color: #FFFFFF;
                margin-top: 2px;
                font-weight: 200;
            }
        }

        .c3 {
            display: flex;
            justify-content: left;
            margin-top: 2vh;

            .card {
                width: 150px;
            }
        }

        .b2{
            background-color: red;
            width: 10px;
            height: 100%;
        }
    }

}
</style>