console.log("Hello");

// Code Inject
document.write("Hello 2");
document.write("<h1> JAVASCRIPT</h1>");

//Alert
// alert ("Welocme")

const number = 10.6;

const string = "Hi";

const bool = true;

const object = { name: "Bandara", age: 10 };

const array = [{ name: "Bandara", age: 10 }, 23, true, "Amal"];

const a = 5;
const b = 6;
const muti = a * b;
console.log(muti);

//Comparisson
let p = 2;
let q = "2";
console.log(p == q);
console.log(p === q);
console.log(p != q); //value
console.log(p !== q); //value and type

//Logical
let x = true;
let y = false;
console.log(x && y);
console.log(x || y);
console.log(!x);

//Function
function myFunc() {
  console.log("Hello April");
}
myFunc();

//Arrow Function
const myArrow = () => {
  console.log("Hello April");
};
myArrow();

const myArrow2 = (name) => {
  console.log("Name is :" + name);
};
myArrow2(" Bandara");

//Return function

function returnFunc(num1, num2) {
  const sum = num1 + num2;

  console.log(sum);
  return sum;
}
returnFunc(4, 5);

///////////////////////////////////////////////
function returnFunc2(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const num = returnFunc2(43, 5);
console.log(num);

const student = (name, age, address, dob) => {
  console.log("Name : " + name);
  console.log("age :" + age);
  console.log("Address :" + address);
  console.log("DoB :" + dob);
};
student("Amal", 23, "Bandarawela", "2003 April");

/////////////////////////////////////////////

//Conditions

if (true) {
  console.log("correct");
}
const s = 200;
const t = 400;
if (s > t) {
  if (s > 100) {
    console.log("correct");
  }
} else if (s == t) {
  console.log("Numbers are Equal");
} else {
  console.log("Incorrect");
}

//Switch Case
const val = "Day";
switch (val) {
  case "Day1":
    console.log("Try again");
    break;
  case "Day":
    console.log("Done"); //value match
    break;
  default:
    console.log("Error");

    break;
}

const studentMarks = (marks) => {
  let result = "";
  if (marks >= 75) {
    result = "A";
  } else if (marks >= 65) {
    result = "B";
  } else if (marks >= 55) {
    result = "C";
  } else if (marks >= 35) {
    result = "S";
  } else {
    result = "W";
  }
  return result;
};
const r = studentMarks(55);
console.log(r);

//For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
const arr = [12, 25, 76, 77];
for (let i = 0; i < arr.length; i++) {
  console.log("Student " + (i + 1) + " " + studentMarks(arr[i]));
}

//While
let numb = 0;
while (numb < 10) {
  console.log("hi");
  numb++;
}
//Do While
let l = 0;
do {
  console.log("true");
  l++;
} while (l < 10);
