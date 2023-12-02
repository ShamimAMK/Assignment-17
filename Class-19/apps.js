"use strict";
// PROBLEM 01: Find sum of array elements
//array
// Sum=??

// function sumOfArray(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(sumOfArray(myArray));

// //Maximum Number

// function maxNumb(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(maxNumb(myArr));

// //Minimum Number

// function minNum(arr) {
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       let min = arr[i];
//     }
//   }
//   return min;
// }
// const myArra = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(minNum(myArra));

//Minimum Number (reverse way)

//

//Fizzbuzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("Fizzbuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

//Boat racing
const boatRacing = (velocity) => {
  const finishingTime = [];
  const distance = 1000;

  for (let x = 0; x < velocity.length; x++) {
    // s = vt
    // t = s/v
    const time = distance / velocity[x];
    const fixedtime = +time.toFixed(2); // + convert to number from string.
    finishingTime.push(fixedtime);
  }
  return finishingTime;
};

const boatVel = [57, 58, 65, 60, 45, 59, 62, 58, 61];

console.log(boatRacing(boatVel));
