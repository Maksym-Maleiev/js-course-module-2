function getExtremeElements(array) {
  // Change code below this line
  for (const element of array) {
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    let newArr = [firstElement, lastElement];

    return newArr;
  }
  // Change code above this line
}

console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]

console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); // ["Earth", "Venus"]

console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); // ["apple", "banana"]
