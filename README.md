# Digital-Calculator
This is a digital four-function calculator capable of computing both integers and non-integers. It can add, subtract, multiply, and divide. It has a clear button to clear the display reset the calculator to its default state. The result of one mathematical expression can be used again in a second mathematical expression, allowing for chaining of operations. 

## Features
- Addition, subtraction, division, and multiplication
- Enter decimal point for floats
- Results can be both integers and non-integers
- To prevent overflow, decimals are truncated and rounded to six digits
- A "Clear" button to reset the calculator

## Implementation Process
The process started off with creating the calculator UI and organizing the buttons to resemble a real-life calculator using HTML and CSS, making use of Flexbox to do so. Then, I created the functions for performing the math given two numbers and one of the four pre-defined operators of addition, subtraction, division, and multiplication.

The most difficult aspect of the project and where I ran into obstacles the most is the logic involved in inputting numbers and displaying them. I had to make sure users can't input decimal points more than once since numbers only have one decimal point maximum. I also had to ensure that when users got the result of their expression, they can use that result for a second math expression right away, instead of resetting the calculator. For example, pressing "5" then "+" then "5" will show "10" on the display. The user can then enter "-" then "4" to find the result of "10-4", and the calculator should show "6" on the display. Also, I had to be careful about the "=" button. I had to make sure that if users pressed it without previously inputting a complete math expression, that it won't do anything.
