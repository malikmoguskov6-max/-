// i                        
// С этим флагом поиск не зависит от регистра: нет разницы между A и a 
// g
// С этим флагом поиск ищет все совпадения, без него – только первое.
// m
// Многострочный режим
// s
// Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
// u
// Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
// y
// Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y")

// console.log("maga hello-Maga".match(/Maga/ig));

// Основные символы 
// класы символов 
/*
* \d - цифра [0-9]
* \w - буква, цифра, _ [A-Za-z0-9_]
* \s - пробельный символ
* \D, \W, \S - ОТРИЦАНИЕ (не цифра, не буква, не пробел)
* . - любой символ кроме перевода строки 
*/

// Квантифакторы (количество)
/**
* +  -  один и больше
*  -  ноль и больше
* ?  -  ноль или один
* {3} - ровно 3
* {2 , 5} - от 2 до 5
* {2, } - 2 и больше 
 */

// якоря
// ^ - начало строки
// $ - конец строки

// Группа и альтернация
/*
 * (...) - группа
 * | - или
 * [abc] - любой из символов a,b,c
 * [^abc] - любой кроме a,b,c
 * [a-z] - диапазон
 */

// console.log(/\d+/.test("123"));//true

// console.log(/\d+/.test("Маге 28 лет"));//true

// console.log(/\w+/.test("Маге 28 лет"));//true

// console.log(/\s+/.test("Маге 28 лет"));//true

// const email = /^[\w.-]+@[\w.-]+\.\w{2,}$/

// console.log(email.test("magomed@mail.ru"));


// const phone = /^\+?\d{11}$/;

// console.log(phone.test("+79991234567")); 

// const word = /^[А-Яа-я]+$/;

// console.log(word.test("привет")); 

// ЭКРАНИРОВАНИЕ СПЕЦСИМВОЛОВ (. , + , * , ? , ( , ), и т.д)

// const specChar = /\+/
// console.log(specChar.test("Maga+changa")); // ишет точку

// const specChar2 = /\+/
// console.log(specChar.test("Maga+changa"));// ишет плюс

// const str19 = /100\$/
// console.log(str19.test("У МЕНЯ ЕСТЬ 100$"));

// const str20 = "abc"
// console.log(str20.search(/b/));


// const str21 = "Hello WOrld Maga"
// console.log(str21.replace(/Maga/ , "JS"))

// const str21 = "Hello WOrld Maga"
// console.log(str21.replace(/Maga/, "Python"))

// const str = "У меня 2 яблока, 10 груш и 150 рублей";
// console.log(str.match(/\d+/g)); 

// const sh4 = /^[A-Za-z0-9]{6,12}$/
// console.log(sh4.test("pass1234"));


// const sh5 = /^[\w]{6,12}$/
// console.log(sh5.test("pass1234"));


// const str = "Это          очень          длинная                строка";
// console.log(str.replace(/\s+/g, " ")); 


const phone = "89991234567";
const result = phone.replace(/^8(\d{3})(\d{3})(\d{2})(\d{2})$/, "+7 ($1) $2-$3-$4");
console.log(result);




