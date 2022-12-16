// let firstName = "Asif";
// let age = 23;
// console.log(firstName);
// console.log(age);

// Javascript datatype
//  1. object
//  2. Primitive

/*
Primitive Data type :
 1. Number = 1,2,3,4...& Dermical like 0.1234 etc
 2. String = any name
 3. Boolean = Dermical like .1234 etc
 ------------
 4. undefined = value not define
 5. null = blank data
 6. symble = like *, #, @ etc
 7. BigInt
 */

// 1. Number
// let age = 23;
// console.log(age);

// // 2. String
// let firstName = "Ponkoj";
// console.log(firstName);

// // 3. Boolean
// let iscrickter = true;
// console.log(iscrickter);

// // 4. undefined
// let homeCity;
// console.log(homeCity);

// // 5. Null
// let income = null;
// console.log(income);

// // console.log(typeof age);
// // console.log(typeof firstName);
// // console.log(typeof homeCity);
// // console.log(typeof iscrickter);
// // console.log(typeof income);

// console.log(homeCity);
// homeCity = "Bogura";
// console.log(homeCity);

// console.log(typeof iscrickter);
// iscrickter = "Bangladeshi crickter";
// console.log(typeof iscrickter);
// console.log(typeof income); // java sctipt bug

/*
Way to declear variable
    1. let
    2. const
    3. var
*/

// let variable use = when neeed to change/muted/update a value/data.
// let myAge = 38;
// console.log(myAge);
// myAge = 39;
// console.log(myAge);

// // conts variable use = when no need to change value/data. N/B; Try to use this variable
// const birthYear = 1984;
// console.log(birthYear);

// // // var variable use = when no need to change value/data.  N/B : Always avoid this varible.
// var job = "Teacher";
// console.log(job);

// JavaScript operators Basic

/*
    1. Arithmetic operators/ Mathametical operators  = Like (+, -, *, /, **(power off), %(Modulus), ++, -- etc)
*/
console.log(10 + 12);
console.log(22 - 10);
console.log(5 * 2);
console.log(20 / 4);
let profit = 32 - 20;
console.log(profit);

let currentYear = 2022;
let myAge = currentYear - 1984;
console.log(myAge);

let onuAge = currentYear - 2012;
console.log(onuAge);

// show two variable value in one console
console.log(myAge, onuAge);

// difference between two variable
let ageDiff = myAge - onuAge;
console.log(ageDiff);

console.log(2 ** 2); //Power of
console.log(25 % 6); // Modullus

let x = 10;
x++; //incriment
console.log(x);

let y = 9;
y--; //decriment
console.log(y);

console.log(100 - 30 * 2 + 10);

let nameFirst = "Ponkoj";
let nameLast = "Mondol";
console.log(nameFirst + " " + nameLast);

// 2. Assignment operators = Likes (=, +=, -=, *= )

let item = 10 + 5;
console.log(item);

let z = 15;
z += 10; // z = z + 10
console.log(z);

let a = 35;
a -= 20; //a = a - 20
console.log(a);

let b = 10;
b *= 5; // b = b * 5
console.log(b);

let c = 30;
c /= 10; // c = c /10
console.log(c);
