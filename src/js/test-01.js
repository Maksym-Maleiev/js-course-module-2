/*
function checkAge(age) {
  if (age >= 18) {
    return 'Ви повнолітня людина';
  }

  return 'Ви не повнолітня людина';
}

console.log(checkAge(18));
*/

function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return 'You are an adult';
  }

  return 'You are a minor';
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));
