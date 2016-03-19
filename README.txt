This is a mini-guide to review Javascript concepts. You have until the end of today to finish all 5 sections. Each section is broken up into three parts:


1. Read - review a Javascript concept by reading the provided article
2. Do - Look at the code and be able to explain how it is working and/or complete the exercises. Save all your work.
3. Check - Check-in with a fellow and explain your answers to the questions.




1. Javascript Basics 


* Figure out what this code logs and explain why:


var n = 6;
var fn = function(value) {
  value++;
};
fn(n);
console.log(n);


* Figure out what this code logs and explain why:


var a = [6];
var fn = function(array) {
  array[0]++;
};
fn(a);
console.log(a);


* Figure out what this code does and explain why:


var fn = function() {
  console.log('hi');
};
var wow = fn;
fn = undefined;
wow();
fn();




Hoisting + Scope


       Read: http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/
       Do the following problems: 


* Exercise 1: what value is logged? Why?
var foo = 1;


function bar() {
  foo = 2; 
}


bar();
console.log(foo);






*  Exercise 2: what values are logged? Why? 
var foo = 1;


function baz() {
  bar = 2; 
}


console.log(foo);
console.log(bar);




*  Exercise 3: what value is logged? Explain why in relation to hoisting. 
baz();
foo();


function baz() {
  console.log("inside baz");
}


var foo = function() {
  console.log("inside foo");
};


*  Exercise 4: what is the value of baz? Explain why in relation to hoisting. 


var baz = 4;


function baz() {
  console.log("inside bazz");
}


console.log(baz);


* Exercise 5: what is logged inside baz? Why? 


function foo() {
  var x = "bar";
  function baz() {
    console.log(x);
  };
  baz();
}


foo();


* Exercise 6: what is logged inside baz? 


function foo(y) {
  function baz() {
    console.log(y);
  };
  baz();
}


foo(10);


 Check for Understanding: 
*        What are the two types of scope? What type of scope does Javascript have? 
*        What is the difference between local and global scope?
*        What is hoisting?  
*        How are arguments like local variables? How are they different?




This Keyword 
       Read: Chapter 2 of the YDKJS title ‘this & object prototypes’
       Link: https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes%2Fch2.md


       Do: The following problems to test your knowledge of the ‘this’ keyword. 


       Checklist: 


* Look at the following code and explain why it logs “this === window”:


var obj = {
  logIt: function() {
    if (this === obj) {
      console.log('this === obj');
    } else if (this === window) {
      console.log('this === window');    
    } else {
      console.log('this === ???');      
    }
  }
};


var fn = obj.logIt;


fn();




* Look at the following code (similar to above) and without changing obj, refactor what's passed to setTImeout so that, when executed, the code logs “this === obj”:


var obj = {
  logIt: function() {
    if (this === obj) {
      console.log('this === obj');
    } else if (this === window) {
      console.log('this === window');    
    } else {
      console.log('this === ???');      
    }
  }
};


var fn = obj.logIt;


setTimeout(fn, 100);


   Check for Understanding: 
* What does ‘this’ represent?
* What are two common methods we can use to explicitly state what ‘this’ is?
* What is ‘this’ in the global scope?
* What are the four major rules that dictate what ‘this’ represents/identifies?


Encapsulation 


       Read: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch5.md


       Do the following:
       Re-implement the once function from Self-Assessment Week 1. Comment each line of code to describe what 
       it is doing.
     
       Create a bank module that has a private variable for balance. Add helper functions to deposit and withdraw 
       money. Allow users access to the helper functions, but keep the balance variable private.


      Check for Understanding: 
*  What is encapsulation? 
* What is a module?
*  Name two ways we can create modules in Javascript? 
*  What is closure? What makes closures so powerful? 


Inheritance / Taxonomy  


       Read: Chapters 5&6 of YDKJS ‘this & object prototypes’
      https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes%2Fch5.md
       https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes%2Fch6.md


       Do: The following prompts and save your work.


       Checklist: 
* Create a car class using the pseudoclassical instantiation pattern
* Give your car class the following properties:
   * Wheels - set to the value of 4
   * Engine
   * Doors - set to the value of 4
   * Speed - set to the value of 0
   * Accelerate - set to a function that increases speed by 10
   * Brake - set ot a function that decreases speed by 10
* Link the car’s class methods to it’s prototype object so they can later be delegated to by objects inheriting from the car class
* Create a lamborghini class
* Make your lamborghini class inherit the properties and methods from your car class
   * Update the Doors property of your lamborghini class to 2
   * Update the accelerate function to increase the speed by 30 instead of 10
‘OLOO’
* Create the same car/lamborghini relationship using the ‘OLOO’ style of instantiation
   * Using the existing code as a guideline, create two new objects and have one inherit from the other


Check for Understanding: 
* How do objects delegate to other objects?
* What does Object.create() do?
* What is the .prototype property on functions and objects used for?
* What does the ‘new’ keyword do?
* What is prototypal inheritance and how is it different from classical inheritance?