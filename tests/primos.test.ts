import { primo } from '../src/series/primos.ts';
import { describe, expect, test } from '@jest/globals';

describe('Primos', () => {
    test("Regresa el numero primo en la posicion n", () => {
      expect(primo(1)).toBe(2);
      expect(primo(2)).toBe(3);
      expect(primo(3)).toBe(5);
      expect(primo(4)).toBe(7);
      expect(primo(5)).toBe(11);
      expect(primo(6)).toBe(13);
      expect(primo(7)).toBe(17);
      expect(primo(8)).toBe(19);
      expect(primo(9)).toBe(23);
      expect(primo(10)).toBe(29);
    });
});
