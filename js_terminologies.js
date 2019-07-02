// Function Declaration
function testFunction(){
    if(a === 100 && b === 50){
        return a+b;
    }
};

// Function Expression 
var myFunction = function testFunction(a, b){
    if (a === 100 && b === 50){
        return a*b;
    }
};

// Expressions: always end with a semicolon
1+2;
alert();
prompt();
function myFunction(a, b);

// To assign a variable
var a = 100;

// Function VS Method
function thisIsAFunction(){
};

var obj = {
    thisIsAMethod: function myFunction(){

    }
};

// To access a function, we call or invoke it
thisIsAFunction();
// To access a method 
obj.thisIsAMethod();