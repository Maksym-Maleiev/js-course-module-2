function getEvenNumbers(start, end) {
  // Change code below this line
  let arr = [];

  for (let i = start; i <= end; i += 1) {
    const number = i;

    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  return arr;
  // Change code above this line
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));
