// Whenever we need to repeat a task more than once... consider a loop

// loops need 3 things...

//  1. an incrementor (usually i, j, k; let i = 0) and where to start

//  2. when to stop (i < 10)

//  3. how to increment (i++)

// Simplest / most common loop -- for loop

// let's say we need to write our name 10 times

for(let i = 0; i < 10; i++) {
  console.log(i, 'Todd')
}

// let's say we need to sum up all of the numbers from 1-10

let sum = 0;
for(let i = 1; i <= 10; i++) {
  sum = sum + i;
  // console.log(i, sum);
}
console.log({ sum }); // { sum: 55 }

// One of the most common applications of a loop is looping through
// an array

// lets say we have an array of numbers that we need to add up

//            0  1   2   3  4  5
const nums = [5, 8, 13, 24, 7, 1]

let total = 0;
for(let i = 0; i < nums.length; i++) {
  total = total + nums[i];
  // console.log(i, nums[i], total);
}
console.log({ total })