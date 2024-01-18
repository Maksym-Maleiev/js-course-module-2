function calculateTotal(number) {
  // Change code below this line
  let sum = 0;

  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }

  return sum;
  // Change code above this line
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
