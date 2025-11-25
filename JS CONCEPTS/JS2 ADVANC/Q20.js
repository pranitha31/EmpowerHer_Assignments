//Question 1: Closure-Based Counter Implementation
function createCounter (){
    let count =0;
    return{
        increment:function(){
            count++;
            console.log("Current count:",count);
        },
        decrement:function(){
            count--;
            console.log("Current count:",count);
        }
    };
}
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

//Question 2: Simulating Private Variables with Closures
function createBankAccount(){
    let balance =0;
    return{
        deposit:function(amount){
            balance +=amount;
            console.log("Deposited:",amount);
        },
        withdraw:function(amount){
            if(amount>balance){
                console.log("Insufficient balence");

            }else{
                balance-=amount;
                console.log("Withdrawn:",amount);
            }
        },
        checkBalance:function(){
            console.log("Current balance:",balance);
        }
    };
}
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined
