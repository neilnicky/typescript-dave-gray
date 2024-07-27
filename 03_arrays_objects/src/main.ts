// Arrays
let stringArr = ["one", "hey", "Nicks"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hello");

guitars[0] = 1999;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Nicky", 2002, true];

let mixed = ["Jacky", 1, false];

myTuple[1] = 44;

//
//
// Objects

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Neilu",
  prop2: "true",
};
exampleObj.prop1 = "Kuttu";

// types | interfac
interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  // name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: false,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name}!`;
  }
  return "Hello!";
};

console.log(greetGuitarist(evh));

//
// Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.D);
