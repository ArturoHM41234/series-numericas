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

export function fibonacci(n: number): number {
  if (n <= 0) {
    return 0;
  }
  
  let F: number[][] = [[1, 1], [1, 0]]; //Matriz de fibonacci

  power(F, n - 1);

  return F[0][0];
}

function multiply(F: number[][], M: number[][]) {
  let x = F[0][0] * M[0][0] + F[0][1] * M[1][0];
  let y = F[0][0] * M[0][1] + F[0][1] * M[1][1];
  let z = F[1][0] * M[0][0] + F[1][1] * M[1][0];
  let w = F[1][0] * M[0][1] + F[1][1] * M[1][1];

  F[0][0] = x;
  F[0][1] = y;
  F[1][0] = z;
  F[1][1] = w;
}

function power(F: number[][], n: number) {
  if (n === 0 || n === 1) {
    return;
  }
  let M: number[][] = [[1, 1], [1, 0]];
  power(F, Math.floor(n / 2));
  multiply(F, F);
  if (n % 2 !== 0) {
    multiply(F, M);
  }
}

