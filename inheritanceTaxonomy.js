// Inheritance / Taxonomy 

// PseudoClassical 

function Car() {
}
 
Car.prototype = {
  this.Wheels: 4,
  this.Engine: true, 
  this.Doors: 4,
  this.Speed: 0,
  this.Accelerate: function(){
  	this.Speed = this.Speed + 10;
  }
  this.Brake: function(){
  	this.Speed = this.Speed - 10;
  }
}

var lamborhgini = new Car();

lamborhgini.prototype = inherit(Car.prototype);

lamborhgini.Doors = 2;
lamborhgini.Accelerate = function (){
	this.Speed = this.Speed + 30; 
};

// OLOO 

var Car = {
  this.Wheels: 4,
  this.Engine: true, 
  this.Doors: 4,
  this.Speed: 0,
  this.Accelerate: function(){
  	this.Speed = this.Speed + 10;
  }
  this.Brake: function(){
  	this.Speed = this.Speed - 10;
  }
};

var lamborhgini = Object.create(Car); 

lamborhgini.Doors = 2;
lamborhgini.Accelerate = function (){
	this.Speed = this.Speed + 30; 
};

// Check for Understanding: 
	// How do objects delegate to other objects?
		// through inheritance patterns like Pseudo-Classical & OLOO 

	// What does Object.create() do?
		// creates a new object with the specified prototype object and properties.

	// What is the .prototype property on functions and objects used for?
		// All objects in JavaScript are descended from Object.
			// All objects inherit methods and properties from Object.prototype.
				// These properties / methods may be overridden. 

	// What does the ‘new’ keyword do?
		// Creates a new object with a different name, which inherits methods and properties
			// through the constructor method .prototype

	// What is prototypal inheritance and how is it different from classical inheritance?
		// prototypes are flexible and mutable, whereas classical inheritance is immutable at runtime 
		// protoype inherted objects can inherit from multiple objects, whereas classes may not support multiple objects
		// within prototypal inheritance, you link an object to another object via .extend, where as you may need 
			// multiple classes to inherite properties and methods within classical inheritance. 




