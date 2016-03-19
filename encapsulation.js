// Encapsulation

//Re-implement the once function from Self-Assessment Week 1. Comment each line of code to describe what it is doing.
     
var once = (function(func) {
  // set alreadyCalled var to false as an initial value
    var alreadyCalled = false;
  // declare a global result variable accessible by all subsequent functions
    var result;

    return function() {
      // Check to see whether input function was alreadyCalled
      if (!alreadyCalled) {
        // If NOT alreadyCalled, apply the arguments to function and store resulting value in results
        result = func.apply(this, arguments);
        // Change alreadyCalled to true for future reference
        alreadyCalled = true;
      }
      // return the result
      return result;
    };
  }());


//*****************************************************************************************************************//

//Create a bank module that has a private variable for balance. Add helper functions to deposit and withdraw 
  //money. Allow users access to the helper functions, but keep the balance variable private.

function bank() {
  //privateVariable 
  var balance = 0;
  //helperFunctions
  function deposit(x){
    balance + x;
  }
  function withdraw(x){
    balance - x;
  }
  //publicAPI
  return {
    deposit: deposit,
    withdraw: withdraw
  };
}

// Check for Understanding: 
  //   What is encapsulation? 
    // When you privatize data within a function, and instead give the users
      // a "public API" of methods to implement. 

  //   What is a module?
    // A way through which data encapsulation is achieved. 
      // Consists of private variables (data), immutable 
        // helper functions, and an accessible public API
          // which helps a user access the helpers. 

  //   Name two ways we can create modules in Javascript?
    // 1. Standalone Module (Invoked Multiple Times)
      // which can be invoked any number of times, 
        //each time creating a new module instance.
    // 2. Singleton Module (Invoked Once)
      // immediately invoked IIFE 

  //   What is closure? What makes closures so powerful? 
    // A closure is when an inner function has access to an outer function's variables
      // through the scope chain. 
    // Allows the programmer to easily change the outer function's variables via the inner function
      // makes the code clean & concise. 

