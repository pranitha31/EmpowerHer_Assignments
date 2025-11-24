
// 1. Template Literals + Expressions
// ----------------------------------------
console.log(`5 + 7 = ${5 + 7}`); // a

console.log(`Line 1
Line 2
Line 3`); // b

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`); // c

// ----------------------------------------
// 2. Arrow Functions & this
// ----------------------------------------
const square = (n) => n * n; // a
console.log(square(5));

// b — Explanation: Arrow functions don't have their own 'this', so it logs undefined
const obj1 = {
  value: 50,
  test: () => console.log(this.value),
};
obj1.test();

// c — Fix using normal function
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  },
};
obj2.test();


// 3. Rest, Spread & Copying Objects

const product = { name: "Pen", price: 10 };
const copyProduct = { ...product }; // a
console.log(copyProduct);

const a1 = { x: 1 };
const b1 = { y: 2 };
const merged = { ...a1, ...b1 }; // b
console.log(merged);

function maxValue(...nums) { // c
  return Math.max(...nums);
}
console.log(maxValue(3, 5, 9, 2));

// ----------------------------------------
// 4. Destructuring & Optional Chaining
// ----------------------------------------
const arr = [10, 20, 30];
const [a, b] = arr; // a
console.log(a, b);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop; // b
console.log(brand);

const info = {}; // c
console.log(info.details?.name);

// ----------------------------------------
// 5. Scoping (let/var/const)
// ----------------------------------------
for (var i = 0; i < 3; i++) {}
console.log(i); // a => 3 (var is function-scoped)

for (let j = 0; j < 3; j++) {}
// console.log(j); // b => ReferenceError (let is block-scoped)

// 6. Ternary Operator – Practice

let speed;
speed = kmph > 60 ? "Fast" : "Normal"; // a

const result = age >= 18 ? "Adult" : "Minor"; // b

const check = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative"; // c

// ----------------------------------------
// 7. Spread, Rest & Arrays
// ----------------------------------------
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5]; // a
console.log(newNums);

a = ["x", "y"];
b = ["z"];
const combined = [...a, ...b]; // b
console.log(combined);

function printNames(...names) { // c
  return names;
}
console.log(printNames("A", "B", "C"));

// ----------------------------------------
// 8. Object Destructuring & Shorthand
// ----------------------------------------
const user = { id: 101, status: "active" };
const { id, status } = user; // a
console.log(id, status);

const uid = 101;
const role = "admin";
const user2 = { uid, role }; // b (shorthand)
console.log(user2);

const name = "Sam";
const age2 = 25;
const person = {
  name,
  age2,
  greet() {
    console.log(`Hello, ${name}`);
  },
};
person.greet(); // c

// 9. Template Literals (More Practice)
// ----------------------------------------
console.log(`Today's Date: ${new Date().toDateString()}`); // a

const NAME = "John";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`); // b


// 10. Arrow Function Shorthands
// ----------------------------------------
const add = (x, y) => x + y; // a
console.log(add(3, 4));

const isAdult = (age) => age >= 18; // b
console.log(isAdult(20));

const double = (n) => n * 2; // c
console.log(double(9));

// 11. Spread Operator (Arrays & Objects)
// ----------------------------------------
const arr1 = [10, 20, 30];
const cloneArr = [...arr1]; // a
console.log(cloneArr);

const newArr = [100, ...arr1]; // b
console.log(newArr);

const objA = { name: "Laptop", price: 30000 };
const objB = { price: 25000, brand: "HP" };
const finalObj = { ...objA, ...objB }; // c
console.log(finalObj);

// 12. Optional Chaining (More Practice)
// ----------------------------------------
const userX = {
  name: "Alex",
  address: {
    city: "Bangalore",
  },
};
console.log(userX.address?.city); // a

console.log(userX.job?.title); // b — undefined

const data = null;
console.log(data?.value); // c — prevents runtime error


