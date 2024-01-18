function checkAge(age) {
  let message = '';

  if (age >= 18) {
    message = 'Ви повнолітня людина';
  } else {
    message = 'Ви не повнолітня людина';
  }

  return message;
}
