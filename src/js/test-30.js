for (let i = 0; i <= 5; i += 1) {
  console.log(i);
  if (i === 3) {
    console.log('Нашли число 3, прерываем выполнение цикла');
    break;
  }
}
console.log('Лог после цикла');
