// let , const

// let age = 30;
// age = 31

// console.log(age)

//datatypes: strings, boolean, null, undefined, Symbol
// const name= 'Jay';
// const age  = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;

console.log(typeof z);

//strings
const name = 'Jay'
const age = 31;

//concatenation
console.log('My name is' + name + 'and I am' + age + 'years old')

//template literals
console.log(`my name is ${name} and I am ${age}`)

const helloz = `my name is ${name} and I am ${age}`;
console.log(helloz)

//getting length
const s = 'Hellow My World!'
console.log(s.length)
console.log(s.toUpperCase())

//getting substring
console.log(s.substring(0,6).toLowerCase());

//splitting string into an array
console.log(s.split(''))

const u = 'technology, computer, it, code'
console.log(u.split(', '))

//arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5,6);
console.log(numbers)
const fruits = ['apples','oranges','pears']
fruits[3]= 'grapes'
fruits.push('mangoes')//addin end
fruits.unshift('strawberries')//adding at the beginning
fruits.pop();
//to know its an array
console.log(Array.isArray(fruits))
//to know index
console.log(fruits.indexOf('strawberries'))
console.log(fruits);

/* onject literals*/
const person = {
    firstName:'Jimmy',
    lastName:'Usso',
    age:30,
    hobbies:['eating', 'music listening','movies'],
    address:{
       street:'34 main street', 
       city:'Orlando',
       state:'Florida'
    }
}

console.log(person.firstName, person.lastName, person.hobbies[1], person.address.city);

//pulling things out from an object(derstructuring)
const { firstName, lastName, address:{city}} = person;
console.log(city);

//adding properties
person.email = 'jimmy@gmail.com';
console.log(person.email);

//arrays of objects
const todos = [
    {
      id:1,
      text:'Take out the trash',
      isCompleted: true
    },
    {
        id:2,
        text:'Meeting with Crush',
        isCompleted: true
    },
    {
        id:3,
        text:'Going for bowling',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

//json - no single quotes
//converting to json

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loops
for(let i = 0; i < 10; i++){
console.log(`For loop number:${i}`)
}

//while loops - variable is set outside the loop, takes only the condition
let i= 0;
while(i< 10){
console.log(`while loop number:${i}`);
i++;
}

//looping through arrays
for(let todo of todos){
    console.log(todo.id);
}

/* high order array methods
 doing iterations within arrays
 -take in a function as a parameter
 -callback function takes the variable as  a parameter
*/
//forEach, map,filter

todos.forEach(function(todo){
   console.log(todo.text);
});

//map - returns an array
const todoText = todos.map(function(todo){
 return todo.text;
})

console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;

}).map(function(todo){
    return todo.text
})//functional programming
console.log(todoCompleted);

//conditional statements
//if statements
const t = 4;
const a = 11;
// if(t>10){
// console.log('t is 10')
// } else if(t > 10){
// console.log('t is greater than 10')
// }
// else{
//     console.log('t is less than 10')
// }
if(t>5 || a> 10){
    console.log('t is more than  5 or a is more than 10');

}

//Ternary operator - short hand if statement
//'?'- then  ':' - else
//Assigns varibale based on a condition

const l = 100;
const colour = l > 10 ? 'red' : 'blue'
console.log(colour);

//switches
switch(colour){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue')
        break;


}

//functions
//arrow functions- no use of keyword function, you use a const instead
const addNums = (num1=1, num2=1)=> num1 + num2;
console.log(addNums(5,5));

todos.forEach((todo)=> console.log(todo))

//Object oriented programming
//types: constructor functions with prototypes, ES6 classes
//this-sets properties of the object
//constructor function
// function Person(firstName, lastName, dob){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.dob = new Date(dob);//Date constructor
//    //adding methods with are function to this object
// //    this.getBirthYear = function(){
// //     return this.dob.getFullYear();
// //    }
// //    this.getFullName = function(){
// //     return `${this.firstName} ${this.lastName}`;
// //    }
// }
// //Prototypes
// //can attach methods and properties to the prototypes/
// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear(); 
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`; 
// }



//ES6 - classes were added to js
//same efunctionality but has syntactic sugar
//class
class Person{
    constructor (firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    //methods are added to the prototype
    getBirthYear(){
        return this.dob.getFullYear(); 
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//instantiate an object
const person1 = new Person('Jimmy', 'Usso','4-3-1980');
const person2 = new Person('Jey', 'Usso','4-4-1980');
// console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person2);

console.log(person1.getFullName());






