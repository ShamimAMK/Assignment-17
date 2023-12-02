"use strong";
// // Topics DOM
// // select by ID
// const myHeading = document.getElementById("heading");
// // console.log(myHeading);

// //select by class name
// const myPara1 = document.getElementsByClassName("para1");
// const myPara2 = document.getElementsByClassName("para2");
// // console.log(myPara2);

// //select by tag name
// const myHeading2 = document.getElementsByTagName("h1");
// // console.log(myHeading2);

// //query selector
// // two types of query selector (1. query selector all & Query selector)

// const myDiv = document.querySelector("div");
// const myHeading3 = document.querySelector("#h1");
// const myPara1 = document.querySelectorAll(".para1");
// const myPara2 = document.querySelectorAll(".para2");
// const myPara2 = document.querySelector(".para2");
// console.log(myPara2);

//manipulate style

// const heading = document.querySelector("#heading");
// heading.style.color = "red";
// heading.style.backgroundColor = "black";
// document.body.style.backgroundColor = "pink";

// const h1 = document.querySelector(".my_title");
// const countryName = "Canada";
// // h1.textContent="Hello World";
// h1.textContent = `Hello ${countryName}!`;

// create element and append

// const container = document.querySelector(".container");

// // create a paragraph el

// const newPara = document.createElement("p");
// newPara.textContent = "Hello I am your new paragraph.";
// newPara.style.fontSize = "32px";
// container.appendChild(newPara);

// //inter activities (event handling)
// const myButton = document.querySelector(".my_button");

// // myButton.addEventListener("click", function () {});
// // console.log("button clicked");

// myButton.addEventListener("click", buttonClick);

// function buttonClick() {
//   console.log("button clicked");
// }

// // event type, and callback function.
// //addEventListener is higher order function or first class function.

// const myButton = document.querySelector(".my_button");

// myButton.addEventListener("click", buttonClick);

// function buttonClick() {
//   document.title = "My new title!";
//   document.body.style.backgroundColor = "red";
//   myButton.textContent = "I'm clicked";
// }

// creating a modal
// target open button
const btnOpen = document.querySelector(".open_modal");
const btnClose = document.querySelector(".close_modal");
const modal = document.querySelector(".modal");

// const modalOpen = () => {
//   modal.style.display = "flex";
// };

// const modalClose = () => {
//   modal.style.display = "none";
// };
const modalOpen = () => {
  // modal.classList.remove("hidden");
  modal.classList.toggle("hidden");
};

const modalClose = () => {
  // modal.classList.add("hidden");
  modal.classList.toggle("hidden");
};
//add event listener
btnOpen.addEventListener("click", modalOpen);
btnClose.addEventListener("click", modalClose);
