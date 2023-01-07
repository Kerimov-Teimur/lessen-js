// ЗАДАЧА
// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mod зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() и for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// }

// user.mod = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(Object.keys(user));
// for (const key of Object.keys(user)) {
    
//     console.log(`${key}:${user[key]}`);
// }

// ГОТОВО!


// ЗАДАЧА
// Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$.
// Такого кол-во звёзд нет.

// const stars = 5;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-во звёзд нет!');
// }

// console.log(price);

// ГОТОВО!

// ЗАДАЧА
// // Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
// const colors = [
// //   { hex: "#f44336", rgb: "244,67,54" },
// //   { hex: "#2196f3", rgb: "33,150,243" },
// //   { hex: "#4caf50", rgb: "76,175,80" },
// //   { hex: "#ffeb3b", rgb: "255,235,59" },
// // ];

// // const hexColors = [];
// // const rgbColors = [];
// // // Change code below this line

// // for (const color of colors) {
// //     hexColors.push(color.hex);
// //     rgbColors.push(color.rgb);
// // }

// // console.log(hexColors);
// // console.log(rgbColors);
// ГОТОВО!

// ЗАДАЧА
// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 6 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 150, quantity: 100 },
// ]

// function calcTotalPrice(array, stonesName) {
//     for (const stone of array) {
//         if (stone.name === stonesName) {
//             return stone.price * stone.quantity;
//        }
    
//     }
// }

// console.log(calcTotalPrice(stones, 'Бриллиант'));

// ГОТОВО!

// ЗАДАЧА
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.


// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;

//         return this;
//     },

//     sum() {
//         return this.a + this.b;

//     },

//     mult() {
//         return this.a * this.b;
//     }
// }

// console.log(calculator.read(10, 15))
// console.log(calculator.sum())
// console.log(calculator.mult())

// ГОТОВО!

// ЗАДАЧА!
// Напиши функцию getProductPrice(productName) которая принимает один параметр
// productName - название продукта.Функция ищет объект продукта с таким именем(свойство name)
// в массиве products и возвращает его цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
//         if (product.name === productName) {
//     return product.price
//   }
//     }
    
//     return null;
// }
// ГОТОВО!

// В переменную message записать сообщение в зависимости от опции.
// - 'Вы сможите забрать товар завтра в 12:00 в нашем офисе'
// - 'Курьер доставит заказ завтра с 9:00 до 18:00'
// - 'Посылка будет отправленна сегодня'
// - 'Вам перезвонит менеджер'

// // 1.Сделать переменные
// const option = 1;
// let message = '';

// // 2.Сделать switch 1 2 3
// // 3.В каждом кейсе записать в message строку
// switch (option) {
//     case 1:
//         message = 'Вы сможите забрать товар завтра в 12:00 в нашем офисе';
//         break;
    
//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//         break;
    
//     case 3:
//         message = 'Посылка будет отправленна сегодня'
//         break;
    
//     default:
//         message = 'Вам перезвонит менеджер';
// }

// // 4.Сделать log  message
// console.log(message);

// ГОТОВО!


// Цикл for

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

// console.log('финиш');
// ГОТОВО!

// ЗАДАЧА!
// Напиши скрипт который подсчитывает общую сумму зарплат работников.
// Кол-во работников храниться в переменной employees.
// Зарплата каждого работника это случайное число от 500 до 5000.
// Записать сумму в переменную totalSalary и вывести в консоль

// 1.сделать переменные
// 2.перебрать работников в цикле
// 3.сгенерить случайную зп
// 4.прибавить к тоталу
// 5.лог
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalery = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     totalSalery += salary;
// }

// console.log('totalSalary:', totalSalery);

// ГОТОВО!


// ЗАДАЧА!
// Напиши скрипт который подсчитывает сумму всех чётных чисел,
// которые входят диапазон чисел в переменных от min до max.
// Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4 их сумма 6.

// const min = 6;
// const max = 13;
// let total = 0;

// // фор от min до max с шагом в 1
// // проверяем остаток от деления
// // пишем сумму

// for (let i = min; i <= max; i += 1) {
//     if(i % 2 !== 0) {
//         console.log('Не чётное:', i);
//         continue;
//         // Логика от обратного
//     }

//     console.log('Чётное:', i);
        
//     total += i;
//     // аналог +=
//     // total = total + i;
// }

// console.log('total:', total);

// ГОТВОВО!


// ЗАДАЧА!
// Напиши скрипт обработки покупки в магазине.

//  - Баланс пользователя храниться в переменной balance.
//  - Сумма покупки храниться в переменной payment.
//  - Перед проверкой вывести сообщение:
// "Общая  стоимость заказа [число] кредитов"
// - Если сумма покупки не привышает баланс:
//      - Вычесть из баланса сумму покупки
//      - Вывести сообщение "На счету осталось [число] кредитов"
// - Если сумма покупки превышает баланс:
//      - вывести сообщение "На счету недостаточно средств для проведения операции!"
// - В конце вывести сообщение "Операция завершина"
// - 'Всё хорошо снимает деньги... Спасибо за покупку!'
// Решение
// 1.переменные
// 2. условие сумма <=баланс
// 3.


// let balance = 10000;
// const payment = 2000;

// console.log(`Общая  стоимость заказа ${payment} кредитов`);

// if (balance >= payment) {
//     console.log('Всё хорошо снимает деньги... Спасибо за покупку!');
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log("На счету недостаточно средств для проведения операции!");
// }

// console.log('Операция завершина!');

// ГОТОВО!


// ЗАДАЧА!
/*Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
от потраченной суммы за всё время (партнераская программа)

- Общая сумма потраченного храниться в переменной totalSpent
- Cумма текущего платежа храниться в переменной payment
- Скидка храниться в переменной discount

- Если потраченно от [100 до 1000] - бронзовый партнёр, скидка 2%
- Если потраченно от [1000 до 5000] - серебренный партнёр, скидка 5%
- Если потраченно больше [5000] - золотой партнёр, скидка 10%
- Если потраченно меньше [100] - не партнёр, скидка 0%

В результате вывести сообщение "Оформляем заказ на сумму [cумма] со скидкой [скидка]%"

'Бронзовый партнер скидка 2%'
'Серебренный партнер скидка 5%'
'Золотой партнер скидка 10%'
'У вас ещё нет партнерской скидки'
*/

// let totalSpent = 5000;
// let payment = 1000;
// let discount = 0;

// if (totalSpent <= 100) {
//     discount = 0;
//     console.log('У вас ещё нет партнерской скидки');

// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 0.02;
//     console.log('Бронзовый партнер скидка 2%');

// } else if (totalSpent >=1000 && totalSpent < 5000) {
//     discount = 0.05;
//     console.log('Серебренный партнер скидка 5%');

// } else {
//     discount = 0.10;
//     console.log('Золотой партнер скидка 10%');
// }

// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;
// console.log(`Общая сумма потраченная в магазине: ${totalSpent}`)

// ГОТОВО!

// ЗАДАЧА! МАССИВЫ!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }
// ГОТОВО!

// ЗАДАЧА!
// Посчитать общую сумму покупок в корзине.
// 1. перебрать массив
// 2. сделать переменную total
// 3. каждый элемент приплюсовать к тоталу

// const card = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;


// // for (let i = 0; i < card.length; i += 1) {
// //     console.log(card[i]);
// //     total += card[i];
// // }


// // FOR OF
// for (const value of card) {
//     total += value;
// }
// console.log('total:' , total);

// ГОТОВО!

// ЗАДАЧА!

/*Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) 
и возвращает сумму всех целых чисел от единицы и до этого числа. Например, 
если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

*/

// function calculateTotal(number) {
// let total = 0;
//     for (let i = 0; i <= number; i += 1) {
//       total += i;
//   }

//   return total;
// }

// console.log(calculateTotal());

// ГОТОВО!

// ЗАДАЧА!

/*
Напиши скрипт поиска логина
- Если Логина нет, вывести в сообщение "Пользователь [логин] не найден."
- Если нашли Логин, вывести в сообщение "Пользователь [логин] найден"

- Сначала через for
- потом через for...of
- Логика breake
- Метод includes() c тренарным оператором
*/

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// 1 ВАРИАНТ РЕШЕНИЯ!!!!!

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('Login:', login);

//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);
    
//     if (loginToFind === login) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
        
// }

// console.log(message);

// 2 ВАРИАНТ РЕШЕНИЯ!!!!!

// for (const login of logins) {
//     console.log('Login:', login);

//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);


//     if (loginToFind === login) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

// 3 ВАРИАНТ РЕШЕНИЯ!!!!!

// message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// ГОТОВО!!!

// ЗАДАЧА!
/*
Напиши скрипт поиска самого маленького числа в массиве,
при условии что числа уникальные (не повторяються).
*/

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallNumber = numbers[0];

// for (const number of numbers) {

//     if (number < smallNumber) {
//         smallNumber = number;
//     }
    
// }

// console.log(smallNumber);

// ГОТОВО!

// ЗАДАЧА!

/*
Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".
*/

// const string = 'JavaScript';
// const letters = string.split('');
// let inverstedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Эта буква в нижнем регистре!!!-', letter);

//     //     inverstedString += letter.toUpperCase();
//     // } else {
//     //     console.log('Эта буква в вверхнем регистре!!!-', letter)

//     //     inverstedString += letter.toLowerCase();
//     // }

//     inverstedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(inverstedString);

// ГОТОВО!

// ФУНКЦИИ                            ======

// ЗАДАЧА!

// Напиши Функцию logItems(items) для перебора и логирования массива.
// Функция ничего не возвращает!

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

// ГОТОВО!!

// ЗАДАЧА!

// Напиши функцию findLogin(allLogins, login) для поиска логина.
// - Если логина нет, вывести сообщение "Пользователь [Login] не найден".
// - Если нашли логин, вывести сообщение "Пользователь [Login] найден"

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

// // Вариант 1
// // const findLogin = function (allLogins, loginToFind) {


// //     for (const login of allLogins) {
        
// //         if (login === loginToFind) {

// //             return `Пользователь ${loginToFind} найден`;
// //         }
// //     }
// //     return `Пользователь ${loginToFind} не найден`;
// // }

// // Вариант 2

// // const findLogin = function (allLogins, loginToFind) {
// //     return allLogins.includes(loginToFind)
// //         ? `Пользователь ${loginToFind} найден`
// //         : `Пользователь ${loginToFind} не найден`;
// // }

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'aj4xth3m4n'));

// ГОТОВО!

// ЗАДАЧА!

// Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяються)

// const numbers = [51, 18, 13, 24, 7, 85, 19];


// const findSmallesNumber = function (numbers) {

//     let smallNumber = numbers[0];

//     for (const number of numbers) {

//         if (number < smallNumber) {

//             smallNumber = number;
//         }
//     }

//     return smallNumber;
// }


// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); //8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// ГОТОВО!

// ЗАДАЧА!

// Напиши функцию changeCase(string) которая заменяет регистр,
// каждого символа в строке на противоположный.
// Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".

// const changeCase = function (string) {
//     const letters = string.split('');
//     let inverstedString = '';
    

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         inverstedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//     }
    
//     return inverstedString;

// }

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

// ГОТОВО!

// ЗАДАЧА!

// Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
// Строка состоит только из букв и пробелов

// const slugify = function (string) {
//     return string.toLowerCase().split(' ').join('-');

// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// ГОТОВО!

// ЗАДАЧА!! ОБЬЕКТЫ!!
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// ГОТОВО!
