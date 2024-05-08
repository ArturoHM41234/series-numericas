// Regresa el numero que ocupa la posicion n
/*
   n = 0: 0
   n = 1: 1
   n = 2: 1 (0+1)
   n = 3: 2 (1+1)
   n = 4: 3 (1+2)
   n = 5: 5 (2+3)
   .
   .
 */

export function fibonacci(n): number {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

