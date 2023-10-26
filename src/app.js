const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
 function slice(start,end){
   let modifiedFood = [];
   for(let foodItem = start;
    foodItem < end-1; foodItem++){
      modifiedFood.push(foods[foodItem]);
    }
    return modifiedFood;
 }

// Progression 2:
 
function spliced(){
  foods.splice(2,0,"noodles","icecream")
  return foods
}

// Progression 3:
// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
function checkNumber(numberArray, operation){
  modifiedNumberArray = numberArray.filter(operation);
  return modifiedNumberArray;
}


// Progression 4:
function reject(numberArray){
  let nonPrimeNumberArray = [];
  numberArray.forEach(number=>{
      isPrime(number) ? null : nonPrimeNumberArray.push(number); 
  })

  return nonPrimeNumberArray;
}

function nonPrime(numberArray){
  ans = reject(numberArray);
  return ans;
}


// Progression 5:
const isEvenUsingLambda = number => number%2==0;

// Progression 6:
function square(number){
  return number*number;
}

function findSquareOfNumbers(myArray){
  let squaredArray = myArray.map(square);
  return squaredArray;
}

// Progression 7:

function multiply(myArray){
  return myArray.reduce((mul, number)=>{
      return mul*number;
  },1);
}

function sumOfSquares(myArray){
  return myArray.map(square).reduce((sum,number)=>{
      return sum+number;
  },0)
}
