//Document object model (DOM)
//selecting things from the DOM
//window object - parent object of the browser
// console.log(window)
// alert(1)

//single element selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));

//multiple element selectors
//querySelector you can put an id, tag, class
console.log(document.querySelectorAll(".item")); //gives the node list
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('li'));

const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item));

//manipulating things in the DOM
const ul = document.querySelector(".items");

// ul.remove()
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// //adding HTML dynamically
// ul.lastElementChild.innerHTML= '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

//Events
const btn = document.querySelector(".btn");
//event listerner takes in  the event we want and function to be run when the event happens
//event takes in event parameter
//event - click,mouseover, mouseout
btn.addEventListener("mouseout", (e) => {
  //stopping default behavior of button
  //target gives the actual element
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});

//creating a form script
//adding a user and as a list item
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

//listening to submit event
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  //form validation- both fields to be filled
  // console.log(nameInput.value);
  if (nameInput.value === "" || emailInput.value === "") {
    //using msg variable
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
    return;
  } else {
    //adding to list
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    //then append li to ul
    userList.appendChild(li);

    //clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
