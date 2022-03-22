/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. 
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].*/

/*Solution
1.Take advantage of the js argument object which is an object containing all the arguments passed to a function
2. Two loops will be needed. The outer loop looping through all the arguments, and an inner looping through each element of each array argument.
3. In the inner loop check if the the current element has is contained in the array collecting the elements. If it is not contained in the array we add it to the array. Otherwise we move on to checking the next element till we finish. */
function uniteUnique(arr) {
  let array=[]
for(let i =0; i<arguments.length; i++){
  for (let j=0; j<arguments[i].length;j++){
    array.indexOf(arguments[i][j])<0?array.push(arguments[i][j]): false;
  }
}
console.log(array)
return array;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);