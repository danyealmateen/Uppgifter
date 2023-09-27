//1
// function createBase(num1) {
//   return function addSix(num2) {
//     return num1 + num2;
//   };
// }

// var addSix = createBase(6);
// addSix(10);
// addSix(21);

//2
// let check = true;

// function runOnce() {
//   if (check) {
//     console.log('Running');
//     check = false;
//   }
// }
// runOnce();

//3
// function counter() {
//   var count = 0;
//   return function countIt() {
//     count++;
//     console.log(count);
//   };
// }
// var myCounter = counter();
// myCounter();

//4
// function createStringBuilder() {
//   let str = '';
//   return function wordBuilder(word) {
//     if (word) {
//       str += ' ' + word;
//     }
//     console.log(str);
//   };
// }
// let stringBuilder = createStringBuilder();
// stringBuilder('Hello');
// stringBuilder('world');
// stringBuilder('!');

//5
// function createVendingMachine() {
//   let totalCoins = 0;
//   const vendingArray = ['Soda', 'Gum', 'Chips'];

//   return function addCoins(coins) {
//     if (totalCoins + coins >= 100) {
//       const selectedItem =
//         vendingArray[Math.floor(Math.random() * vendingArray.length)];
//       console.log(`***${selectedItem}***`);
//       totalCoins = 0;
//     } else {
//       totalCoins += coins;
//       console.log(`${100 - totalCoins} coins left to 100`);
//     }
//   };
// }

// const vendingMachine = createVendingMachine();
// vendingMachine(25);
// vendingMachine(25);
// vendingMachine(25);
// vendingMachine(25);

//NORMALT SÄTT!
// let totalCoins = 0;

// function createVendingMachine(coins) {
//   const vendingArray = ['Soda', 'Gum', 'Chips'];

//   if (totalCoins + coins >= 100) {
//     const selectedItem =
//       vendingArray[Math.floor(Math.random() * vendingArray.length)];
//     console.log(`***${selectedItem}***`);
//   } else {
//     totalCoins += coins;
//     console.log(`${100 - totalCoins} left to 100`);
//   }
// }

// createVendingMachine(25);
// createVendingMachine(25);
// createVendingMachine(25);
// createVendingMachine(25);

// function createFinder() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function find(index) {
//     console.log(a[index]);
//   };
// }

// const find = createFinder();

// console.time('6');
// find(6); // Skriver ut 36
// console.timeEnd('6');

// console.time('12');
// find(12); // Skriver ut 144
// console.timeEnd('12');
