//Triangular recibe un numero y devuelve el numero triangular de este
function triangular(n: number): number {
  let tr: number;
  if (n <= 0) {
    return 0;
  }
  tr = (Math.pow(n, 2) + n) / 2;
  return tr;
}
export { triangular }

