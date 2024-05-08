<template>
  <main>
    <h1>Series Numericas</h1>
    <input v-model.number="input" @input="handleInput" type="text" min="0" />
    <p>Serie({{input}}) = {{ sr }}</p>
    <p>Triangular: {{ tr }}</p>
    <p>fibonacci: {{ fib }}</p>
    <p>¿Es primo?: {{ pr }}</p>
    <p style="font-style: italic; color: gray;">0 no es<br> 1 si es</p>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { triangular } from './series/triangular.ts';
import { fibonacci } from './series/fibonacci.ts';
import { primo } from './series/primos.ts';
import { SeriesNumericas } from './series/serie.ts';

const input = ref();
let tr: number | null;
let fib: number | null;
let pr: number | null;
let sr: number | null;

function handleInput() {
  if (input.value >= 0 && Number.isInteger(input.value)) {
    tr = triangular(input.value);
    fib = fibonacci(input.value);
    pr = primo(input.value);
    sr = SeriesNumericas.serie(input.value);
  } else {
    tr = null;
    fib = null;
    pr = null;
    sr = null;
  }
}
</script>

