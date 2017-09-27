function sieveOfEratosthenes(n) {
    let prime = [];
    for (let i = 0; i <= n; i++) {
        prime[i] = true;
    }

    prime[0] = prime[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = 2; i * j <= n; j++) {
            prime[i * j] = false;
        }
    }
    let result = [];
    for (let i = 0; i <= n; i++) {
        if (prime[i]) result.push(i);
    }
    return result;
}

var a = sieveOfEratosthenes(20);
console.log(a);