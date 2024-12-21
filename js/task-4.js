//const name = 'Eliz' //Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.
//console. log (name)
//let age = 36; 
//Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".
//console.log(`I am ${age} years old`);
//Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.

/*const x = 5;
const y = 10;
або 
const c1 = x + y;
const c2 = x - y;
const c3 = x * y;
console. log(c1);
console. log(c2);
console. log(c3);
або
const result1 = x + y;
const result2 = x - y;
const result3 = x / y;
const result4 = x * y;
console. log(result1);
console. log(result2);
console. log(result3);
console. log(result4); */
//============================
//Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.

/*const city = 'Uzhgorod';
console.log(`I live in ${city}`); */
//================================
//Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль.
/*let email = "eliz5678@gmail.com";
let [name, domain] = email.split("@");
console.log(`name: ${name}`);
console.log(`domain: ${domain}`);

//Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".
let price = 350;
let priceUah = `Ціна ${price} гривень`;
console.log(priceUah);

/*Створи дві змінні firstName і lastName.
Присвой їм своє ім'я та прізвище.
Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
Виведи fullName в консоль.*/
/*const firstName = 'Elizabeth';
const lastName = 'Dzhuravel';
const fullName = firstName + ' ' + lastName;
console. log (fullName);

/*Створи дві змінні a і b, присвой їм якісь цілі числа.
Виконай над ними додавання, віднімання, множення і ділення.
Запиши результати в змінні sum, difference, product, quotient.
Виведи всі ці результати в консоль.*/
/*let a = 12;
let b = 4; 

// Виконання операцій
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console. log(sum);
console. log(difference);
console. log(product);
console. log(quotient);

//!========================================

const quantity = 15;
const orderMsg = `You ordered ${quantity} bots`;

console. log (orderMsg);
//!========================================

const city = 'Uzhgorod';
console. log(`I live in ${city}`);


/*const message = 'This string is 20 chars long'
console. log(message); */


/*const messageLen = 'Hello World'. length;
console. log(messageLen);


const companyName = 'Vertys';
const repBots =150;
const defBots = 50;
const msg = `${companyName} has ${repBots + defBots} bots in stock`;
console.log(msg);

//Індексація
const message = 'Wonderful'
const firstSymbol = message[0];
const lastSymbol = message[message . length - 1];
const result = firstSymbol + lastSymbol;
console.log(result);

//визначення віку
const userAge = 25;
const isAdult = userAge>=18;
console. log(isAdult);
 
//!=========================================
/*Створи змінну radius і присвой їй деяке значення (наприклад, 5).
Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
Використовуй значення π = 3.14. Запиши результат у змінну area.
Виведи area в консоль.
let radius = 5;
let area = 3.14 * radius**2;
console. log(area);

//!=========================================
/*Створи змінну someString і присвой їй будь-який рядок.
Обчисли довжину цього рядка, використовуючи властивість .length.
Виведи довжину рядка в консоль.
const someString = 'I love Uzhgorod';
let length = someString.length;
console. log(length);

//!=========================================
Створи змінну someString і присвой їй будь-який рядок.
Створи змінну firstLetter і присвой їй першу літеру рядка someString.
Створи змінну lastLetter і присвой їй останню літеру рядка someString.
const someString1 = 'I love Uzhgorod';
const firstLetter = someString1[0];//присваюємо їй першу літеру рядка
const lastLetter = someString1[someString1.length - 1];// присваюємо їй останню літеру рядка
console.log(`Рядок: ${someString1}`);
console.log(`Перша літера: ${firstLetter}`);
console.log(`Остання літера: ${lastLetter}`);

//!=========================================
/*Створи дві змінних str1 та str2.
Отримай з кожної змінної останню літеру
Створи третю змінну де обєднай попередні літери
Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"*/

/*const str1 = "HELLO";
const str2 = "WORLD";
const firstL = str1[str1.length -1];
const lastL = str2[str2.length -1];
const str3 = firstL + lastL;

console. log(str3);

//!==========================================
/*Створи змінну userValue та запиши до неї будь-яке число.

Створи нову змінну до якої потрібно записати результат математичної операції а саме:
userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

Приклади:
для числа 1 = 1 * 5^1 = 5;
для числа 2 = 2 * 5^1 = 10;
для числа 12 = 12 * 5^2 = 300;
для числа 512 = 512 * 5^3 = 64000;*/

// Створюємо змінну userValue і записуємо до неї будь-яке число
/*const userValue = 512;

// Визначаємо кількість цифр у числі
const digitsCount = userValue.toString().length;

// Обчислюємо результат: userValue помножити на 5 у степені кількості цифр
const result = userValue * Math.pow(5, digitsCount);

// Виводимо результат у консоль
console.log(`Число: ${userValue}`);
console.log(`Кількість цифр: ${digitsCount}`);
console.log(`Результат: ${result}`);
//!===============================================
/*Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.*/

const apples = 47;
const grapes = 135;

const total = apples + grapes;
console.log(total)

const diff = apples - grapes;
console.log(diff)

//!===============================================
//Замінити вираз перевизначення комбінованим оператором `+=`.


let students = 100;
students += 50;
console.log(students);
//!===============================================
//Розбери пріоритет операторів в інструкції визначення значення змінної
//`result`.

const result = 108 + 223 - 2 * 5;
console.log(result);
//!===============================================
//Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
//змінні вставлені у рядок.


const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
//!===============================================
//Задача-1
//Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. В іншому випадку функція повинна повернути булеве значення false.
function book(str1, str2) {
    if (str1[0] === str2 [str2.length - 1])  {
    return true;  
} else {
            return false;
        }
    }
    
console. log(book('hello','world'));
//!===========================================
//Задача-2
//Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.
function newbook(str3, str4) {
    if (str3[0] === str4 [0])  {
    return true;  
} else {
            return false;
        }
    }
    
console. log(newbook('hello','world'));
//!===========================================
//Задача-3
//Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false.
function fn(str6, str7) {
    if (str6.length === str7.length) {   // або якщо умова що if (str6.length > str7.length)
      return true;
    } else {
return false;
    }  
    }
console.log(fn('task','item'));
//!===========================================
//Задача-4
//Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна. В іншому випадку функція повинна повернути булеве значення false.
function fk(num) {
    const dgCount = num.toString().length;// Перетворюємо число на рядок і обчислюємо довжину
    if (dgCount%2 === 0) {
      return true;  
    } else {
        return false;
    }
}
console.log(fk(3458));
//!===========================================
//Задача-5
//Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false.
function fnk(num1, num2) {
    if (num1 > num2) {
      return true;  
    } else {
        return false;
    }
}
console.log(fnk(345, 294));
//!===========================================
//Задача-6
//Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому випадку функція повинна повернути булеве значення false.
function fnc(num3, num4) {
    if (num3 % num4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(fnc(8, 5));
//!===========================================
//Задача-7
//Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом. В іншому випадку функція повинна повернути булеве значення false.
function fun(num5) {
if (num5 %2 !==0) {      //варіант якщо повинно бути парне число if(num %2 ==0)
    return true;
} else{
    return false;
}
}
console.log(fun(9));
//!==========================================
//Задача-8
//Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false.

//Підказка: допоможе toLowerCase();
function fun1(str8) {
    if (str8 !== str8.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(fun1('fruiTs'));
//варіант2
function fun2(str9) {
    return str9 !== str9.toLowerCase();  //return str !== str.toUpperCase(); альтернативний варіант
}


console.log(fun2("fruits")); // false

//регулярний вираз
// function containsUppercase(str) {
//    return /[A-Z]/.test(str);
//}
//!=============================================
//Задача-12
//Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл. В іншому випадку функція повинна повернути булеве значення false.
function fun3(str10) {
if (str10.includes(" ")) {   //return str.includes(" "); // Перевіряє наявність пробілу
    return true;             // return /\s/.test(str); // Перевіряє, чи є хоча б один пробіл
} else {                    //Якщо потрібно враховувати всі пробільні символи: Використовуйте регулярний вираз /\s/.
    return false;
}
}
console.log(fun3('hello world'));

//!==============================================
//Задача-14
//Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку). В іншому випадку функція повинна повернути булеве значення false.

//Підказка: тут допоможе метод масиву reverse();

function isPalindrome(str11) {
    return str11  ===  str11.split("").reverse().join("");
}
console.log(isPalindrome('radar'));

//Можна так // Приводимо рядок до нижнього регістру та видаляємо зайві пробіли
function isPalindrome1(str12) {
const normalizedStr = str12.toLowerCase().replace(/\s+/g, "");
// Перевіряємо, чи дорівнює рядок своєму зворотному варіанту
return normalizedStr === normalizedStr.split("").reverse().join("");
}


console.log(isPalindrome1("radar"));       // true
console.log(isPalindrome1("hello"));       // false

//Як це працює:


//toLowerCase() — зменшує всі літери до нижнього регістру, щоб перевірка була нечутливою до регістру.
//replace(/\s+/g, "") — видаляє всі пробіли з рядка.
//Розбиваємо рядок на масив символів:

//split("") перетворює рядок на масив окремих символів.


//reverse() перевертає порядок елементів у масиві.


//join("") з'єднує символи назад у рядок.
//Порівняння:

//Зіставляємо вихідний рядок (після нормалізації) з його перевернутою версією.
//Особливості:
//Ігнорує регістр літер.
//Можна легко модифікувати для ігнорування інших символів, наприклад, пунктуації, додавши до регулярного виразу replace(/[^a-z0-9]/gi, "").
//!=====================================================
function fun4(num6, num7) {
    if (num6 >=num7) {       //або if (num6 === num7)  повернути true якщо значення рівні
        return true;
    } else { 
        return false;
    }
}

console.log(fun4(5, 3));
console.log(fun4(3, 9));
//!======================================================
//Задача-17
//Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо перша літера str є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.
function fun5(str12) {
    if (!str12) return false;  // Перевірка на порожній рядок
    const firstChar = str12[0].toLowerCase();
    return firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u';
}
console.log(fun5('apple'));
console.log(fun5('orange'));
console.log(fun5('kiwi'));
//!===================================================
function fun6(num8) {
    if (num8 >=0){
        return true;
    } else {
        return false;
    }
}
console.log(fun6(5));
console.log(fun6(3));
//!====================================================
//Задача-22
//Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на 2, а num2 не ділиться на 2. В іншому випадку функція повинна повернути булеве значення false.
function fun7(num9, num10) {
    if (num9 %2===0 && num10 %2 !==0) {   // скорочений варіант  без if   return num1 % 2 === 0 && num2 % 2 !== 0;
        return true;
    } else {
        return false;
    }
}

console.log(fun7(8, 9));
console.log(fun7(9, 12));
//!=====================================================
//Задача-23
//Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num більше 100, але менше 200. В іншому випадку функція повинна повернути булеве значення false.
function fun8(num11) {
    return num11 > 100 && num11 < 200;
}
console.log(fun8(125));
console.log(fun8(99));
//!======================================================
//Задача-24
//Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить лише маленькі літери. В іншому випадку функція повинна повернути булеве значення false.

//Підказка: допоможе toLowerCase();
function fun9(str13) {
    return str13 === str13.toLowerCase();
}
console.log(fun9('world'));
console.log(fun9('WorlD'));
//!======================================================
//Задача-25
//Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо str1 є частиною str2. В іншому випадку функція повинна повернути булеве значення false.
function fun10(str14, str15) {
    return str15.includes (str14);
    
}

console.log(fun10('learn', 'learn english'));
console.log(fun10('learn', 'english'));
//!=======================================================
//Задача-26
//Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є негативним числом. В іншому випадку функція повинна повернути булеве значення false.
function fun11(num12) {
    return  num12 < 0;
}
console.log(fun11(-5));
console.log(fun11(21));
//!========================================================
//Задача-27
//Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо різниця між num1 та num2 більше 50. В іншому випадку функція повинна повернути булеве значення false.
function fun12(num13, num14) {
    const result = num13 - num14;
    return result > 50;
}
console.log(fun12(95, 15));
//!========================================================
//Задача-28
//Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є нуль. В іншому випадку функція повинна повернути булеве значення false.
function fun13(num15) {
    return num15 === 0;
    
}

console.log(fun13(0));
console.log(fun13(55));
//!=======================================================
//Задача-29
//Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо остання літера str1 є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.
function fun14(str16, str17) {
    const lastChar1 = str16[str16.length -1];
    return lastChar1 === 'a' || lastChar1 === 'e' || lastChar1 === 'i' || lastChar1 === 'o' || lastChar1 === 'u';
}
console.log(fun14('apple', 'dog'));
console.log(fun14('dog', 'banana'));
//!=======================================================





