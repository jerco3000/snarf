<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Carro de Compras</ion-title>
            </ion-toolbar>


        </ion-header>
        <ion-content padding>


            <ion-list>

                <div class="divclass">

                    <ion-card>
                        <ion-item>
                            <ion-grid>
                                <ion-row>
                                    <ion-col>
                                        <ion-button color="success">$28.500</ion-button>
                                    </ion-col>
                                    <ion-col class="productocantidad">
                                        <div class="productocantidad">
                                            <ion-button color="medium" slot="center">-</ion-button>
                                            <ion-button color="light" slot="center">1</ion-button>
                                            <ion-button color="medium" slot="center">+</ion-button>
                                        </div>
                                    </ion-col>

                                </ion-row>
                            </ion-grid>
                        </ion-item>
                        <ion-card-content>
                            <div>
                                <ion-card-title>Camisa</ion-card-title>
                                Camisa estampada clásica
                            </div>
                            <div>
                                <ion-item>
                                    <ion-button color="danger" fill="outline" slot="end">BORRAR</ion-button>
                                </ion-item>
                            </div>
                        </ion-card-content>
                    </ion-card>


                    <ion-card>
                        <ion-item>
                            <ion-grid>
                                <ion-row>
                                    <ion-col width-2 style="text-align: right">
                                        <ion-button color="success">$29.500</ion-button>
                                    </ion-col>
                                    <ion-col>
                                        <ion-button color="medium">-</ion-button>
                                        <ion-button color="light">1</ion-button>
                                        <ion-button color="medium">+</ion-button>
                                    </ion-col>
                                    <ion-col width-2 style="text-align: left">
                                        <ion-button color="danger" fill="outline" slot="end">X</ion-button>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-item>
                        <ion-card-content>
                            <ion-card-title>Camisa</ion-card-title>
                            Camisa estampada clásica
                        </ion-card-content>
                    </ion-card>


                    <ion-card>
                        <ion-item>
                            <ion-grid>
                                <ion-row>
                                    <ion-col>
                                        <ion-button color="success">$32.500</ion-button>
                                    </ion-col>
                                    <ion-col class="productocantidad">
                                        <div class="productocantidad">
                                            <ion-button color="medium" slot="center">-</ion-button>
                                            <ion-button color="light" slot="center">1</ion-button>
                                            <ion-button color="medium" slot="center">+</ion-button>
                                            <ion-button fill="outline" color="danger" slot="end">X</ion-button>
                                        </div>

                                    </ion-col>

                                </ion-row>
                            </ion-grid>
                        </ion-item>
                        <ion-card-content>
                            <ion-card-title>Camisa</ion-card-title>
                            Camisa estampada clásica
                        </ion-card-content>
                    </ion-card>


                    <ion-card>
                        <ion-item>
                            <div class="ion-align-self-baseline">
                                <ion-grid>
                                    <ion-row>
                                        <ion-col>
                                            <ion-button size="small" color="success">$31.222</ion-button>
                                        </ion-col>
                                    </ion-row>
                                    <ion-row>
                                        <ion-col>
                                            <div>
                                                <ion-button size="small" color="medium" slot="center">-</ion-button>
                                                <ion-button size="small" color="light" slot="center">1</ion-button>
                                                <ion-button size="small" color="medium" slot="center">+</ion-button>
                                            </div>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
                            </div>
                            <ion-button size="small" color="danger" fill="outline" slot="end">BORRAR</ion-button>
                        </ion-item>
                        <ion-card-content>
                            <ion-card-title>Zapatilla</ion-card-title>
                            Zapatilla freeman Adidas
                        </ion-card-content>
                    </ion-card>

                    <ion-card>
                        <ion-card-content>
                            <ion-card-title>Zapatilla</ion-card-title>
                            <ion-card-subtitle>Zapatilla freeman Adidas</ion-card-subtitle>

                            <ion-badge size="default" color="success">$11.111</ion-badge>
                            <div>
                                <ion-button size="small" color="medium" slot="center">-</ion-button>
                                <ion-button size="small" color="light" slot="center">1</ion-button>
                                <ion-button size="small" color="medium" slot="center">+</ion-button>

                                <ion-button color="danger" fill="outline" class="ion-float-end">BORRAR</ion-button>
                            </div>

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
                </div>

            </ion-list>


        </ion-content>


        <!--
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button @click="$router.push({ name: 'new-item' })">
                <ion-icon name="addCircle"></ion-icon>
            </ion-fab-button>
        </ion-fab>
        -->

        <ion-fab horizontal="end" vertical="bottom" slot="fixed">
            <ion-fab-button color="primary">
                <ion-icon name="addCircle"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="top">
                <ion-fab-button color="dark" @click="openModal">
                    <ion-icon name="cameraoutline"></ion-icon>
                </ion-fab-button>
                <ion-fab-button color="dark">
                    <ion-icon name="handright"></ion-icon>
                </ion-fab-button>
            </ion-fab-list>
        </ion-fab>


        <section>

            <ion-card>
                <ion-item>Orden de compra (5 Items)</ion-item>
                <ion-item>
                    <h4>$35.000</h4>
                </ion-item>
            </ion-card>
        </section>

        <section>
            <ion-button expand="block">PAGAR</ion-button>
        </section>

    </ion-page>
</template>

<script>
    import SimpleModal from "../SimpleModal.vue";

    import {eye, add, addCircle} from "ionicons/icons" // not iosEye
    import {addIcons} from "ionicons"


    addIcons({
        "ios-eye": eye,
        "md-eye": eye,
        "ios-add": add,
        "md-add": add,
        "ios-addcircle": addCircle,
        "md-addcircle": addCircle
    })

    export default {
        name: "CarroCompra2",
        components: {},
        methods: {
            /**
             * called when the modal is closed
             */
            modalCloseHandler(_value) {
                console.log("modal-closed", _value);
                if (_value.success) {
                    // only on success
                    alert(JSON.stringify(_value.noteInfo, null, 2));
                }
            },
            /**
             * when the user clicks button, we open the modal
             */
            async openModal() {
                let modal = await this.$ionic.modalController.create({
                    component: SimpleModal,
                    componentProps: {
                        propsData: {
                            timeStamp: new Date()
                        }
                    }
                });
                // show the modal
                await modal.present();
                // wait to see if i get a response
                let modalResponse = await modal.onDidDismiss();
                // when dismissed by clicking outside of modal,
                // data is undefined so we do not handle it
                modalResponse.data && this.modalCloseHandler({...modalResponse.data})
            }
        }
    }
</script>

<style scoped>
    .divclass {
        width: 95%;
        margin: auto;
    }

    .lista {
        width: 95%;
        max-height: 100%;
        overflow-y: scroll;
    }

    .label1 {
        justify-content: center;
    }

    .precio {
        justify-content: right;
    }

    .scroll-content {
        justify-content: center;
        display: flex !important;
        align-items: center !important;
    }

    .productocantidad {
        text-align: center
    }
</style>