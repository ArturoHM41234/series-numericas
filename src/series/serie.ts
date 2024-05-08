import { fibonacci } from './fibonacci.ts'
import { triangular } from './triangular.ts'
import { primo } from './primos.ts'

export class SeriesNumericas {
  static serie(n :number): number {
    return (-3 * primo(n)) - fibonacci(n) + (5 * triangular(n))
  }
}
