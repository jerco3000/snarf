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
                    <!--
                    <ion-card v-for="carro of $store.getters.Cart" v-bind:key="carro.pp_codigo">
                        <ion-item>
                            <ion-badge color="success">${{carro.pp_precioneto}}</ion-badge>
                            <ion-button fill="outline" color="danger" slot="end">BORRAR</ion-button>
                        </ion-item>
                        <ion-card-content>
                            <ion-card-title>{{carro.pp_nombre}}</ion-card-title>
                            {{carro.pp_descripcion}}
                        </ion-card-content>
                    </ion-card>
                    -->


                    <ion-card v-for="carro of $store.getters.Cart" v-bind:key="carro.pp_codigo">
                        <ion-card-content>
                            <ion-card-title>{{carro.pp_nombre}}</ion-card-title>
                            <ion-card-subtitle>{{carro.pp_descripcion}}</ion-card-subtitle>

                            <ion-badge size="default" color="success">${{numberWithCommas(carro.pp_precioneto)}}</ion-badge>
                            <div>
                                <ion-button size="small" color="medium" slot="center" v-on:click="CartProductSub(carro.pp_codigo)">-</ion-button>
                                <ion-button size="small" color="light" slot="center">{{carro.pp_cantidad}}</ion-button>
                                <ion-button size="small" color="medium" slot="center" v-on:click="CartProductAdd(carro.pp_codigo)">+</ion-button>

                                <ion-button size="small" color="danger" fill="outline" class="ion-float-end" v-on:click="CartProductDelete(carro.pp_codigo)">BORRAR</ion-button>
                            </div>

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
                <ion-icon  size="large" name="add"/>
            </ion-fab-button>
            <ion-fab-list side="top">
                <ion-fab-button color="primary" @click="openModal">
                    <ion-icon name="hand"/>
                </ion-fab-button>
                <ion-fab-button color="primary">
                    <ion-icon name="camera"/>
                </ion-fab-button>
            </ion-fab-list>
        </ion-fab>


        <section>

            <ion-card>
                <ion-item>Orden de compra ({{Cantidad}} Items)</ion-item>
                <ion-item>
                    <h4>${{TotalValorCarro}}</h4>
                </ion-item>
            </ion-card>
        </section>

        <section>
            <ion-button expand="block">PAGAR</ion-button>
        </section>

    </ion-page>
</template>

<script>
    import {add,camera, hand} from "ionicons/icons"; // not iosEye
    import {addIcons} from "ionicons"

    addIcons({
        "ios-camera": camera.ios,
        "md-camera": camera.md,
        "ios-add": add.ios,
        "md-add": add.md,
        "ios-hand": hand.ios,
        "md-hand": hand.md
    })

    import { store } from '../store/store';
    import { mapMutations} from 'vuex';
    import { mapState, mapGetter, mapActions } from 'vuex'

    import SimpleModal from "./SimpleModal.vue";



    export default {
        name: "CarroCompra3",
        components: {},
        created(){

                return this.$ionic.alertController
                    .create({
                        header: 'Alert',
                        subHeader: this.$store.getters.Emprun,
                        message: this.$store.getters.Sucempresaid,
                        buttons: ['OK'],
                    })
                    .then(a => a.present())
        },
        methods: {
            numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
            CartProductAdd(pkey){
                this.$store.commit('CartProductAdd', pkey);
            },
            CartProductSub(pkey){
                this.$store.commit('CartProductSub', pkey);
            },
            CartProductDelete(pkey) {
                this.$store.commit('CartProductDelete',pkey);
            },
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
        },
        computed: {
            Cantidad(){
                return this.$store.getters.Cart.length;
            },
            TotalValorCarro(){
                var total = 0;
                //console.log(this.$store.getters.Cart[0]['pp_precioneto']);

                for (var i=0; i < this.$store.getters.Cart.length; i++){
                    //console.log(this.$store.getters.Cart[i]['pp_precioneto']);
                    total = total + (this.$store.getters.Cart[i]['pp_precioneto'] * this.$store.getters.Cart[i]['pp_cantidad']);
                }
                return this.numberWithCommas(total);
            }
        },
    }
</script>

<style scoped>
    .divclass{
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
    .scroll-content{
        justify-content: center;
        display: flex!important;
        align-items: center!important;
    }
</style>