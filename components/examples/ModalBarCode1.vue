<template>
    <v-quagga
            :onDetected="logIt"
            :readerSize="readerSize"
            :readerTypes="['ean_reader']">
    </v-quagga>
</template>

<script>
    import Vue from 'vue'
    import VueQuagga from 'vue-quaggajs';

    //register component 'v-quagga'
    Vue.use(VueQuagga);

    export default {
        name: "ModalBarCode1",
        data () {
            return {
                readerSize: {
                    width: 640,
                    height: 480
                },
                //aspectRatio: { min: 1, max: 2 },
                detecteds: []
            }
        },
        props: ["timeStamp"],
        methods: {
            modalClose: function(success) {
                let response = {
                    success,
                    noteInfo: success ? this.noteInfo : null
                };
                this.$ionic.modalController.dismiss(response);
            },
            logIt (data) {
                console.log('detected', data.codeResult.code);
                //this.$router.push('home');
                this.$router.push({path: 'barcoderesultado', query : {codigo: data["codeResult"]["code"]}})

            },
            process (result) {
                let drawingCtx = Quagga.canvas.ctx.overlay,
                    drawingCanvas = Quagga.canvas.dom.overlay;

                if (result) {
                    if (result.boxes) {
                        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                        result.boxes.filter(function (box) {
                            return box !== result.box;
                        }).forEach(function (box) {
                            Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
                        });
                    }
                    if (result.box) {
                        Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
                    }

                    if (result.codeResult && result.codeResult.code) {
                        Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
                    }
                }
            },
        },
    };
</script>
<style scoped>
    .errors {
        font-size: smaller;
        color: red;
        font-weight: bold;
    }
</style>