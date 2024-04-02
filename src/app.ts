console.log('Hello world');
const readline = require('node:readline');


const timeOne = performance.now();
const num = function addUpTo(n: number) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
} (20000000000);
const timeTwo = performance.now();

console.log((timeTwo - timeOne) / 1000);
console.log(num);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`What's your name?`, (name: any) => {
    console.log(`Hi ${name}!`);
    rl.close();
});

