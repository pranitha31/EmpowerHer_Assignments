//a.display true or false if it is even
const isEven = (n) => n % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false

//b. using a ternary operator
const res=marks=>marks>35 ? "pass":"fail";
console.log(res(31));
console.log(res(50));

//c. using a ternary operator
const greet = (name) => `Hello, ${name ? name : "Guest"}`;
console.log(greet("Alice")); 
console.log(greet());        
