<template>
  <div class="sub-container">
    <div class ="sub-results">
      <p>Triangular: {{ tr }}</p>
      <p>fibonacci: {{ fib }}</p>
      <p>Primo: {{ pr }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed }from 'vue';
import { triangular } from '../series/triangular.ts';
import { fibonacci } from '../series/fibonacci.ts';
import { primo } from '../series/primos.ts';

const props = defineProps({
  number: {
    type: Number,
    default: 0,
    required: true
  }
});

const tr = computed(() => { return triangular(props.number); });
const fib = computed(() => { return fibonacci(props.number); })
const pr = computed(() => { return primo(props.number); });
</script>
