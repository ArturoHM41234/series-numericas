<template>
  <main>
    <h1>Series Numericas</h1>
    <input v-model.number="input" @input="handleInput" type="text" min="0" />
    <p>Serie({{input}}) = {{ sr }}</p>
    <visual :number="input || 0"></visual>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SeriesNumericas } from './series/series.ts';
import visual from './components/visual.vue';

const input = ref(0);
let sr: number | null;

function handleInput() {
  if (input.value >= 0 && Number.isInteger(input.value)) {
    sr = SeriesNumericas.serie(input.value);
  } else {
    sr = null;
  }
}
</script>

