/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
/*Solution
1. Define a regex First letter not vowel and can be more than one
2. Test the regex against the string. 
3. if regex matches the string collect the matching consonants and apply pig latin logic for consonants
4. Other the first letter is a vowel. Apply the pig latin vowel logic */
function translatePigLatin(str) {
  let pigLatinRegex = /^[^aeiou]+/;
  
  if (pigLatinRegex.test(str)){
    let consonants = str.match(pigLatinRegex)[0];
    return str.slice(consonants.length)+consonants+"ay";
  }
  else 
    return str+"way";
}
console.log(translatePigLatin("eight"))
console.log(translatePigLatin("consonant"))
translatePigLatin("consonant");