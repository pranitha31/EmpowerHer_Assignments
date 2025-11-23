//a) Use spread operator to merge:
arr1 = [1, 2, 3];
arr2 = [...arr1,4, 5];
console.log(arr2);
//b.using destructuring (multi-level).
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;

console.log(name);
console.log(city);
console.log(pin);
