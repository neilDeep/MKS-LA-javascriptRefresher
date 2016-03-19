// Javascript Basics 

// #1
var n = 6;
var fn = function(value) {
  value++;
};
fn(n);
console.log(n);

// Explanation: n isn't modified even after fn is called, because n is a global variable outside the scope of fn. 
				// fn treats the number 6 as an immutable value.

// #2
var a = [6];
var fn = function(array) {
  array[0]++;
};
fn(a);
console.log(a);

// Explanation: a changes because fn treats the array as a mutable value. 

// #3
var fn = function() {
  console.log('hi');
};
var wow = fn;
fn = undefined;
wow();
fn();

// Explanation: wow WILL log "hi" because it was assigned to the defined fn, before the line where we redifined fn as 'undefined'. 
