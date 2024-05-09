import { SeriesNumericas } from '../src/series/series.ts'

describe("Serie Numericas", () => {
    test("Termino de la serie", () => {
        expect(SeriesNumericas(1).toBe(-2));
        expect(SeriesNumericas(2).toBe(5));
        expect(SeriesNumericas(3).toBe(13));
        expect(SeriesNumericas(4).toBe(26));
        expect(SeriesNumericas(5).toBe(37));
        expect(SeriesNumericas(6).toBe(58));
        expect(SeriesNumericas(7).toBe(76));
        expect(SeriesNumericas(8).toBe(102));
        expect(SeriesNumericas(9).toBe(122));
        expect(SeriesNumericas(10).toBe(133));
    })
})
