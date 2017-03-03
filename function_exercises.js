//Square the Numbers
// function squareTheNumbers(array) {
//   var squares = array.map(function(n) {
//     return n*n;
//   });
//   return squares;
// }
// console.log(squareTheNumbers([1, 2, 3]));

//Cities 1
// function coolCities(array) {
//   var cities = array.filter(function(n) {
//     return (n.temperature < 70);  //n is the city object in question in the cities array
//   });
//   return cities;
// }
//
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// console.log(coolCities(cities));

// Cities 2
// function cityNames(array) {
//   var cityNames = array.map(function(n) {
//     return n.name;
//
//   });
//
//   return cityNames;
// }
//
//
//
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// console.log(cityNames(cities));

//Good Job
// function goodJob(array) {
//   peopleNames = array.map(function(n) {
//     console.log("Good Job, " + n + "!");
//     // return n;
//   });
//
// }
//
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
//
// goodJob(people);


//3 Times
// function hello() {
//   console.log("Hello, world!");
// }
//
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
//
// call3Times(hello);


// n times
// function callNTimes(times, fun) {
//   for (var i = 0; i < times; i++) {
//     fun();
//   }
// }
//
// function hello() {
//   console.log("Hello, world!");
// }
//
// callNTimes(5, hello);


//Product
// function product(array) {
//   var products = array.reduce(function(a,b) {
//     return a*b;
//   });
//   return products;
// }
//
// console.log(product([3, 4, 5]));

//Total Price
// var products = [
//   { name: 'Basketball', price: 12.00 },
//   { name: 'Tennis Racquet', price: 66.00 },
//   { name: 'Tennis Balls', price: 9.00 },
//   { name: 'Tennis Balls', price: 9.00 }
// ];
//
// function total(array) {
//   var prices = array.map(function(n) {
//     return n.price;
//   });
//
//   var theTotal = prices.reduce(function(a,b) {
//     return a+b;
//   });
//   return theTotal;
// }
//
// console.log(total(products));

// Str Join
// function strJoin(strs, sep) {
//   var items = strs.reduce(function(a,b) {
//     return a + sep + b;
//   });
//   console.log(items);
// }
//
// // groceries = ['apples', 'strawberries', 'bananas', 'mangoes', 'pineapples'];
// //
// // strJoin(groceries, ' and then get ');
//
// strJoin(['Hello', 'and', 'goodbye'], ' ');


//Acronym
// function strJoin(strs, sep) {
//   var items = strs.reduce(function(a,b) {
//     return a + sep + b;
//   });
//   console.log(items);
// }
//
// function acronym(array) {
//   var theAcronym = " ";
//   theAcronym = array.map(function(n) {
//     return n[0].toUpperCase();
//   });
//
//   strJoin(theAcronym, '');
// }
//
// acronym(['very', 'important', 'person']);


//Str - Multiply
// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
//
// function strMultiply(str, times) {
//
//   var arr = range(0,times);
//
//   var strarr = arr.map(function(x){
//     return str;
//     });
//
//   var items = strarr.reduce(function(a,b) {
//     return a + b;
//   });
//
//   return items;
// }
// console.log(strMultiply('abc', 5));


//BOX
// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
//
// function box(width, height) {
//   var arrWidth = range(0,width);
//   var arrHeight = range(0,height);
//
//   var stars = arrWidth.map(function(x){
//     return "*";
//   });
//
//   var stringArray = stars.reduce(function(a,b) {
//       return a + b;
//   });
//
//   var highBox = arrHeight.map(function(y){
//     return stringArray;
//   });
//
//   //highBox = [***,***,***]
//   var items = highBox.reduce(function(c,d) {
//       return c + "\n" + d;
//     });
//     console.log(items);
// }
//
// box(7, 3);


// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
//
//
//
// function alphebatize(array) {
//     var names = array.sort();
//     return names;
// }
//
// console.log(alphebatize(people));


// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
//
//
// function nameCounter(a,b) {
//   return a.length - b.length;
// }
//
// function longestName(array) {
//     var names = array.sort(nameCounter);
//     return names;
// }
//
// console.log(longestName(people));


// var products = [
//   { name: 'Basketball', price: 12.00 },
//   { name: 'Tennis Racquet', price: 66.00 },
//   { name: 'Tennis Balls', price: 9.00 },
//   { name: 'Tennis Balls', price: 9.00 }
// ];
//
// function totalCalculator(a, b) {
//   return a.price - b.price;
// }
//
// function mostExpensive(array) {
//   var items = array.sort(totalCalculator);
//   return items;
// }
//
// console.log(mostExpensive(products));

//Cipher
// function cipher(array) {
//   var offset = 13;
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   //var result = ' ';
//   var words = array.map(function(n) {
//     var unicode = n.charCodeAt(0);
//     var idx = alphabet.find(n);
//     var new_idx = idx + offset;
//     if (new_idx > 25) {
//       new_idx -= 26;
//     }
//     new_char = alphabet[new_idx];
//     return new_char;
//   });
//   return words;
//
// }
//
// console.log(cipher('secret'));
