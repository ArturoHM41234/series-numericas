<template>
  <main>
    <div class="container">
      <h1>Series Numericas</h1>
      <label for="numero">Ingresa un numero:</label>
    <input v-model.number="input" @input="handleInput" type="text" min="0" name="numero" id="numero" />
    <p>Serie({{input}}) = {{ sr }}</p>
    <visual :number="input || 0"></visual>  
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SeriesNumericas } from './series/series.ts';
import visual from './components/visual.vue';

const input = ref(0);
let sr: number | null;
const seriesInstance = new SeriesNumericas();

function handleInput() {
  if (input.value >= 0 && Number.isInteger(input.value)) {
    sr = seriesInstance.serie(input.value);
  } else {
    sr = null;
  }
}
</script>

