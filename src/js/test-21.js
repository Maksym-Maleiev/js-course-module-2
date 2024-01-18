function findLongestWord(string) {
  // Change code below this line
  const words = string.split(' ');
  let maxWord = words[0];

  for (const word of words) {
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }

  return maxWord;
  // Change code above this line
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
