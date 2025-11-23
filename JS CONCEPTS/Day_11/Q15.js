// using template literals.//
const username = 'Alice';
const course ='ML';
const message = (`Hello ${username},Welcome to ${course}course`);
console.log(message);
// shorthand syntax://
const name = "Sam";
const age = 21;
const student = {
  greet: function () {
    console.log("Hello");
  }
};
student.greet();
//arrow function shorthand 
const getFullName=(first, last)=>(`${first},${last}`)
console.log(getFullName("chikkel","Pranitha"));
