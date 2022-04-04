/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

//Obj
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




}

