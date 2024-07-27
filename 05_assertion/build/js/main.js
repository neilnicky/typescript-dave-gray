"use strict";
// convert to more or less specific
let a = "helloo";
let b = a; // less specific
let c = a; // more specific
console.log(c);
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let myNextVal = addOrConcat(2, 2, "concat");
// 10 as string
10;
// The DOM
const img = document.getElementById("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
