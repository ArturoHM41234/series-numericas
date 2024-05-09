import { triangular } from '../src/series/triangular.ts';
import { describe, expect, test } from '@jest/globals';

describe('Numero triangular', () => {
  test('Calcular numero triangular de un numero dado', () => {
    expect(triangular(1)).toBe(1);
    expect(triangular(2)).toBe(3);
    expect(triangular(3)).toBe(6);
    expect(triangular(4)).toBe(10);
    expect(triangular(5)).toBe(15);
    expect(triangular(6)).toBe(21);
    expect(triangular(7)).toBe(28);
    expect(triangular(8)).toBe(36);
    expect(triangular(9)).toBe(45);
    expect(triangular(10)).toBe(55);
  });
});
