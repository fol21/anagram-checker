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
            const list = sieve.List(50);
            list.forEach(p => expect(sieve.Check(p)).toBe(true));
        });
    });
    describe("#Check", () => {
        it("Should be Prime Numbers", () => {
            expect(sieve.Check(2, 3)).toBe(true);
            expect(sieve.Check(10)).toBe(false);
            expect(sieve.Check(29, 5)).toBe(true);
        });
    });
});
