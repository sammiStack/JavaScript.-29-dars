"use strict";
const wrapper = document.querySelector(".wrapper");
const btn = wrapper.querySelector("[data-currentBtn='1']");
const a = document.querySelector(".a");

// console.log(document.documentElement);

// console.log(document.childNodes);
// console.log(document.lastdNode);

// console.log(document.body.childNodes);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(a.parentElement);

// console.log(btn.nextElementSibling);
// console.log(btn.nextSibling);

// for (let i of document.body.childNodes) {
//   if (i.nodeName == "#text") {
//     continue;
//   }
//   console.log(i);
// }

const btns = document.querySelectorAll("button");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log("Hii " + index);
  });
});

console.log(btns);
