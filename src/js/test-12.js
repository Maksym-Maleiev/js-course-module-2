function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
  string = array.join(delimiter);
  // Change code above this line
  return string;
}

console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
); // "Mango hurries to the train"

console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '')); // "Mango"

console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_')); // "top_picks_for_you"
