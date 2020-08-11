<template>
    <ion-app>
        <ion-content padding>
            <div v-if="slides">
                <!--
                <ion-slides ref="slider" pager="true" scrollbar="true">
                    <ion-slide v-for="slide in slides" :key="slide.id">
                        <div class="slide">{{ slide.id }}</div>
                    </ion-slide>
                </ion-slides>
                -->
                <ion-slides pager="true" :options="slideOpts">
                    <ion-slide>
                        <img src="../assets/logo_pagasinfila2.png"/>
                        <h2>Bievenidos</h2>
                        <p>A una nuevo manera de comprar <b>presencialmente</b></p>
                        <ion-button fill="clear" v-on:click="comienzo">Saltar</ion-button>
                    </ion-slide>

                    <ion-slide>
                        <img src="../assets/stores.jpg"/>
                        <h2>Selecciona la tienda en donde te encuentras</h2>
                        <p>Basado en tu <b>ubicación</b>, se te mostrará un <b>lista de tiendas cercanas</b>, selecciona en la que te encuentras.</p>
                        <ion-button fill="clear" v-on:click="comienzo">Saltar</ion-button>
                    </ion-slide>

                    <ion-slide>
                        <img src="../assets/carrodecompra.jpg"/>
                        <h2>Adiciona a tu carro artículos</h2>
                        <p>Ingresando el codigo de barra mediante la camara o de manera manual, si hay problemas al leer la etiqueta.</p>
                        <ion-button fill="clear" v-on:click="comienzo">Saltar</ion-button>
                    </ion-slide>

                    <ion-slide>
                        <img src="../assets/mediopago.png"/>
                        <h2>Procede al pago</h2>
                        <p>Utilizando transbank puedes seleccionar los diferentes medios de pago aceptados en el comercio que te encuentras.</p>
                        <ion-button fill="clear" v-on:click="comienzo">Continuar<ion-icon slot="end" name="arrow-forward" v-on:click="comienzo"></ion-icon></ion-button>
                    </ion-slide>
                </ion-slides>
            </div>
            <div v-else class="loading-slides">Loading slides ....</div>
        </ion-content>
    </ion-app>
</template>

<script>
    import CarroCompra3 from "./CarroCompra3";

    export default {
        name: "App",
        data() {
            return {
                slides: null,
                slideOpts: {
                    spaceBetween: 0,
                    slidesPerView: 3,
                    freeMode: true
                }
            };
        },
        methods: {
            comienzo(){
                this.$router.push("/tabs/sucursal");
            }
        },
        beforeCreate() {
            setTimeout(() => {
                this.slides = [
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                    { id: 4 },
                ];
            }, 500);
        }
    };
</script>

<style>
    :root {
        --ion-safe-area-top: 20px;
        --ion-safe-area-bottom: 22px;
    }

    .swiper-slide {
        display: block;
    }

    ion-slide > h2 {
        margin-top: 2.8rem;
    }

    ion-slide > img {
        max-height: 10%;
        max-width: 10%;
        margin: 36px 0;
    }
</style>