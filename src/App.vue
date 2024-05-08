<template>
  <main>
    <h1>Hello World</h1>
    <input v-model.number="input" @input="handleInput" type="text" min="0" />
    <p v-if="result !== null">Triangular: {{ result }}</p>
    <p v-if="fib !== null">fibonacci: {{ fib }}</p>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { triangular } from './series/triangular.ts';
import { fibonacci } from './series/fibonacci.ts';

const input = ref(0);
let result: number | null;
let fib: number | null;

function handleInput() {
  if (input.value >= 0 && Number.isInteger(input.value)) {
    result = triangular(input.value);
    fib = fibonacci(input.value);
  } else {
    result = null;
  }
}
</script>

