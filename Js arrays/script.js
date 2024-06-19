//adding and getting to know the length
const fruits = [];
fruits.push("banana","apple", "peach");
console.log(fruits.length)

//adding to a certanindex 
fruits[5] = "mango";
fruits[6] = "orange";
console.log(fruits[6])
console.log(Object.keys(fruits))
console.log(fruits.length)

//array methods 
//ones that deal with empty slots : for each
// const colors = ["blue","red","purple"]
// colors[4]="pink";
// colors.forEach((item,index)=>{
//     console.tolog(`${index}: ${item}`)
// })

//keys()
const colors = ["grey","green","bage"]
colors[5] = "blue"
const iterator = colors.keys();
for (const key of iterator){
    console.log(`${key}: ${colors[key]}`)
}

