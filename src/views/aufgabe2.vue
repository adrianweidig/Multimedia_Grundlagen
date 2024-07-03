<template>
  <div class="aufgabe2">
    <h1>Quadratische Polynomnullstellen</h1>
    <p>Geben Sie die Koeffizienten a, b und c des Polynoms ax² + bx + c ein:</p>
    <div class="input-container">
      <label for="input-a">a:</label>
      <input type="number" id="input-a" v-model.number="a">
    </div>
    <div class="input-container">
      <label for="input-b">b:</label>
      <input type="number" id="input-b" v-model.number="b">
    </div>
    <div class="input-container">
      <label for="input-c">c:</label>
      <input type="number" id="input-c" v-model.number="c">
    </div>
    <button @click="berechneNullstellen">Berechnen</button>
    <div v-if="nullstellen !== null">
      <p v-if="nullstellen.length === 0">Das Polynom hat keine Nullstellen.</p>
      <p v-if="nullstellen.length === 1">Das Polynom hat eine Nullstelle bei x = {{ nullstellen[0] }}.</p>
      <p v-if="nullstellen.length === 2">Das Polynom hat zwei Nullstellen bei x1 = {{ nullstellen[0] }} und x2 = {{ nullstellen[1] }}.</p>
    </div>
    <canvas ref="canvas" width="650" height="450"></canvas>
  </div>
</template>

<script>
import { setzeCanvas, zeichneGraph, berechneQuadratischeNullstellen } from '../models/aufgabe2.js';

export default {
  data() {
    return {
      a: null,
      b: null,
      c: null,
      nullstellen: null,
    };
  },
  mounted() {
    setzeCanvas(this.$refs.canvas);
  },
  methods: {
    berechneNullstellen() {

      if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c)) {
        alert("Bitte geben Sie gültige Zahlenwerte ein.");
        return;
      }

      this.nullstellen = berechneQuadratischeNullstellen(this.a, this.b, this.c);

      zeichneGraph(this.a, this.b, this.c);
    },
  },
};
</script>

<style src="../assets/styles/aufgabe2.css"></style>
