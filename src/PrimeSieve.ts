export interface IPrimeSieve
{
    List(reference: number): number[];
    Check(n: number, aux?: any): boolean;
}

export class PrimeSieve implements IPrimeSieve
{
    public List(reference: number): number[]
    {

        const primes = this._getValueList(reference);
        primes.forEach(p => {
            if (p.isprime)
            {
                for (let i = p.value * p.value; i <= reference; i += p.value)
                {
                    const index = primes.findIndex(pr => pr.value === i);
                    primes[index].isprime = false;
                }
            }
        });

        return primes.filter(p => p.isprime).map(p => p.value);
    }

    public Check(n: number, iterations: number): boolean
    {
        if (n <= 1 || n === 4) {
            return false;
        }
        if (n <= 3)  {
            return true;
        }
        while (iterations > 0)
        {
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

    private _gcd(num1: number, num2: number): number
    {
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

    private _getValueList(size: number): Array<{value: number, isprime: boolean}>
    {
        const list = [];
        for (let index = 2; index < size + 1; index++) {
            list.push({value: index, isprime: true});
        }
        return list;
    }

    private _power(base: number, power: number, mod: number)
    {
        let res = 1;      // Initialize result
        base = base % mod;  // Update 'base' if 'base' >= mod
        while (power > 0)
        {
            // If power is odd, multiply 'base' with result
            if (power & 1) {
                res = (res * base) % mod;
            }
            // power must be even now
            power = power >> 1; // power = power/2
            base = (base * base) % mod;
        }
        return res;
    }
}
