function evaluateEvenOrOdd(limit) {
    for(let i = 0; i <= limit; i++) {
        if(i % 2 == 0) {
            console.log(i + ' is even')
        } else {
            console.log(i + ' is odd')
        }
    }
}

evaluateEvenOrOdd(10)