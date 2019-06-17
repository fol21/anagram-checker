import expect = require("expect");
import {PrimeAnagramer} from "./Anagramer";

let anagramer;
describe("PrimeAnagramer", () => {
    before(() => {
        anagramer = new PrimeAnagramer("abcdefghijklmnopqrstuvXYZ ".split(""));
    });
    describe("#Check", () => {
        const testCases = [
            {args: ["bat", "tab"], expect: true},
            {args: ["fear", "rear"], expect: false},
            {args: ["dare", "dear"], expect: true},
            {args: ["Misunderstand", "Redundant Miss"], expect: true},
        ];
        testCases.forEach(tc => {
            it("Should return true for Anagram, case: " +  `${tc.args[0]},${tc.args[1]}`, () => {
                expect(anagramer.Check(tc.args[0], tc.args[1])).toBe(tc.expect);
            });
        });
    });
});
