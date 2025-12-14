
function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }

  let result = 1;
  let i = n;

  while (i > 1) {
    result *= i;
    i--;
  }

  return result;
}

// Example usage:
const num = 6;
console.log(`Factorial of ${num} is ${factorial(num)}`);
