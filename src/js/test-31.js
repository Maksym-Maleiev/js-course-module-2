function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);
    if (i === 3) {
      console.log('Нашли число 3, делаем возврат, прерывая цикл и функцию');
      return i;
    }
  }
  console.log('Лог после цикла в теле функции');
}
const result = fn();
console.log('Лог после выхода из функции');
console.log(`Результат выполнения функции ${result}`);
