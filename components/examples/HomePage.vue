<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Home</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>

            <ion-list>
                <ion-list-header>
                    <ion-label><H1> Carro de Compras </H1></ion-label>
                </ion-list-header>
                <!--
                <ion-item>
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>
                    <h1>Prueba</h1>
                    <ion-note>Run Idea by Brandy</ion-note>
                </ion-label>
                <ion-badge color="success" slot="end">5 Days</ion-badge>
                </ion-item>
                -->

                <ion-item v-for="compra of compras" v-bind:key="compra.pp_id">
                    <ion-checkbox slot="start"></ion-checkbox>
                    <ion-label>
                        <h2>{{compra.pp_nombre}}</h2>
                        <ion-note>{{compra.pp_descripcion}}</ion-note>
                        <h3>${{compra.pp_precioneto}}</h3>
                    </ion-label>
                    <ion-badge color="success" slot="end">5 Days</ion-badge>
                </ion-item>


            </ion-list>


            <ion-fab vertical="bottom" horizontal="center">
                <ion-fab-button @click="$router.push({ name: 'new-item' })">
                    <ion-icon name="addCircle"></ion-icon>
                </ion-fab-button>
            </ion-fab>

            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="$router.push({ name: 'new-item' })">
                        <ion-icon name="eye"></ion-icon>
                </ion-fab-button>
            </ion-fab>

        </ion-content>
    </ion-page>
</template>

<script>
    import axios from 'axios'

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
        name: "HomePage",
        props: {
            msg: String
        },
//        data(){
//            return {
//                "compras": [
//                    { "pp_id" : 1, "emp_run"   : 90749000, "suc_ic" : 7,"pp_codigo" : "87234662342", "pp_nombre" : "Camiseta", "pp_descripcion"  : "Camiseta Hombre Polo", "p_url" : "", "pp_preciobruto"  : 8320,"pp_iva"  : 1580, "pp_precioneto" : 9900},
//                    { "pp_id" : 2, "emp_run"   : 90749000, "suc_ic" : 7,"pp_codigo" : "34534556454", "pp_nombre" : "Pantalon", "pp_descripcion"  : "Pantalon Tipo Polo", "p_url" : "", "pp_preciobruto"  : 8320,"pp_iva"  : 1580, "pp_precioneto" : 9900}
//                ]
//            }

        data() {
            return {
                compras: []
            }
        },
        created(){
          this.traerCompras();
        },
        methods: {
            traerCompras(){
                axios.get('http://192.168.1.18:3001/compras')
                    .then(res => {
                     this.compras = res.data;
                    })
                    .catch(e => {
                        console.log(e.response);
                    })
            }
        }

    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>