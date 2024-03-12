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

*/




