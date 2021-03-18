// Algo 1: Reduce Sum
// Return the sum of all numbers in a given array.

const reduceSum = (arr) => {
  return arr.reduce((sum, value) => sum + value, 0);
}

// console.log(reduceSum([1, 2, 3, 4]))

const arrSum = (arr) => {
  let sum = 0;

  for(let num of arr){
    sum += num;
  }

  return sum;
}

// console.log(arrSum([1, 2, 3, 4]))

// The reduce sum function was fisrt solved using a reduce function and then with a for/of functions

// Algo 2: Less than 100
// Given an array of numbers, return a new array that contains all numbers from the original array 
//that are less than 100.

const underOneHundo = (arr) => {
  return arr.filter(num => num < 100)
}

// console.log(underOneHundo([99, 101, 88, 4, 2000, 50]))

const underOneHundoLoop = (arr) => {
  let result = [];
 
  for(let num of arr){
    if(num < 100){
      result.push(num)
    }
  }
 
  return result;
 }

//  console.log(underOneHundo([99, 101, 88, 4, 2000, 50]))

// In the first solution, we filtered the givern array to create a new array that only contains numbers under 100
// In the second solutions, we used a for/of loop to push the numbers under one hundred into a new array

// Algo 3: Map Double
//Given an array of numbers, return a new array whose values are the original array’s value doubled.

const seeingDouble = (arr) => {
  return arr.map((num) => num * 2);
}

// console.log(seeingDouble([4, 2, 5, 99, -4]));

// For this solution we just have to use the map method and multiply each number by 2

//Algo 4: Array Max
// Return the greatest value from an array of numbers.

const toTheMax = (arr) => {
  return Math.max(...arr);
}

// console.log(toTheMax([5, 17, -4, 20, 12]))

const getTheMax = (arr) => {
  let greatestNum = arr[0];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > greatestNum){
      greatestNum = arr[i]
    }
  }

  return greatestNum;
}

// console.log(getTheMax([5, 17, -4, 20, 12]))

//In the first solution we use the Math.max method and spread the give array into it to find the max
//In the second solution we use a for loop to determine the greatest number

// Algo 5: Reduce: Product
// Given an array of numbers, return the product of all the numbers.

const product = (arr) => {
  return arr.reduce((sum, value) => sum * value)
}

// console.log(product([1, 2, 3, 4]))

//In this solution we simply call the reduce method on the given array and pass it a function that multiplies each value by the accumulator(sum)

//Algo 6: Reverse Array
//Given an array, return a new array that contains the original array’s values in reverse.

const reverse = (arr) => {
  return arr.reverse();
}

// console.log(reverse([1, 2, 3, 4, 5]));

const reverseIt = (arr) => {
  let reverseArr = [];
  for(let num of arr){
    reverseArr.unshift(num)
  }
  return reverseArr;
}

// console.log(reverseIt([1, 2, 3, 4, 5]));

// In the first solution we use the array reverse function method to reverse the entire array
//In the second solution we use unshift method to create a new array with the numbers in reverse order

// Algo 7: Skip It
// Given an array of numbers, return a new array in which only select numbers from the original array are included, based on the following details:
// The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.

// const skipIt = (arr) => {
//  let result = [];

//  for(let i =0; i)

//  return result;
// }

// console.log(skipIt([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]));

//Algo 8: Reverse String
// Return the reverse of a given string.

const reverseString = (str) => {
  return str.split('').reverse().join('');
}

// console.log(reverseString('abcde'));

//For this solution we use the split method to turn the given string into an array. Each character has its own index, so we can reverse the array and
//then join it back together without spaces between the letters