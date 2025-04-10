function fibonacci(n) {
  if (n <= 0) {
    return "Input should be a positive integer";
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let fibSequence = [0, 1];
    while (fibSequence.length < n) {
      fibSequence.push(
        fibSequence[fibSequence.length - 1] +
          fibSequence[fibSequence.length - 2]
      );
    }
    return fibSequence[fibSequence.length - 1];
  }
}

// let n = parseInt(prompt("Enter the position of the Fibonacci number: "));
let n = 20;
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
