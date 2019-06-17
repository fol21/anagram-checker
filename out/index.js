"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Anagramer_1 = require("./Anagramer");
const PrimeSieve_1 = require("./PrimeSieve");
const primeSieve = new PrimeSieve_1.PrimeSieve();
const anagramer = new Anagramer_1.PrimeAnagramer("abcdefghijklmnopqrstuvXYZ ".split(""));
console.log(anagramer.Check("Misunderstand", "Redundant Miss"));
//# sourceMappingURL=index.js.map