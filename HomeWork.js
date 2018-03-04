// References: https://www.w3schools.com/js/js_operators.asp
               http://www.andrespagella.com/getting-even-values-array-without-loops
               https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-1.php
               https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
               https://www.w3schools.com/jsref/jsref_length_array.asp
               https://www.w3schools.com/jsref/jsref_map.asp
               https://www.w3schools.com/jsref/jsref_touppercase.asp
               https://stackoverflow.com/questions/29884654/button-that-refresh-page-on-click




//
// Exercise: write a function that computes a factorial 
// Demo: Factorial.html
//

function factorial(x) 
{ 
  if (x === 0)
// === is equal value and equal type
 {
    return 1;
 }
  return x * factorial(x-1);
// * is multiplication
// If you remember from math class, when you take the factorial of a number, you multiply that number by each number between itself and one. So the factorial of 5 is equal to 5 * 4 * 3 * 2 * 1, or 120.
}
factorial(5);
// Console/terminal will return the result of the factorial - 120



//
// Exercise: With a list of single names, write a function that capitalizes all the names
// Demo: UpperCase.html 
//

var names = ["john", "bob", "tom", "peter"];
// create a variable and assign it the name 'names', within the variable 'names' is an string array that contains four names lowercased.

names.map(function(x){ return x.toUpperCase() })
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// Within the new created array, a functon is created that will assign the contents of the array to 'x' and return the results in all upper case because of the '.toUpperCase' method which converts a strong to uppercase letters. 



//
// Exercise: Write a function that takes a number and returns true if it is even
// Demo: EvenNumber.html 
// Reference: https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/
// Reference: http://cc.davelozinski.com/c-sharp/fastest-way-to-check-if-a-number-is-odd-or-even
//

function isEven(value) {
    if (value%2 == 0)
// The % operator computes the remainder after dividing its first operand by its second.
// === is equal value and equal type.
		return true;
	else
		return false;
}



//
// Exercise: Write a function that takes a list of numbers and returns a list of those numbers--but only the even ones
// Demo: 
// Reference: http://www.andrespagella.com/getting-even-values-array-without-loops
//

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Created a variable named 'a' that contains an array with 1-10 digits. 

var b = [];
// Created a variable named 'b' that is empty, but will hold the even numbers from 'a' array.
 
for (var i = 0; i < a.length; ++i) {
// The for loop contains a variable 'i' which will be used to a counter/step through to check the 'a' array. It will increment '++' once for each loop until the 'a.length' length of the array is complete. 

    if ((a[i] % 2) === 0) {
// All the numbers will be passed along to a 'if' statement to be  checked against a '%' operator which will divide it against '2'. If the result is equal value it be pass alonged. 
        b.push(a[i]);
//  .push method adds new items to the end of an array, and returns the new length.

// items from 'a' array that matched the results of 'i' if statement are pushed into the empty 'b' array. 
    }
} console.log(b);
// Contents of 'b' array to console



//
// Exercise: Write a function that takes a series of food objects, and only returns the ones that have a “healthy” property set to true
// Demo: N/A
// Reference: https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
// Reference: https://jsbin.com/gagurigoro/edit?js,console
// Reference: https://www.w3schools.com/jsref/jsref_filter.asp
// Reference: http://adripofjavascript.com/blog/drips/filtering-arrays-with-array-filter.html
// Reference: https://stackoverflow.com/questions/35908854/could-you-tell-me-what-is-functionel
//

var menuList = [
    { food: "Pizza",  healthy:"yes"},
    { food: "Taco",   healthy:"yes"},
    { food: "Salad",  healthy:"no" },
    { food: "Kale",   healthy:"yes"},
    { food: "Pop",    healthy:"no" },
];

// Created a variable array with objects within it.

var goodFood = menuList.filter(function (element) {
// created a variable that will use the '.filter' method. The filter() method creates an array filled with all array elements that pass a test (provided as a function). The element(el) in the function(el) signifies that the .filter() method will call the callback with at least argument (the array element currently being filtered) and this is the argument that the callback wishes to use.
    return (element.healthy === "yes");
// Returns the results of the element within the array that matches the === 
});
console.log(goodFood);


//
// Exercise: build a web page that has a text input box. The box should have a “display” button that will list ever sentence that was in the text input box as it’s own <p> tag.
// Demo: NewPar.html
// Reference: https://stackoverflow.com/questions/10982913/javascript-how-to-show-each-element-of-array-on-a-new-line
//
//

var sentence  = [];
// Empty array named sentence
var sentenceInput  = document.getElementById("parg");
// variable created to search the html page for the id tag 'parg'

var messageBox  = document.getElementById("display");
// variable created to search the html page for the id tag 'display'

function insert() {
// The function named 'insert' will exec the following cmds below

 sentence.push( sentenceInput.value );
 // Information from the value of sentenceInput is added to the empty array sentence.
  
 clearAndShow();
// The function is called once the information is stored in the array to be displayed on the html page.
}

function clearAndShow () {
messageBox.innerHTML += sentence.join('<p>');
// words are added to the html page and given a <p> to seperate the next added words.
}