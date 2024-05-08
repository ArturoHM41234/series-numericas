//Triangular recibe un numero y devuelve el numero triangular de este
function triangular(n: number): number {
  let tr: number;
  tr = (Math.pow(n, 2) + n) / 2;
  return tr;
}
export { triangular }

