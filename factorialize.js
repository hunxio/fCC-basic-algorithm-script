// Factorialize a given number

function factorialize (num) {
    let result = 1;
    for (let i = 1; i <= num ; i++) {
        result *= i;
    };
    return result;
    }
    
console.log(factorialize(5));
