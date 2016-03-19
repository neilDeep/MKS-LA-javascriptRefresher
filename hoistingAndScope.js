// Hoisting + Scope

// Exercise 1: what value is logged? Why?

var foo = 1;
function bar() {
  foo = 2; 
}
bar();
console.log(foo); // 2

// Answer: 2, because bar is overwriting the global variable. 

// Exercise 2: what values are logged? Why? 

var foo = 1;
// var bar; <- declared, but undefined. 

function baz() {
  bar = 2; 
}

console.log(foo); // 1
console.log(bar); // undefined 

// Answer: The engine hoists the bar declaration, 
  // but ONLY the declaration, not the assignment. 

// Exercise 3: what value is logged? Explain why in relation to hoisting. 

// var foo; <- declared, but undefined.

baz(); // "inside baz"
foo(); // undefined 

function baz() { // <- function declaration
  console.log("inside baz");
}

var foo = function() { // <- function expression 
  console.log("inside foo");
};

// Answer: The engine hoists the foo declaration, 
  // but ONLY the declaration, not the assignment. 

// Exercise 4: what is the value of baz? Explain why in relation to hoisting. 

var baz = 4; // This is the variable assignment 
                // that overrides the function declaration

function baz() {
  console.log("inside bazz");
}

console.log(baz); // 4

// Answer: The variable assignment overrides the function declaration​.

// Exercise 5: what is logged inside baz? Why? 

function foo() {
  var x = "bar";
  function baz() {
    console.log(x);
  };
  baz();
}

foo(); // bar

// Answer: Because baz() can access variables in outer scopes. 
  // But Outer Functions can NOT access variables within inner scopes. 

// Exercise 6: what is logged inside baz? 

// var y;

function foo(y) {
  function baz() {
    console.log(y);
  }
  baz();
}

foo(10); // 10

// Answer: The engine hoists the y declaration to the global scope. 
  // baz can access 10 from foo OR Global Scope. 

// Check for Understanding: 
       // What are the two types of scope? What type of scope does Javascript have? 
       	// block-scope & function-scope. JavaScript has function scope. 

       // What is the difference between local and global scope?
       	// global scope is within the entire window and can be accessed by all functions within
       	// local scope is enclosed within a function, and not accessible by other functions. 

       // What is hoisting? 
       	// When the engine moves all variable declarations to the top, but doesnt define them (hoist the assigments). 

       // How are arguments like local variables? How are they different?
       	// Arguments & local variables occupy the same scope; However arguments can be modified by the user, whereas the local variables are immutable. 

