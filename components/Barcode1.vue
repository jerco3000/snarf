<template>
  <v-quagga
    :onDetected="logIt"
    :readerSize="readerSize"
    :readerTypes="['ean_reader']"
  >
  </v-quagga>
</template>
<script>
import Vue from "vue";
import VueQuagga from "vue-quaggajs";

import { store } from "../store/store";
import { mapMutations } from "vuex";
import { mapState, mapGetter, mapActions } from "vuex";

// register component 'v-quagga'
Vue.use(VueQuagga);

export default {
  name: "Barcode1",
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480,
      },
      //aspectRatio: { min: 1, max: 2 },
      detecteds: [],
    };
  },
  created() {
    if (this.$store.getters.Reload) {
      this.$store.commit("ReloadFalse");
      location.reload();
    }
  },
  methods: {
    beep(vol, freq, duration) {
      v = a.createOscillator();
      u = a.createGain();
      v.connect(u);
      v.frequency.value = freq;
      v.type = "square";
      u.connect(a.destination);
      u.gain.value = vol * 0.01;
      v.start(a.currentTime);
      v.stop(a.currentTime + duration * 0.001);
    },
    logIt(data) {
      //console.log('detected', data.codeResult.code);
      //this.$router.push('home');
      const barcode = data["codeResult"]["code"];
      this.$store.commit("BarCodeSet", barcode);
      //this.$router.push({path: 'barcoderesultado', query : {codigo: data["codeResult"]["code"]}})
      this.$router.push("carrocompra");
    },
    process(result) {
      let drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            parseInt(drawingCanvas.getAttribute("width")),
            parseInt(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2,
              });
            });
        }
        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2,
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            {
              color: "red",
              lineWidth: 3,
            }
          );
        }
      }
      //Quagga.stop();
      Quagga.offProcessed(handler);
      Quagga.offDetected(handler);
    },
  },
};
</script>
