function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  const array = message.split(' ');
  const totalPrice = array.length * pricePerWord;

  return totalPrice;
  // Change code above this line
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); // 50

console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // 100

console.log(calculateEngravingPrice('Web-development is creative work', 40)); // 160

console.log(calculateEngravingPrice('Web-development is creative work', 20)); // 80
