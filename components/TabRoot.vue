<template>
    <div>
        <ion-tabs>

            <ion-tab tab="sucursal">
                <ion-vue-router name="tab1Route"></ion-vue-router>
            </ion-tab>

            <ion-tab tab="tab2" :routes="['carrocompra', 'barcode1']" :to="{name:'carrocompra'}">
                <ion-vue-router name="tab2Route"></ion-vue-router>
            </ion-tab>

            <ion-tab tab="tab3">
                <ion-vue-router name="tab3Route"></ion-vue-router>
            </ion-tab>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="sucursal">
                    <ion-icon name="business"/>
                    <ion-label>Retail</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="carrocompra" :to="{name:'carrocompra'}">
                    <ion-icon name="cart"/>
                    <ion-label>Carrito</ion-label>
                </ion-tab-button>


                <ion-tab-button tab="tab3" :to="{name:'tab3'}">
                    <ion-icon name="add"/>
                    <ion-label>Tab 3</ion-label>
                </ion-tab-button>
            </ion-tab-bar>

        </ion-tabs>

    </div>
</template>

<script>
    import {contacts, map, add, business,cart} from "ionicons/icons";
    import {addIcons} from "ionicons";
    // import Tab1 from "./Tab1";
    // import Tab2 from "./Tab2";
    // import Tab2 from "./Tab3";
    addIcons({
        "ios-contacts": contacts.ios,
        "md-contacts": contacts.md,
        "ios-map": map.ios,
        "md-map": map.md,
        "ios-add": add.ios,
        "md-add": add.md,
        "ios-business": business.ios,
        "md-business": business.md,
        "ios-cart": cart.ios,
        "md-cart": cart.md,
    });
    export default {
        name: "TabRoot",
        props: {}
    };
</script>