"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrimeSieve {
    List(reference) {
        const primes = this._getValueList(reference);
        primes.forEach(p => {
            if (p.isprime) {
                for (let i = p.value * p.value; i <= reference; i += p.value) {
                    const index = primes.findIndex(pr => pr.value === i);
                    primes[index].isprime = false;
                }
            }
        });
        return primes.filter(p => p.isprime).map(p => p.value);
    }
    Check(n, iterations) {
        if (n <= 1 || n === 4) {
            return false;
        }
        if (n <= 3) {
            return true;
        }
        while (iterations > 0) {
            const a = 2 + Math.round((n - 4) * Math.random());
            if (this._gcd(n, a) !== 1) {
                return false;
            }
            if ((this._power(a, n - 1, n)) !== 1) {
                return false;
            }
            iterations--;
        }
        return true;
    }
    _gcd(num1, num2) {
        if (num1 < num2) {
            return this._gcd(num2, num1);
        }
        else if (num1 % num2 === 0) {
            return num2;
        }
        else {
            return this._gcd(num2, num1 % num2);
        }
    }
    _getValueList(size) {
        const list = [];
        for (let index = 2; index < size + 1; index++) {
            list.push({ value: index, isprime: true });
        }
        return list;
    }
    _power(base, power, mod) {
        let res = 1;
        base = base % mod;
        while (power > 0) {
            if (power & 1) {
                res = (res * base) % mod;
            }
            power = power >> 1;
            base = (base * base) % mod;
        }
        return res;
    }
}
exports.PrimeSieve = PrimeSieve;
//# sourceMappingURL=PrimeSieve.js.map