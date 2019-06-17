"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const PrimeSieve_1 = require("./PrimeSieve");
class PrimeAnagramer {
    get Symbols() {
        return this._symbols;
    }
    set Symbols(symbols) {
        const uniqSymbols = lodash_1.uniq(symbols).map(el => el.toLowerCase());
        const sieve = new PrimeSieve_1.PrimeSieve();
        this._setPrimeMap(sieve, uniqSymbols);
        this._symbols = uniqSymbols;
    }
    constructor(symbols) {
        this.Symbols = symbols || [];
    }
    List(word) {
        return [];
    }
    Check(w1, w2) {
        const symbols1 = w1.toLowerCase().split("");
        const symbols2 = w2.toLowerCase().split("");
        let total1 = 1;
        let total2 = 1;
        symbols1.forEach(s => total1 = total1 * this.primeMap.get(s));
        symbols2.forEach(s => total2 = total2 * this.primeMap.get(s));
        return total1 === total2;
    }
    _setPrimeMap(sieve, uniqSymbols) {
        let list = sieve.List(uniqSymbols.length);
        let k = 2;
        while (list.length < uniqSymbols.length) {
            list = sieve.List(k * uniqSymbols.length);
            k *= 2;
        }
        const symbolsPrimesPairs = uniqSymbols.map((el, idx) => {
            const pair = [el, list[idx]];
            return pair;
        });
        this.primeMap = new Map(symbolsPrimesPairs);
        this.primeMap.set(" ", 1);
    }
}
exports.PrimeAnagramer = PrimeAnagramer;
//# sourceMappingURL=Anagramer.js.map