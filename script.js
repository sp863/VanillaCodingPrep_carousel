"use strict";

const num = Math.floor(Math.random() * 10);

const arr = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < 10; i++) {
  arr.push(i);
}

const generateHex = function () {
  let code = "";
  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(Math.random() * arr.length);
    code += arr[idx];
  }
  document.querySelector(".title").textContent = `HEX COLOR : #${code}`;
  document.body.style.backgroundColor = `#${code}`;
};

document.querySelector(".btn").addEventListener("click", generateHex);
