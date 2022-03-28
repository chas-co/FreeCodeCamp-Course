/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
    let numArr = []
    
      if (num==0) 
        {return "";}
      else if (num>=1 && num<5)
        { if (num >=4){
           return "IV" +
           convertToRoman(num-4);
          }
          else{
           return "I" +
            convertToRoman(num-1);
          }
        }
      else if (num>=5 && num<10)
         { if (num >=9){
            return "IX" +
            convertToRoman(num-9); 
          }
          else{
            return "V" +
            convertToRoman(num-5);
          }
         }
      else if (num>=10 && num<50)
         { if (num >=40){
            return "XL" +
            convertToRoman(num-40);
          }
          else{
           return "X" +
            convertToRoman(num-10);
          }
         }
      else if( num>=50 && num<100)
        {  if (num >=90){
            return "XC" +
            convertToRoman(num-90) ;
          }
          else{
            return "L"+
            convertToRoman(num-50);
          }
        }
      else if (num>=100 && num<500)
         { if (num >=400){
            return "CD" +
            convertToRoman(num-400);
          }
          else{
            return "C" +
            convertToRoman(num-100);
          }
         }
      else if (num>=500 && num<1000)
         { if (num >=900){
            return "CM"+
            convertToRoman(num-900);
          }
          else{
            return "D" + convertToRoman(num-500);
          }
         }
      else if ( num>=1000)        
      {
       return "M"+ convertToRoman(num-1000);
      }
     
      
     return undefined ;
    }
    console.log(convertToRoman(97))
    convertToRoman(12);