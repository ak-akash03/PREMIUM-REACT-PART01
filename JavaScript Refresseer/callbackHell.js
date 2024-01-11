// *********** callback hell ****************

// synchronous code -------------------------------

// console.log("Hello");
// console.log("Akash");
// console.log("Rathod");

// Asynchronous code ------------------------------
// console.log("Hello");
// setTimeout(() => {
//       console.log("Rathod");
// }, 1000);
// console.log("Akash");


const cheese = '❤️' ;
function getCheese(callback) {
      setTimeout(() => {
            console.log("Here Is Cheese : ", cheese);
            callback(cheese);
      }, 2000);
}

// console.log(getCheese());
// getCheese();

getCheese((cheese) => {
      console.log("got the cheese : ", cheese);
})




