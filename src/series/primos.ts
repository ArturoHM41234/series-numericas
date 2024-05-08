/*
 * Devuelve 1 si es un numero primo y 0 si no lo es
 */
export function primo(n: number): number {
  if (n <= 1) {
    return 0;
  } else if (n <= 3) {
    return 1;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return 0
  }

  let i: number = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return 0;
    }
    i +=6;
  }
  return 1
}
