<template>
  <div id="app">
    <h1>Buchstabenhäufigkeit Histogramm und Huffman-Code</h1>
    <textarea v-model="eingabetext" placeholder="Geben Sie hier Ihren Text ein"></textarea><br>
    <button @click="berechneHistogrammUndHuffman">Histogramm und Huffman-Code berechnen</button>
    <div v-if="histogramm && huffmanBaum">
      <h2>Ergebnis:</h2>
      <table>
        <thead>
        <tr>
          <th>Zeichen</th>
          <th>Häufigkeit</th>
          <th>Code</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(anzahl, zeichen) in histogramm" :key="zeichen">
          <td>{{ zeichen }}</td>
          <td>{{ anzahl }}</td>
          <td>{{ findeHuffmanCode(huffmanBaum, zeichen) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>


</template>

<script>
import histogram from '../models/aufgabe1e.js';
import HuffmanBaum from '../models/aufgabe1f.js';
import findeHuffmanCode from '../models/aufgabe1g.js';

export default {
  data() {
    return {
      eingabetext: '',
      histogramm: null,
      huffmanBaum: null,
    };
  },
  methods: {
    berechneHistogrammUndHuffman() {
      this.histogramm = histogram(this.eingabetext);
      this.huffmanBaum = new HuffmanBaum(this.eingabetext);
    },
    findeHuffmanCode(baum, zeichen) {
      return findeHuffmanCode(baum, zeichen);
    },
  },
};
</script>

<style src="../assets/styles/aufgabe1.css"></style>
