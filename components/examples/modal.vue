<template>
    <div>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            {{ content }}
            <ion-content class="ion-content" padding>
                <ion-button @onclick="dismissModal">Open Modal</ion-button>
            </ion-content>
        </ion-content>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            title: { type: String, default: 'Super Modal' },
        },
        data() {
            return {
                content: 'Content',
            }
        },methods: {
            dismissModal(){
                this.Modal.dismiss
            }
        }
    }
</script>