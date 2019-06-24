var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// To remove Banana from the array
array.shift();

// To sort the array in order
array.sort();

// To add kiwi to the end of the array
array.push("Kiwi");

// To remove apples from array 
array.shift([0]);

//  To sort the array in reverse order
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// To access oranges in array2
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
var innerArray = array2[1];
var innermostArray = innerArray[1];
innermostArray[0];