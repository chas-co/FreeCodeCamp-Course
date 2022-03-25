/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

 */
/*Solution
In order to solve this problem, we need to convert the char to ascii values so we can compare and find the missing char
A for loop is used to iterate through the string. We then compare the ascii value (using str.charCodeAt()) of the next character in the string to the current character + 1. If they are not equal we have a missing character. We the use String.fromCharCode() and the ascii value we have identified as missing to get the char. If there are no missing characters we return undefined.

NB: In the for loop becareful not to overflow the iterator being used to index the string. Since we're checking the current & the next chars in the string we have to loop up to the penultimate char otherwise we will have some overflow issues  */

function fearNotLetter(str) {
  for (let i = 0; i<str.length-1; i++){
    if (str.charCodeAt(i+1) !==str.charCodeAt(i)+1){
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
fearNotLetter("abce")