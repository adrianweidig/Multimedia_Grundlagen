<template>
  <div>
    <h1>Aufgabe 1</h1>
    <p>Dies ist die Seite für Aufgabe 1.</p>
    <button @click="runLoop">Schleife ausführen</button>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Aufgabe1',
  data() {
    return {
      items: []
    };
  },
  methods: {
    runLoop() {
      this.items = [];
      for (let i = 0; i < 10; i++) {
        this.items.push(`Item ${i + 1}`);
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #e3e3e3;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
}
</style>
