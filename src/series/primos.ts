export function primo(posicion: number): number {
    if (posicion <= 0) {
        return 0; // No hay números primos en posiciones no positivas
    }

    let count = 0;
    let numero = 2;
    while (true) {
        if (esPrimo(numero)) {
            count++;
            if (count === posicion) {
                return numero;
            }
        }
        numero++;
    }
}

function esPrimo(numero: number): boolean {
    if (numero <= 1) {
        return false;
    } else if (numero <= 3) {
        return true;
    } else if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}
