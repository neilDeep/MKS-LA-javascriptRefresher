// This Keyword 

// Look at the following code and explain why it logs “this === window”:

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

// Explanation: 'this' refers to the window because fn's call-site is within
  // the global window scope. 

// Look at the following code (similar to above) and without changing obj, 
// refactor what's passed to setTImeout so that, when executed, the code logs “this === obj”:

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

setTimeout(fn.bind(obj), 100); // Goal: “this === obj”

// Check for Understanding: 
  // What does ‘this’ represent?
    // 'this' points to the object that will implement the properties/methods. 

  // What are two common methods we can use to explicitly state what ‘this’ is?
    // when you call an object on the function. i.e. foo.call(obj) 
    // hard binding: when you call an object on a function 
      // within a separate function, thereby forcibly binding "this" to obj
      // and preventing future overriding. 

  // What is ‘this’ in the global scope?
    // the window object. 

  // What are the four major rules that dictate what ‘this’ represents/identifies?
    // Called with new? Use the newly constructed object. (new)
    // Called with call or apply (or bind)? Use the specified object. (explicit)
    // Called with a context object owning the call? Use that context object. (implicit)
    // Default: undefined in strict mode, global object otherwise. (window)

