<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Resultado</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>

            <ion-card>
                <ion-header>
                    <ion-card-title>Código</ion-card-title>
                    <ion-card-subtitle>{{$route.query.codigo}}</ion-card-subtitle>
                </ion-header>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
    export default {
        name: "BarcodeResultado",
        props: {
            msg: String
        },
    }

</script>

<style scoped>

</style>