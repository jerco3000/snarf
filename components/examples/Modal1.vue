<template>
    <ion-page class="ion-page" main>
        <ion-content class="ion-content" padding>
            <ion-button @click="openModal">Open Modal</ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
    import Modal from './modal.vue'

    export default {
        methods: {
            openModal() {
                return this.$ionic.modalController
                    .create({
                        component: Modal,
                        componentProps: {
                            data: {
                                content: 'New Content',
                            },
                            propsData: {
                                title: 'New title',
                            },
                        },
                    })
                    .then(m => m.present())
            },
            dismissModal(){
                if (Modal) {
                    Modal.dismiss()
                    .then(() => currentModal = null )
                }
            },
        },
    }
</script>