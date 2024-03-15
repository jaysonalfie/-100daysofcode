document.getElementById('demo').innerHTML = "hello welcome to today's session"
console.log("Hello Welcome to the Console");

//let, var, const
let x = 10;
//concatenation
let sum =  "hello" + "world";
console.log(sum)

//ES6 javascript
{
    var firstName= "Jay"
}
console.log(firstName)

//const
  /**
   * cant reassign a constant value
   * cant change elements in const array
   * change properties of the object
   */

const pi = 3.142
const cars= ["mazda", "audi", "Mercedes"]

//changes element
cars[1] = "Hyundai"
cars.push("Aston Martin")

const date = new Date()
let color = "blue"
let x1;
x1 = "5"
console.log(typeof(x1));


//booleans
let f = 5;
let g = 5;
let h =10;

console.log(f == h)

/*
function invocation
        when event occures
        when it is called
        automatic
*/
// function name(parameter){
//     //coding something
// }
//claculating product
function productFunction(a, b){
     return a*b
}

let call= productFunction(2,5)
console.log(call)
//getting day from calling a number
function getDay(dayNumber){
    switch(dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wedneday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday"; 
        default:
            return "invalid"   
    }
}
const day= getDay(17);
window.alert(day)

//fizzbuzz
// If the current number (i) is divisible by both 3 and 5, it prints "Fizzbuzz".
// If the current number (i) is divisible by 3, it prints "Fizz".
// If the current number (i) is divisible by 5, it prints "buzz".
// If the current number (i) is not divisible by either 3 or 5, it prints the number itself.
function fizzbuzz(limit){

    for(let i=1; i < limit ;i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("Fizzbuzz")
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("buzz")
        }
        else{
            console.log(i)
        }

    }
}

fizzbuzz(20)