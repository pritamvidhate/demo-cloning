//Copying a Value type
// let value = 3;
// let valueCopy = value;

// console.log(valueCopy);

// change value
// valueCopy = 100;
// console.log(valueCopy);

// console.log(value);

// original array does not affected even after changing copyArray value
// ----------------------------------------------------------------------

// Copying a Reference type

// let array = [1, 2, 3, 4];
// let arrayCopy = array;

// console.log(arrayCopy);          o/p:- 1,2,3,4

// // change 1st element of array
// arrayCopy[0] = 'dog';
// console.log(arrayCopy);          o/p:- 'dog',2,3,4

// console.log(array);              o/p:- 'dog',2,3,4   original array is affected
// ----------------------------------------------------------------------------------------------
// solution is a spread operator to avoid the affected original array

// var array = [1, 2, 3];
// var arrayCopy = [...array];

// console.log(arrayCopy);

// // change the first element of array
// arrayCopy[0] = 'cat';
// console.log(arrayCopy);

// // printing the original array
// console.log(array);

// using spread operator for not changing the original array, I am only creating a shallow copy
// -----------------------------------------------------------------------
// but it does not work on multidimensional or nested array then the solution is to do a deep clone(deep copy)

// let nestedArray = [1, [2, 3], 4];
// let arrayCopy = JSON.parse(JSON.stringify(nestedArray));

// console.log(arrayCopy);

// // changing the nested array
// arrayCopy[0] = 'owl';
// arrayCopy[1][0] = 'dog';
// console.log(arrayCopy);

// console.log(nestedArray);

// --------------------------------------------------------------------------------------------------

// Deep clone (deep copy) by usin JSON.parse(JSON.stringify) methods

// let array = [1, [2, 3], 4, 5];
// let arrayCopy = JSON.parse(JSON.stringify(array));

// console.log(arrayCopy);

// arrayCopy[0] = 'dog';
// arrayCopy[1][0] = 'cat';

// console.log(arrayCopy);
// console.log(array);
