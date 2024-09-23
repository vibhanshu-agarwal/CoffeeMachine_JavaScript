function checkEvenOrOdd(numbers) {
    // write your code here
    for(let number of numbers) {
        if(number === 0) {
            break;
        }
        else if(number % 2 === 0) {
            console.log("even");
        }
        else if(number % 2 !== 0) {
            console.log("odd");
        }
    }
}