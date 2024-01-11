# Synchronous
- synchronous processing is done sequentially and in a specific order.

# Arrow Functions
- the arrow function is one of the features introduced in the ES6 version of javscript. it allows you to create functions in a cleanner way compared to regular functions. Here are same of the valid syntax for arrow function : 

- () => {}

const arrowFun = () => {
      console.log("Hello Ak")
}

arrowFun();

const squre = (num) => num*num ;

console.log(squre);

# Callback Functions

- A callback is a function passed as an argument to another function 


const calculate = (a,b, operation) => {
      return operation(a,b);
}

const result = calculate(2,3,function(num1, num2){
      return num1 + num2;
})

console.log("result  : " + result);