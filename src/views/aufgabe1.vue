<template>
  <div id="app">
    <h1>Buchstabenhäufigkeit Histogramm und Huffman-Baum</h1>
    <textarea v-model="eingabetext" placeholder="Geben Sie hier Ihren Text ein"></textarea>
    <div v-if="histogramm">
      <h2>Ergebnis Histogramm:</h2>
      <table>
        <thead>
        <tr>
          <th>Zeichen</th>
          <th>Häufigkeit</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(haeufigkeit, zeichen) in histogramm" :key="zeichen">
          <td>{{ zeichen }}</td>
          <td>{{ haeufigkeit }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="huffmanBaum">
      <h2>Huffman-Baum:</h2>
      <pre>{{ huffmanBaumText }}</pre>
    </div>
  </div>
  <button @click="berechneHistogramm">Histogramm Berechnen</button>
  <button @click="berechneHuffmanBaum">Huffman-Baum Erstellen</button>
</template>

<script>
import histogram from '../models/aufgabe1e.js';
import HuffmanBaum from '../models/aufgabe1f.js';

export default {
  data() {
    return {
      eingabetext: '',
      histogramm: null,
      huffmanBaum: null,
      huffmanBaumText: ''
    };
  },
  methods: {
    berechneHistogramm() {
      // Berechne das Histogramm der Zeichenhäufigkeiten und speichere es im Zustand
      this.histogramm = histogram(this.eingabetext);
    },
    berechneHuffmanBaum() {
      // Erstelle den Huffman-Baum und speichere ihn im Zustand
      const huffmanBaum = new HuffmanBaum(this.eingabetext);
      this.huffmanBaum = huffmanBaum.wurzel;
      this.huffmanBaumText = this.formatHuffmanBaum(this.huffmanBaum);
    },
    formatHuffmanBaum(node, code = '') {
      // Rekursive Funktion zur Formatierung des Huffman-Baums
      if (!node) return '';
      let result = '';
      if (node.zeichen) {
        result += `Zeichen: ${node.zeichen}, Häufigkeit: ${node.haeufigkeit}, Code: ${code}\n`;
      }
      if (node.links_kind) {
        result += this.formatHuffmanBaum(node.links_kind, code + '0');
      }
      if (node.rechts_kind) {
        result += this.formatHuffmanBaum(node.rechts_kind, code + '1');
      }
      return result;
    }
  }
};
</script>

<style src="../assets/styles/aufgabe1.css"></style>
