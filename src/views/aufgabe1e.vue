<template>
  <div id="app">
    <h1>Buchstabenhäufigkeit Histogramm</h1>
    <textarea v-model="eingabetext" placeholder="Geben Sie hier Ihren Text ein"></textarea>

    <div v-if="histogramm">
      <h2>Ergebnis:</h2>
      <table>
        <thead>
        <tr>
          <th>Zeichen</th>
          <th>Anzahl</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(anzahl, zeichen) in histogramm" :key="zeichen">
          <td>{{ zeichen }}</td>
          <td>{{ anzahl }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <button @click="berechneHistogramm">Histogramm Berechnen</button>
</template>

<script>
import histogram from '../models/aufgabe1e.js';

export default {
  data() {
    return {
      eingabetext: '',
      histogramm: null
    };
  },
  methods: {
    berechneHistogramm() {
      this.histogramm = histogram(this.eingabetext);
    }
  }
};
</script>

<style src="../assets/styles/aufgabe1e.css"></style>
