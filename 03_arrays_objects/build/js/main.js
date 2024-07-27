"use strict";
// Arrays
let stringArr = ["one", "hey", "Nicks"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hello");
guitars[0] = 1999;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Nicky", 2002, true];
let mixed = ["Jacky", 1, false];
myTuple[1] = 44;
//
//
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Neilu",
    prop2: "true",
};
exampleObj.prop1 = "Kuttu";
let evh = {
    // name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: false,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(evh));
//
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D);
