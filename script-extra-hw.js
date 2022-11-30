// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

console.log("\n------------------------EXERCISE 1-----------------------------\n")

let array1 = [1, 3, 5, 7, 9];
let array2 = [];

for (i = 0, j = (array1.length - 1) ; i < array1.length; i++, j--) {
    array2[i] = array1[j]
}
console.log(array2);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("\n------------------------EXERCISE 2-----------------------------\n")

let array3 = [567, 21, 34 , 90, 128, 86, 47, 214];
let maxNumericalValue = array3[0];

for (i = 0 ; i < array3.length ; i++) {
    if (maxNumericalValue < array3[i]) {
        maxNumericalValue = array3[i]
    }
}

console.log("Largest value in the array is", maxNumericalValue);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("\n------------------------EXERCISE 3-----------------------------\n")

let minNumericalValue = array3[0];

for (let i = 0; i < array3.length; i++) {
    if(minNumericalValue > array3[i]) {
        minNumericalValue = array3[i] 
    }
}

console.log("Smallest value in the array is", minNumericalValue);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("\n------------------------EXERCISE 4-----------------------------\n")

let evenNumbers = [];
for (i = 0; i < array3.length; i++) {
    if (array3[i] % 2 === 0) {
        evenNumbers.push(array3[i]);
    }
}
console.log("Even numbers in array 3 are:", evenNumbers);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("\n------------------------EXERCISE 5-----------------------------\n")

let array4 = [567, 21, 34 , 90, 128, 86, 47, 214];
for (i = 0; i < array4.length; i++) {
    if ((array4[i] % 2) === 0) {
        array4.splice(i, 1);
        i--; //i decremented to check the same index after deleting the even number from the array
    }
}
console.log("Array 4 without even numbers:", array4);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

console.log("\n------------------------EXERCISE 6-----------------------------\n")

let string = "Hello, my name is Muhammed Yasir. I'm a university student."
console.log("Original string: ", string, "\n");

string = string.replace(/[aeiou]/gi, "");
console.log("The string without vowels: ", string);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

console.log("\n------------------------EXERCISE 7-----------------------------\n")

let array5 = [567, 21, 34 , 90, 128, 86, 47, 214];
let incrementedArray = [];

for(i = 0; i < array5.length; i++) {
    incrementedArray[i] = (array5[i] + 1);
}
console.log("The incremented array:", incrementedArray);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log("\n------------------------EXERCISE 8-----------------------------\n")

let array6 = ["Muhammed", "Yasir", "Ozdemir"];
let arrayLengthOfStrings = [];

for (i= 0; i < array6.length; i++) {
   arrayLengthOfStrings[i] = (array6[i].length);
}

console.log("The lengths of strings in array 6 are", arrayLengthOfStrings)
