console.log("hello world")

//variables
/**
 * Const - the value cannot be changes
 * Let - the value can be changed
 * var - the value can be changed - but not recommended
 */
let name = 'Jayson Alfie'
console.log(name);

let sentence = 'What a great day to be alive as we strive to have the best life ever'
console.log(sentence)

//operators
// fruit = prompt('What is you favorite fruit?')
// console.log(fruit)


// meat = Number(prompt('How much does the meat go for?'))
// tipPercentage = Number(prompt('tip % ?') /100)
// tipAmount = meat * tipPercentage
// console.log('tip amount', tipAmount)
// total = meat + tipAmount
// console.log( 'total', total)
//alert(tipAmount)

//user input
//prompt() is a functionality that enables you to get inputs from the user through the browser
//Use of Number function to convert strings to numbers

/**
 * Datatypes (strings, numbers,arrays, objects, boolean )
 * 
 */

/**
 * Math operators
 * 
 * -Multiplication
 * -Division
 * -Addition
 * -Subtraction
 * Exponents **
 * Module %
  
*/

/**
  Math Methods
  Floor-rounds a number down to the nearest integer
  Ceil - rounds a number up to the enarest integer
  Random - returns a random number between 0 and 1
 */

//Build a tiny weather app(conditionals)
/**
 * if rain : 'grab umbrella'
 * else : 'wear sunglasses'
 * 
 */

// let weather = prompt('How is the weather?')
// if (weather == 'rainy'){
//   console.log('Grab your umbrealla')
// } else {
//   console.log('Wear sunglasses')
// }

//conditional operators
// ==, ===, >, <, <=, =>, !=, !==

//Functions
//This function has 0 arguments
function sayMyName2(){
  console.log('Alfie')
  
}

// sayMyName2()
/**
 * Function arguments are the values received by the function when it is called 
 * They behave as variable, however they only live within the function and cannot be accessed outside.
 */
//this function is called sayMyName and it has 1 argument
//does: logs out your name to console
function sayMyName(name){
  console.log(name)
  
}

// sayMyName('Jay')

//Template literals provide an easy way to interpolate variables and expressions into strings
function greeting(name){
  // greet = 'hi '+ name + ', Nice to meet you'
  greet = `hi ${name}, Nice to meet you!`
  // console.log(greet)

}
greeting('Angel Joy')

//function to return sum of two numbers
//return statement stops the executions of a function and returns a value
//return statements makes the function reusable
function sum(a, b){
   //return
   return a + b
}

// num1 = sum(56,2)
// console.log(num1) 


function calculateFoodTotal(meat, tip){
  const tipPercentage = tip / 100
  const tipAmount = meat * tipPercentage
  const total = sum(meat, tipAmount)

  return total


}
// console.log(calculateFoodTotal(300,20))

//ES6 way of writing functions
//Arrow functions
//it can rerun implicitly and doesn't use the return method
//arrow function with explicit return
const sumArrow = (a,b)=>{
  return a + b

}

//arrow function with implicit return
const sumArrow2 = (a,b)=> a + b

// console.log(sumArrow2(10,50))

/**
 * TODO: Write a function that sums two numbers
 * TODO: Write a function that subtracts two numbers
 * TODO: Write a function that  divides 2 numbers
 * TODO: Write a function that multiplies two numbers
 * Console log all the operations
 */

//addition
function add(a,b){
   return a + b

}
num2 = add(78,98)
// console.log(num2)

const add2 =(a, b)=> a + b
// console.log(add2(45,8))

//subtraction
function subtract(a,b){
  return a - b 

}
num3 = subtract(34,9)
// console.log(num3)

const subtract2 = (a,b)=>{
  return a - b
}

// console.log(subtract2(56,9))

//division
function division(a,b){
  return a / b

}
num4 = division(68,4)
// console.log(num4)

const division2=(a,b)=> a/b
// console.log(division2(45,3))


//Multiplication
function multiplication(a,b){
  return a * b 

}
num5 = multiplication(56,90)
// console.log(num5)

const multiplication2 = (a, b)=> {
  return a * b
}

// console.log(multiplication2(23,67))

//Datatypes
/**
 * ARRAYS
 */
const groceries = ['banana','apple','oranges', 'pear']
// console.log(groceries)
//grabbing the 3rd index
// console.log(groceries[3])

//push adds one or more elements to array
groceries.push('cookie','chocolate','melon')
// console.log(groceries)

//slice method returns the portion of the array you want in a new array
//starts from 0 inclusive upto 2
// console.log(groceries.slice(0,2))

//starts from 3 inclusive 3 upto 2
// console.log(groceries.slice(3,7))

//starts from 1 to 3 inclusive of 1
// console.log(groceries.slice(1,4))


//array methods (slice, push,indexOf, length)
// console.log(groceries.indexOf('oranges'))

//Length returns the number of elements in array
// console.log(groceries.length)

// OBJECTS {}
/**
 * Are a type of variabble that have key-value pairs
 */
const person ={
   name : 'Leonardo',
   shirt:'white'
}

//accessing the object: dot notation vs bracket notation

// console.log(person.name)
// console.log(person.shirt)

//bracket notation
// console.log(person['name'])
// console.log(person['shirt'])

//assigning things to an object
person.phone = '0772437010'
// console.log(person.phone)
// console.log(person)

//person 2
const person2 = {
   name: 'Jayson',
   shirt:'Black'

}
// console.log(person2)
// console.log(person2.name)
// console.log(person2['shirt'])

//ES6 arrow function utilizing an object(2 arguments)
//used object and also template literals
/**
 * Methods - property containing a function definition
 * you can store function inside an object
 */
const introducer = (name,shirt)=>{
  const person = {
    name:name,
    shirt:shirt,
    assets:100000,
    liabilities: 50000,
    //networth is a method as it contains a function and it is passed as a function
    networth:function(){
      return this.assets - this.liabilities
    }
  }
  const intro =`Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my networth is $${person.networth()}  USD`
  return intro
}

// console.log(introducer('Jay', 'Yellow'))

// const introducer2=(name , shirt)=> {
//   const person2 = {
//     name:name,
//     shirt: shirt
//   }
//   const intro2 =`Hello my name is ${person2.name} and the color of my shirt is ${person2.shirt}`
//   return intro2
// }

// console.log(introducer('Leonardo', 'white'))


/**For loops */
//run the loop so long as the index is less the length of the elemenst in the array
const fruits = ['banana','mango', 'pineapple','orange']
// for (let i =0; i <fruits.length; i++){
//   // console.log(i,fruits[i])
// }

//easier way of writing for loop
//repeats loop until all elements are done
for (const fruit of fruits){
  // console.log(fruit)
}

const numbers = [1,2,3,4,5,6,7,8,9]

// for (let i=0;i<numbers.length;i++){
//   console.log(numbers[i])

// }


//function that takes in an array of numbers and doubles them and stores then in the result array
const double = (numbers) =>{
    let result = []
    for(const number of numbers){
      result.push(number * 2)
    }
    return result
}
// console.log(double([1,2,3,4,5,6]))

//function that squares by use of expoenential
const square = (numbers) =>{
  let result = []
  for(const number of numbers){
    result.push(number ** 2)
  }
  return result
}

// console.log(square([1,2,3,4,5,6]))
// let result = []

// for (const number of numbers){
//   // console.log(number* 2)
//   result.push(number * 2)
// }

// console.log(result)

//letter counter function
const howManyLetters = (phrase) => {
    //for strings you can just use .length
    
    // return {result: phrase.length}
  
  let result = 0;
  for (const index in phrase) {
    console.log(Number(index) + 1)
    //use of typecasting which is assigning one value of primitive datatype to another type
    result = Number(index) + 1
  }
  //returning result as an object
  return {result :result}
}
  // const phrase = 'Hey, how are you doing today and how do you feel?'
  // const phrase = prompt('write your phrase')
// console.log(howManyLetters(phrase))

//2.26.32

//function to show the maximum number in the array
const max =(numbers) =>{
   let result = numbers[0]
    //loop
    for (const number of numbers){
       if (number > result){
        result = number
       }
    }


   return { result }
}

// console.log(max([1,2,3,4,5,6,1,3,4,2,3,89,785]))

//function to get the min value
const min =(numbers)=>{
  let result = numbers[0]
  //loops and looks for the number that is the least in the array
  for(const number of numbers){
    if(number < result){
      result = number
    }
  }
  return {result}
}

// console.log(min([7,8,9,6,7,]))

//function that sums numbers in array
const sumArray = (numbers)=>{
  let result = 0
  for(const number of numbers){
    result += number
  }
  return { result }
}
// console.log(sumArray([1,2,5,4,2]))

//function to calculate frequency

const letterFrequency = (phrase)=> {
      //return frequency of each letter
      // console.log(phrase)
      //make a frequency object
      let frequency = {}
      
      for(const letter of phrase){
        //check if letter exists in frequency
        if(letter in frequency){
          //if it exists the increment the value by 1
          frequency[letter] += 1
        //otherwise set the value to one
        }else{
          frequency[letter] = 1
        }
      }

      return frequency

}

// console.log(letterFrequency('hahah'))

//incremental operators
// ++, -- , +=,

//function to get word frequency
//('hello hello whatsup') = {'hello':2, 'whatsup':1}
const wordFrequency = (phrase)=>{
  // let frequency = {}
    //logic
    //split function turns the string into an array
  //  words = phrase.split(' ')
  //  console.log(words)
  //  //loop
  //  for(const word of words){
  //   // console.log(word)
  //   if(word in frequency){
  //    frequency[word] +=1 
  //   }else{

  //     frequency[word] = 1
  //   }


  //  }
  // return frequency

  //alternative is using the letterFrequency method which is similar to it
  const words = phrase.split(' ')
  return letterFrequency(words)
}

// console.log(wordFrequency('hello hello wassup yo yo yo'))

//merging objects
const object1 = {
  name:"Alice",
  age:25
};

const object2 = {
  profession:"Engineer",
  country:"USA"
}

const mergedObject = {...object1, ...object2}
// console.log(mergedObject);

//storing in localStorage- stores data with no expiration time
localStorage.setItem('theme', 'dark');
//retrieving data form local storage
let theme = localStorage.getItem('theme')
// console.log(theme);

//removing itme from local storage
localStorage.removeItem('theme')
// console.log(theme);

//Clearing all local storage
localStorage.clear()

//storing data is session storage-dutation of one page session
sessionStorage.setItem('user', 'Jane Doe')

let user = sessionStorage.getItem('user')
console.log(user);

//removing item from sessionStorage
sessionStorage.removeItem('user')

//clearing all session storage
sessionStorage.clear();


// 2:56:36
