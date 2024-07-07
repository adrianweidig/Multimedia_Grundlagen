<template>
  <div id="app">
    <h1>Maxit</h1>
    <div>
      Score Player 1: {{ scorePlayer1 }}
    </div>
    <div>
      Score Player 2: {{ scorePlayer2 }}
    </div>
    <br>
    <div class="flex-container">
      <div
          v-for="(card, index) in pictureCards"
          :key="index"
          class="card"
          @click="clickMethod(index)"
      >
        <img v-if="isDiscovered(index)" :src="background"/>
        <img v-else-if="isActiveRowColumn(index)" :src="card.pic"/>
        <img v-else :src="card.pic" class="blur"/>
      </div>
    </div>
  </div>
</template>

<script>
import {
  clickMethod,
  computerMove,
  getColumnIndex,
  getRowIndex,
  initializeGame,
  isActiveRowColumn,
  isDiscovered,
  shuffleArray
} from '../models/aufgabe3.js';

export default {
  data() {
    return {
      scorePlayer1: 0,
      scorePlayer2: 0,
      activeRow: 4,
      activeColumn: 4,
      activePlayer: 0,
      background: 'src/assets/img/invis.gif',
      pictureCards: [],
      discoveredCards: 0,
      gridSize: 8,
    };
  },
  methods: {
    getColumnIndex,
    getRowIndex,
    isActiveRowColumn,
    isDiscovered,
    clickMethod,
    computerMove,
    initializeGame,
    shuffleArray
  },
  mounted() {
    this.initializeGame();
  },
  watch: {
    activePlayer(newVal) {
      if (newVal === 1) {
        this.computerMove();
      }
    }
  }
};
</script>

<style lang="css" src="../assets/styles/aufgabe3.css"></style>
