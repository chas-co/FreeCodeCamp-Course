/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.*/
/*Solution
we know the fibonacci series starts with [1,1]. The idea is to create the fibonachi series in an array within the given limits ei. the numbers in the array should not exceed the passed argument num. Once we have the array we check for odd number and accumulate their sum in the sum variable. */
function sumFibs(num) {
  let fibNums = [1,1]
  let sum = 0;
  if (num<=0){
    return 0;
  }
  else {
    for (let i =1; i<=num; i++){
      if (fibNums[i-1]+fibNums[i]<=num)
      {fibNums.push(fibNums[i-1]+fibNums[i]);}
      else {
        break;
      }
    }
  }
  //console.log(fibNums)
  fibNums.forEach((element)=>{
    element % 2 !==0 && element <= num? sum+=element: false ;
  })
  return sum;
}
console.log(sumFibs(75024))
sumFibs(4);