'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first 
element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the 
call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
//eslint-disable-line
//This section of the code is working now.
function sum(a, b) { 
  var resultSum = a + b;
  var resultString = 'The sum of ' + a + ' and ' + b + ' is ' + resultSum + '.';
  return ([resultSum, resultString]);
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
//eslint-disable-line
//Question 2 is working
function multiply(a, b) {
  var resultProduct = a * b;
  var resultString = 'The product of ' + a + ' and ' + b + ' is ' + resultProduct + '.';
  return ([resultProduct, resultString]);
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/*Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments 
and returns an array where the first element is the sum of those three numbers, the second 
element is the product of those three numbers,  and the third and fourth elements are strings 
that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do 
addition, use your sum() function, and to do multiplication, use your multiply() function that 
you've already created. You're going to have to be resourceful to figure out how to do this. 
However, you may continue to use the + operator for string concatenation.


Test this function by hand in the console to get it working, and when you think it is 
finished, uncomment the call for the testSumAndMultiply() function and see if the test 
passes.*/

// Write your code here
//eslint-disable-line
function sumAndMultiply(a, b, c) {
  var sum_of_first_two = sum(a, b)[0];
  var sum_of_three = sum(sum_of_first_two, c)[0];
  var result_sum_str = (a + ' and ' + b + ' and ' + c + ' sum to ' + sum_of_three + '.');
  
  var product_of_first_two = multiply(a, b)[0];
  var product_of_three = multiply(product_of_first_two, c)[0];
  var result_product_str = ("The product of " + a + ' and ' + b + ' and ' + c + ' is ' + product_of_three + '.'); 

  return ([sum_of_three, product_of_three, result_sum_str, result_product_str]);
}


// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
//Problem 4
//Write a function called sumArray() that takes in an array of numbers as its single argument 
//and then returns an array where the first element is the sum of the numbers in the array, and 
//the second element is a string that EXACTLY follows this example and uses the values that were 
//input into the function:


/*"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

/*var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) */

// Write your code here
// NOTE: This is very confusing, because the function name and variable names that are
// passed out of the function are the same. In the future it might be a good idea to 
// make a change so the coe is easier to modify.


// Write your code here



function sumArray(sumArr) {
  var sumLeftWithText = sum(sumArr[0], sumArr[1]);
  var sumTotalWithText = sum(sumLeftWithText[0], sumArr[2]);
  var totalSum = sumTotalWithText[0];
  return([totalSum, sumArr[0] + ',' + sumArr[1] + ',' + sumArr[2] + ' was passed in as an array of numbers, and 9 is their sum.']);
}

// Here is the test for sumArray(); uncomment it to run it
var testArr = [2, 3, 4];
testSumArray(testArr);


/*Nicholas
function sumArr(array_of_nums) { // changing vars for clarity
  var x = 0;
  for (var i = 0; i < array_of_nums.length; i++) {
    x = x + array_of_nums[i];
  }
  return x;
 }
 
 function makeMessage(any_number) { //functions take in named parameters, not function calls.
  return ('' + testArray[0] + ', ' + testArray[1] + ', ' + testArray[2] + ' was passed in as an array of numbers, and ' + any_number + ' is their sum.');
 }
 
 var testArray = [2,3,4];
 makeMessage(sumArr(testArray));

*/

// Here is the test for sumArray(); uncomment it to run it

//testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

/*// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
*/

function multiplyArray(multArr) {
  var multiplyLeftWithText = multiply(multArr[0], multArr[1]);
  var multiplyTotalWithText = multiply(multiplyLeftWithText[0], multArr[2]);
  var totalMultiply = multiplyTotalWithText[0];
  return([totalMultiply, 'The numbers ' + multArr[0] + ',' + multArr[1] + ',' + multArr[2] + ' have a product of 24.']);
}

var testArray = [2, 3, 4];

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

/*// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}*/

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
