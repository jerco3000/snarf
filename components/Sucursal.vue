<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Selecciona Tienda</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>

            <!--
            <ion-list>
                <ion-list-header>
                    <ion-label><H1> Sucursales </H1></ion-label>
                </ion-list-header>


                <ion-item v-for="compra of compras" v-bind:key="compra.suc_id">
                    <ion-checkbox slot="start"></ion-checkbox>
                    <ion-label>
                        <img :src="compra.emp_logo_url" width="80" height="80" align="center"/>
                        <h3>{{compra.suc_nombre}}</h3>
                    </ion-label>
                    <ion-badge color="success" slot="end">5 Days</ion-badge>
                </ion-item>
            </ion-list>
            -->
            <ion-item>¿Tienda en la que te encuentras?</ion-item>
            <ion-content>
            <ion-card class="ion-activatable ripple-parent" v-for="compra of compras" v-bind:key="compra.suc_id" v-on:click="DefineTienda(compra.emp_run, compra.suc_empresa,compra.emp_logo_url, compra.suc_nombre)">
                <ion-ripple-effect></ion-ripple-effect>
                <img :src="compra.emp_logo_url" width="80" height="80" align="center"/>
                <ion-header>
                    <ion-card-title>{{compra.suc_empresa_id}}</ion-card-title>
                    <ion-card-subtitle>Sucursal: {{compra.suc_nombre}}</ion-card-subtitle>
                </ion-header>
            </ion-card>
            </ion-content>

        </ion-content>
    </ion-page>
</template>

<script>

    import axios from 'axios';

    import { store } from '../store/store';
    import { mapMutations} from 'vuex';
    import { mapState, mapGetter, mapActions } from 'vuex'

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
        name: "Sucursal",
        props: {
            msg: String
        },
        data() {
            return {
                compras: []
            }
        },
        created(){
            //this.traerCompras();
            this.gps();
        },
        methods: {
            traerCompras(){
                axios.post('http://192.168.1.18:3001/compras')
                    .then(res => {
                        this.compras = res.data;
                        console.log(this.compras)
                    })
                    .catch(e => {
                        console.log(e.response);
                    })
            },
            sucursales(pos){
                var crd = pos.coords;

                const options = {
                    headers: {'Content-Type': 'application/json'}
                };
                axios.post('https://api.xaofilas.app/sucursal',
                    {
                            'lat': crd.latitude,
                            'long': crd.longitude
                        },
                    options
                )
                    .then(res => {
                        this.compras = res.data;
                    })
                    .catch(e => {
                        console.log(e.response);
                    })
            },
            gps(){
                var options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                };

                function success(pos) {
                    var crd = pos.coords;

                    console.log('Your current position is:');
                    console.log('Latitude : ' + crd.latitude);
                    console.log('Longitude: ' + crd.longitude);
                    console.log('More or less ' + crd.accuracy + ' meters.');

                };

                function error(err) {
                    console.warn('ERROR(' + err.code + '): ' + err.message);
                };

                //navigator.geolocation.getCurrentPosition(success, error, options);
                navigator.geolocation.getCurrentPosition(this.sucursales, error, options);

            },
            seleccionado(tienda){
                return this.$ionic.alertController
                    .create({
                        header: 'Alert',
                        subHeader: tienda,
                        message: 'This is an alert message.',
                        buttons: ['OK'],
                    })
                    .then(a => a.present())
            },
            DefineTienda(emp_run, suc_empresa_id, emp_logo_url, suc_nombre){
                this.$store.commit('DefineEmpRun', emp_run);
                this.$store.commit('DefineSucEmpresaId', suc_empresa_id);
                this.$store.commit('DefineEmpLogoUrl', emp_logo_url);
                this.$store.commit('DefineSucNombre', suc_nombre);
                this.$router.push("carrocompra");
            },
            todo(){
                var pos = this.gps();
                var crd = pos.coords;

                const options = {
                    headers: {'Content-Type': 'application/json'}
                };
                axios.post('http://ec2-54-207-15-162.sa-east-1.compute.amazonaws.com:5000/sucursal',
                    {
                        'lat': '-33.39043376758107',
                        'long': '-70.54559855495847'
                    },
                    options
                )
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
    .card {
        background-color: #000;
        box-shadow: no;
    }
    .  .ripple-parent {
        position: relative;
        overflow: hidden;
    }
    .background{
        --background: url(../assets/xaofilas_background.png) 0 0/100% 100% no-repeat;
    }
    .background1 {
        –background: url(../assets/xaofilas_background.png) no-repeat center center / cover;
    }
</style>