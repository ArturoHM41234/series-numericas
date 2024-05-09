import { SeriesNumericas } from '../src/series/series.ts';
import { describe, expect } from '@jest/globals';

describe("Serie Numericas", () => {
  it("Termino de la serie", () => {
    const seriesInstance = new SeriesNumericas();
    
      expect(seriesInstance.serie(1)).toBe(-2);
      expect(seriesInstance.serie(2)).toBe(5);
      expect(seriesInstance.serie(3)).toBe(13);
      expect(seriesInstance.serie(4)).toBe(26);
      expect(seriesInstance.serie(5)).toBe(37);
      expect(seriesInstance.serie(6)).toBe(58);
      expect(seriesInstance.serie(7)).toBe(76);
      expect(seriesInstance.serie(8)).toBe(102);
      expect(seriesInstance.serie(9)).toBe(122);
      expect(seriesInstance.serie(10)).toBe(133);
    });
});
