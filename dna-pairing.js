/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array*/

/*Solution
1. Split the string into an array
3. Create an empty array to collect your paired strands after processing.
3. Use the map and switch to check the value of each element in the new array and add its corresponding pair.
3. split the new pair and push it into the pairedStrands araay  */
function pairElement(str) {
  let singles = str.split("");
  let pairedStrands = []
  console.log(singles)
 str = singles.map((element)=>{
    switch(element){
      case "G":
      element +="C";
      break;
      case "C":
      element+= "G";
      break;
      case "A":
      element +="T"
      break;
      case "T":
      element +="A";
      break;
    }
    pairedStrands.push(element.split(""))
    
  })
  console.log(pairedStrands)
  return pairedStrands;
}

pairElement("ATTCGA");