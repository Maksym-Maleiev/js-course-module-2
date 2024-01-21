function includes(array, value) {
  // Change code below this line
  let result;

  for (const element of array) {
    result = element === value ? true : false;
  }

  return result;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
);
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
