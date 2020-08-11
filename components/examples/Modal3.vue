<template>
    <ion-app>
        <ion-page>
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Modal Test App</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content padding>
                <ion-button @click="openModal">Show Modal</ion-button>
            </ion-content>
        </ion-page>
    </ion-app>
</template>

<script>
    import Vue from 'vue'
    import VueQuagga from 'vue-quaggajs';

    ////register component 'v-quagga'
    Vue.use(VueQuagga);

    import SimpleModal from "./ModalBarCode1.vue";
    export default {
        name: "App",
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
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>