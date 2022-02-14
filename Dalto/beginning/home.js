// data types

let yourAge = 25; // number
let yourNme = "Jhon"; // string
let name = { first: 'pedro', last: 'Perez' }; // Object
let groceries = ['apple', 'banana', 'orange']; // Array
let random; // Undefined
let nothing = null; // value null

// String in Javascript (common methods)

let fruit = 'banana';
let moreFruits = 'banana/napple'; // New line

console.log(fruit.length);
console.log(fruit.indexOf('n'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // Split by characters

// Array

let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]); // access value at idenx 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}

// Array common methods

console.log('to string', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop());
console.log(fruits.push('blackberries')); //appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; // same as push
console.log(fruits);
fruits.shift(); // remove irst element from an array
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) { return a - b }));
console.log(someNumbers.sort(function(a, b) { return b - a }));

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);

}

console.log(emptyArray);