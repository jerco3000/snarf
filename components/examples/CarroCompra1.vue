<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Carro de Compras</ion-title>
            </ion-toolbar>


        </ion-header>
        <ion-content padding>

        <ion-list class="lista">
            <ion-card>
                <ion-item>
                    Ahora:
                    <ion-badge color="success">$7.500</ion-badge>
                    <ion-item text-wrap>
                    </ion-item>
                    Antes:
                    <ion-badge color="danger">$9.500</ion-badge>

                    <ion-button fill="outline" slot="end">BORRAR</ion-button>
                </ion-item>
                <ion-card-content>
                    <ion-card-subtitle>Camisa</ion-card-subtitle>
                Camisa estampada clásica
                </ion-card-content>
            </ion-card>

            <ion-card>
                <ion-item>
                    <ion-badge color="success">$28.500</ion-badge>
                    <ion-button fill="outline" slot="end">BORRAR</ion-button>
                </ion-item>
                <ion-card-content>
                    <ion-card-subtitle>Zapatilla</ion-card-subtitle>
                    Zapatilla freeman Adidas
                </ion-card-content>
            </ion-card>

            <ion-card>
                <ion-item>
                    <ion-badge color="success">$28.500</ion-badge>
                    <ion-button fill="outline" slot="end">BORRAR</ion-button>
                </ion-item>
                <ion-card-content>
                    <ion-card-subtitle>Zapatilla</ion-card-subtitle>
                    Zapatilla freeman Adidas
                </ion-card-content>
            </ion-card>

            <ion-card>
                <ion-item>
                    <ion-badge color="success">$28.500</ion-badge>
                    <ion-button fill="outline" slot="end">BORRAR</ion-button>
                </ion-item>
                <ion-card-content>
                    <ion-card-subtitle>Zapatilla</ion-card-subtitle>
                    Zapatilla freeman Adidas
                </ion-card-content>
            </ion-card>

            <ion-card>
                <ion-item>
                    <ion-badge color="success">$28.500</ion-badge>
                    <ion-button fill="outline" slot="end">BORRAR</ion-button>
                </ion-item>
                <ion-card-content>
                    <ion-card-subtitle>Zapatilla</ion-card-subtitle>
                    Zapatilla freeman Adidas
                </ion-card-content>
            </ion-card>

            <ion-card>
                <ion-item>Orden de compra (5 Items)</ion-item>
                <ion-item>
                 <h1>$35.000</h1>
                </ion-item>
            </ion-card>

            </ion-list>


        </ion-content>


        <ion-fab vertical="center" horizontal="end" slot="fixed">

            <ion-fab-button @click="$router.push({ name: 'new-item' })">
                <ion-icon name="addCircle"></ion-icon>
            </ion-fab-button>

        </ion-fab>

        <ion-fab vertical="bottom" horizontal="begin" slot="fixed">
            <ion-item>
                <div><ion-label>Código: </ion-label></div>
                <div><ion-input></ion-input></div>
            </ion-item>

            <ion-button expand="block">CHECK OUT</ion-button>
        </ion-fab>

    </ion-page>
</template>

<script>
    import {eye,add,addCircle} from "ionicons/icons" // not iosEye
    import {addIcons} from "ionicons"

    addIcons({
        "ios-eye": eye,
        "md-eye": eye,
        "ios-add": add,
        "md-add": add,
        "ios-addcircle": addCircle,
        "md-addcircle": addCircle,
    })

    export default {
        name: "CarroCompra1"
    }
</script>

<style scoped>
    .lista {
        max-height: 75%;
        overflow-y: scroll;
    }
    .label1 {
        justify-content: center;
    }
    .precio {
        justify-content: right;
    }
</style>