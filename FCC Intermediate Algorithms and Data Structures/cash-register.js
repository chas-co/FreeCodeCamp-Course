/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

//currency object containing all the denominations
const currency={
  "ONE HUNDRED": 100*100,
  "TWENTY":20*100,
  "TEN":10*100,
  "FIVE":5*100,
  "ONE": 1*100,
  "QUARTER": 0.25*100,
  "DIME":0.10*100,
  "NICKEL":0.05*100,
  "PENNY": 0.01*100
};
function checkCashRegister(price, cash, cid) {
  
 // Pre-processing of the arguments passed to the function before applying cash register logic
 // We multiply all the values by hundred to avoid errors that occur in js with handling floating point numbers
 //--------------------------------------------------------------------------------------------------------------------
  // convert the cid 2D array to an object
  let cidObj = {};
  cid.map(item => cidObj[item[0]]=item[1]*100);
  
  // Collect the various denominations into an array
  let denominations = Object.keys(currency);
  
  // calculate the amount of money in the cash register
  let cidValue = cid.reduce((a,b)=> a+b[1],0)*100;
 
  //calculate the amount of money due as change
  let changeDue = (cash-price)*100;
 
  // declare an array to store the denominations to be issued as change
   let change =[];
  
  
  // Cash register logic
  //----------------------------------------------------------------------------------------------------------------------------
  
  //if cash-in-drawer is less than the change due,
  if (changeDue > cidValue){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
 
  //if cash in drawere is equal to the change due.
  else if (changeDue === cidValue){
   return {status: "CLOSED", change: cid };
  }
  //If change can be given to customer. the change due in coins and bills, sorted in highest to lowest order
  else {
    
    //loop through each denomination
    denominations.forEach((denom)=>{
      //check if we have the denomination present in the register
        if(cidObj[denom]> 0){
          
          let amount =0;
          
          //check how many notes of the denomination are present in the register
          let temp1 = Math.round(cidObj[denom]/currency[denom]);
          
          //check how many notes of the denomination can be issued as change.
          let temp = Math.floor(changeDue/currency[denom]);
          
          // do we have more notes than we need to issue out? Yes:issue out only what we need to issue out No: Issue out all that we have
          temp<=temp1? amount = temp * currency[denom]: amount = temp1*currency[denom] ;
          
          // subtract the value of the notes issued out from the change due
          changeDue -= amount;
          
          //add the issued out denominations and their value to the change array.
          temp>=1? change.push([denom,amount/100]): false;
          }
    })
    // if you cannot return the exact change
    if (changeDue>0){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    return {status: "OPEN", change:change};
  }

  return change;
}


}

