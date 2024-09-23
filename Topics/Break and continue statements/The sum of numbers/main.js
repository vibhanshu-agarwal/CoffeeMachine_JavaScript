function sum(numbers) {
    // write your code here
    let sum = 0;
    for (let number of numbers) {
        if (number === 0) break;
        sum += Number(number);
    }
    return sum;
}