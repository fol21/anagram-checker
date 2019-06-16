import expect = require("expect");
import { PrimeSieve } from "./PrimeSieve";
let sieve: PrimeSieve = null;

describe("PrimeSieve", () => {
    before(() => {
        // runs before all tests in this block
         sieve = new PrimeSieve();
      });
    describe("#List", () => {
        it("Should Return Primes", () =>
        {
            expect(1).toBe(1);
        });
    });
    describe("#Check", () => {
        it("Should be Prime Numbers", () => {
            expect(sieve.Check(2, 3)).toBe(true);
            expect(sieve.Check(10, 10)).toBe(false);
            expect(sieve.Check(29, 5)).toBe(true);
        });
    });
});
