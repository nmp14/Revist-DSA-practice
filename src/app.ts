console.log('Hello world');
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`What's your name?`, (name: any) => {
    console.log(`Hi ${name}!`);
    rl.close();
});

