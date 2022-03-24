/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&apos;"
*/
/*Solution 
Using a regex, the replace function for string and switch case we find our target characters and then return the appropriate HTmL entity using the switch case function  */
function convertHTML(str) {

 return  str.replace(/([&<>\"'])/g, function(match){
    switch(match){
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&apos;";
    }
  } )
  return str;
}
console.log(convertHTML("Dolce & Gabbana"))
convertHTML("Dolce & Gabbana");