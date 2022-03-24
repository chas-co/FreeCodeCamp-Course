/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

/*Solution 
1.Put space between joint words using replace
2. convert the entire string to lower case
3.split using non-alphanumeric characters or underscore
4. join the string using the hyphen  */
function spinalCase(str) {
  return str
  .replace(/([a-z])([A-Z])/g,"$1 $2")
  .toLowerCase()
  .split(/\W|_/)
  .join("-")
  ;
}
console.log(spinalCase('thisIsSpinalTap'))
spinalCase('thisIsSpinalTap');

console.log(spinalCase('The_Andy_Griffith_Show'))
spinalCase('This Is Spinal Tap');

console.log(spinalCase('AllThe-small Things'))
spinalCase('AllThe-small Things');