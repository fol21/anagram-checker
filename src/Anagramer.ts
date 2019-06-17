import {uniq} from "lodash";
import {PrimeSieve} from "./PrimeSieve";

export interface IAnagramer
{
    Symbols: string[];
    List(word: string): string[];
    Check(w1: string, w2: string): boolean;
}

export class PrimeAnagramer implements IAnagramer
{
    private _symbols: string[];
    private primeMap: Map<string, number>;

    get Symbols(): string[]
    {
        return this._symbols;
    }

    set Symbols(symbols: string[])
    {
        const uniqSymbols = uniq(symbols).map(el => el.toLowerCase());
        const sieve = new PrimeSieve();
        this._setPrimeMap(sieve, uniqSymbols);
        this._symbols = uniqSymbols;
    }

    constructor(symbols?: string[])
    {
        this.Symbols = symbols || [];
    }

    public List(word: string): string[]
    {
        return [];
    }

    public Check(w1: string, w2: string): boolean
    {
        const symbols1 = w1.toLowerCase().split("");
        const symbols2 = w2.toLowerCase().split("");
        let total1 = 1;
        let total2 = 1;
        symbols1.forEach(s => total1 = total1 * this.primeMap.get(s));
        symbols2.forEach(s => total2 = total2 * this.primeMap.get(s));
        return total1 === total2;
    }

    private _setPrimeMap(sieve: PrimeSieve, uniqSymbols: string[])
    {
        let list = sieve.List(uniqSymbols.length);
        let k = 2;
        while (list.length < uniqSymbols.length)
        {
            list = sieve.List(k * uniqSymbols.length);
            k *= 2;
        }
        const symbolsPrimesPairs = uniqSymbols.map((el, idx) => {
            const pair: [string, number] =  [el, list[idx]];
            return pair;
        });
        this.primeMap = new Map<string, number>(symbolsPrimesPairs);
        // Weightless Symbols
        this.primeMap.set(" ", 1);
    }
}
