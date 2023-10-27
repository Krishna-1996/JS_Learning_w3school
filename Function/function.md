<h1>JavaScript FUNCTION Syntax</h1>
<p1>A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses <strong>()</strong>.

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
<strong>(parameter1, parameter2, ...)</strong>

The code to be executed, by the function, is placed inside curly brackets: <strong>{}</strong></p1>

<p1>unction name(parameter1, parameter2, parameter3) {
  // code to be executed
}
</p1>

<ol>
        <li>Function parameters are listed inside the parentheses () in the function definition.</li>
        <li>Function arguments are the values received by the function when it is invoked.</li>
        <li>Inside the function, the arguments (the parameters) behave as local variables.</li>
    </ol>

<h2>Function Invocation</h2>
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
You will learn a lot more about function invocation later in this tutorial.

<h2>Function Return</h2>
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

Example
Calculate the product of two numbers, and return the result:

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

<h2>Why Functions?</h2>
With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.

<h2>The () Operator</h2>
The () operator invokes (calls) the function:

Example
Convert Fahrenheit to Celsius:

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
Accessing a function with incorrect parameters can return an incorrect answer:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();
Accessing a function without () returns the function and not the function result:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;
<h2>Note</h2>
As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.

Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

Example
Instead of using a variable to store the return value of a function:

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";
You will learn a lot more about functions later in this tutorial.

Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.