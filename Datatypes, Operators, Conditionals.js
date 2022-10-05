/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
let defString =
  "String: Contains one or more characters that the console is going to display as a whole";
let defNumber = "Number: Contains only numerical characters";
let defBoolean = "Boolean: Only have to possible outcomes, True or False";
let defNull = "Null: It is a container that it is empty";
let defUndefined =
  "Undefined: It is a container that has no content because it has not been defined yet";
console.log(
  "The main datatypes are:",
  "\n  ",
  defString,
  "\n  ",
  defNumber,
  "\n  ",
  defBoolean,
  "\n  ",
  defNull,
  "\n  ",
  defUndefined,
  "\nNot sure if a child would understand my '12 years old' definitions"
);

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/
let variable =
  "In JS I would define it as a container of containers and we should use always the word 'let' to declare it";
console.log("Variable:", variable);

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let a = 12;
let b = 20;
console.log("The result is ", a + b);
console.log("The result is ", 12 + 20);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log("The result is ", 12 - x);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
console.log("Are name1 and name2 the same? ", name1 === name2);
console.log(
  "Are name1 and name2 the same if they would be lower case? ",
  name1.toLowerCase() === name2.toLowerCase()
);
/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let x = 8;
if (x === 8) {
  console.log("eight");
}

// WIP: Finish after debrief

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
