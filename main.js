"use strict"




// var Tf = (9 / 5);
// var Tc = 32;

// alert('сколько будет 32 градуса сейльсия в фаренгейтах, чтобы узнать ответ нажмите ОК')
// alert(Tf * Tc)

// var name = 'Василий';

// var admin = 'Василий';

// alert(admin)


// alert(1000 + "108") //будет = 1000108

// ############################################## ВТОРОЙ УРОК ###################################### //
// ############################################## ВТОРОЙ УРОК ###################################### //

//##### правила функции start          ##############################################


// function f(a, b) {
//     var res = a + b;

//     return res;
// }

// вызов функции  
// console.log(f(2, 3));


// вызов функции c промежуточной переменой

// var x = f(5, 10);
// console.log(x);

//####### правила функции the end #######################################



//############### непонятная штука start #######################################

// function f() {
//     console.log('x');
//     y();
// }

// function y() {
//     console.log('y');
//     z();
// }

// function z() {
//     console.log('z');

// }

// x();

// ########################## непонятная штука end  ############################################


//################# ПРИВЕДЕНИЕ СТРОКИ К ЧИСЛУ START ###########################################


// let x = '5';

// x++ // оператор присовоение ++ = 5+1, к числу добовляется 1

// console.log(x);

// console.log(Number(x)); // namber приводит строку к числу но несможен привести '5px'

// console.log(parseInt(x)); // parseInt  приводит строку к числу даже если в строке есть буквы '5px'


//###################### ПРИВЕДЕНИЕ СТРОКИ К ЧИСЛУ THE END ########################################


//################# УНАРНЫЙ ОПЕРАТОР ПРИСВАИВАНИЯ ++ START ###########################################

// let x = 5;

// x++ // оператор присовоение ++ = 5+1, к числу добовляется 1

// console.log(x); //= 6

// let y = 1 + ++x

// console.log(y); // = 8 

//###################### ОПЕРАТОР ПРИСВАИВАНИЯ ++ ЧИСЛУ END ########################################


//################# ОПЕРАТОРЫ СРАВНЕНИЕ START  ###########################################

// 5 == '5' // оператор не строго стравнения вернет true

// 5 === '5' // оператор строго стравнения вернет false

// alert( 2 > 1 );  // true (верно)
// alert( 2 == 1 ); // false (неверно)
// alert( 2 != 1 ); // true (верно)

//################# ОПЕРАТОРЫ СРАВНЕНИЕ THE END  ###########################################


//################# ЛОГИЧЕСКИЕ ОПЕРАТОРЫ || (ИЛИ) && (И)  START  ###########################################

// || (ИЛИ) // оператор или

// alert( true || true ); // true
// alert( false || true ); // true
// alert( true || false ); // true
// alert( false || false ); // false

// && (И)

// alert( true && true ); // true
// alert( false && true ); // false
// alert( true && false ); // false
// alert( false && false ); // false

//################# ЛОГИЧЕСКИЕ ОПЕРАТОРЫ  THE END  ###########################################


//################# ОПЕРАТОРЫ ВЕТВЛЕНИЯ  START  ###########################################

// let x = 5

// if (x < 1) { // условия
//     alert('x меньше одного'); // действие
// } else if (x > 1) { // условия
//     alert('x больше одного'); // действие
// } else { // условия
//     alert('нет верного решения'); // действие
// }

// //

// let x = 1

// switch (x) { // если case равно 5 выполняется  console.log('one')
//     case 1: // условия
//         console.log('one') // действие

//         break;
//     case 2: // условия
//         console.log('two') // действие

//         break;
//     case 3: // условия
//         console.log('three') // действие

//         break;

//     default: // еслли не одно условие не сработает, тогда отработает  default
//         console.log('fuk')
//         break;
// }





//################# ОПЕРАТОРЫ ВЕТВЛЕНИЯ  THE END  ###########################################


//################# РЕКУРСИВНЫЙ ВЫЗОВ ФУНКЦИИ  START  ###########################################

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//     alert('Это слишком рано...');
// } else if (year > 2015) {
//     alert('Это поздновато');
// } else {
//     alert('Верно!');
// }

// let namber = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (namber > 1) {
//     alert('значение больше одного');
// } else if (namber < -1) {
//     alert('число меньше -1');
// } else  (namber == 0) {
//     alert('значение равно 0');
// }



//################# РЕКУРСИВНЫЙ ВЫЗОВ ФУНКЦИИ  THE END  ###########################################


//################# ДЗ 2  START  ###########################################


// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - так как унарный оператор добавляет единицу к своему операнду.
// d = b++; alert(d);           // 1 - напротив b++ вернёт 1 и потом установит значение x равным 2
// c = (2+ ++a); alert(c);      // 5 - так как в первом примере мы прибавили единицу в переменную а ее значение стало равно 2 В данном примере прибавляем еще единицу и а становится равно 3, отсюда ответ 5 
// d = (2+ b++); alert(d);      // 4 - во втором примере мы прибавили единицу в переменную b ее значение стало равно 2.В данном примере прибавляем еще единицу и а становится равно 3, но выводим предыдущее значение т.е. 2, отсюда получаем 4 */
// alert(a);                    // 3 - так как в 1 условие мы прибавли 1 и в третьем условии мы прибавили 1 = 3
// alert(b);                    // 3 - к переменой b дава раза прибовлялся 1, но значение не выводилось в итоге 3. 

// 2. Чему будет равен x в примере ниже?

// var a = 2;
// var x = 1 + (a *= 2);  //X будет равен 5 т.к. оператор *= это сокращенный оператор, полностью он будет выглядеть x = 1 + (a = a * 2 ) */

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:


// let a = prompt('положи любое число');
// let b = prompt('теперь еще одно');
// let x;

// if (a > 2 && b > 2) {
//     x = a - b;
//     alert(x);

// } else if (a < 5 && b < 5) {
//     x = a * b;
//     alert(x);
// } else if (a > 0 && b < 0 || a < 0 && b > 0) {
//     x = a + b;
//     alert(x);
// }

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

// let a = +prompt('Введите число от 1 до 15');
// switch (a) {
//     case 1:
//         alert('Ваше число 1');
//         break;
//     case 2:
//         alert('Ваше число 2');
//         break;
//     case 3:
//         alert('Ваше число 3');
//         break;
//     case 4:
//         alert('Ваше число 4');
//         break;
//     case 5:
//         alert('Ваше число 5');
//         break;
//     case 6:
//         alert('Ваше число 6');
//         break;
//     case 7:
//         alert('Ваше число 7');
//         break;
//     case 8:
//         alert('Ваше число 8');
//         break;
//     case 9:
//         alert('Ваше число 9');
//         break;
//     case 10:
//         alert('Ваше число 10');
//         break;
//     case 11:
//         alert('Ваше число 11');
//         break;
//     case 12:
//         alert('Ваше число 12');
//         break;
//     case 13:
//         alert('Ваше число 13');
//         break;
//     case 14:
//         alert('Ваше число 14');
//         break;
//     case 15:
//         alert('Ваше число 15');
//         break;            
//     default:
//         alert('Ай ай вы должны должны водить числа от 1 до 15');                
//         break;

// }

5 //. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

// var a = 5;
// var b = 10;

// function plus(a, b) {
//     return a * b;
// }

// function minus(a, b) {
//     return a - b;
// }

// function division(a, b) {
//     return a / b;
// }

// function multiply(a, b) {
//     return a + b;

// }

// console.log(plus(a, b));

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'сложение':
//             return arg1 + arg2;
//             break;
//         case 'вычитание':
//             return arg1 - arg2;
//             break;
//         case 'деление':
//             return arg1 / arg2;
//             break;
//         case 'умножение':
//             return arg1 * arg2;
//             break;
//     }
// }


//7) *Сравнить null и 0. Попробуйте объяснить результат.

// 0 - это число, умножение на на ноль даст ноль, а сложение 5 с 0 даст 5.
// NULL - это неопределенный тип данных, не известно что, любые операции с NULL опять приводят к неопределенному типу данных, т.е. умножение NULL на 5 даст NULL, но и сложение 5 с NULL даст NULL (если к неизвестному прибавить 5 опять получится неизвестное).

function pow(a, n) {
    return a ** n;
}

console.log(pow(2, 3));


яс выывмвамиваиекиектентнеьнгьгнькуквмувкиекет


//################# ДЗ 2  THE END  ###########################################