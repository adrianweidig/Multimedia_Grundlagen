<template>
  <div class="todo-app">
    <h1>Todo-App</h1>
    <input v-model="neuesTodo" placeholder="Neues Todo eingeben"/>
    <button @click="hinzufuegenTodo">Neues Todo anlegen</button>
    <div class="todo-listen">
      <div class="offene-todos">
        <h2>Offene Todos</h2>
        <ul>
          <li v-for="todo in offeneTodos" :key="todo.id">
            {{ todo.text }}
            <button @click="erledigenTodo(todo)">Todo erledigt</button>
          </li>
        </ul>
      </div>
      <div class="erledigte-todos">
        <h2>Erledigte Todos</h2>
        <ul>
          <li v-for="todo in erledigteTodos" :key="todo.id">
            {{ todo.text }} - erledigt am {{ todo.erledigtAm }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {daten, methoden} from '../models/aufgabe4.js';

export default {
  data: daten,
  methods: methoden,
};
</script>

<style src="../assets/styles/aufgabe4.css"></style>
