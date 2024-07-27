type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "helloo";
let b = a as Two; // less specific
let c = a as Three; // more specific

console.log(c);

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

let myNextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string
10 as unknown as string;

// The DOM
const img = document.getElementById("img");
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");
