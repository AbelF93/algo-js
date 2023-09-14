/*a function called rand10*/ 
function rand10(a){ /*his argument is a*/ 
   return a = (Math.floor(Math.random() * 10)+1);}
   /*it returns it's argument by specifying that it's base (Math.floor
    is the starting number/value (0 by default), we add a + 1 for to
    start to 1. 
    The Math.random generate a number in a range value, we can multiply 
    it by a number +1 to specify the range.*/

function multiRand(n){ /*his argument is n*/ 
return n = (Math.floor(Math.random() * 10)+1);}  
 /*it returns it's argument by specifying that it's base (Math.floor
    is the starting number/value (0 by default), we add a + 1 for to
    start to 1. 
    The Math.random generate a number in a range value, we can multiply 
    it by a number +1 to specify the range.*/
 
b = prompt("Please insert a number:");/*we ask for the number of iterations*/
for(i= 0;i<b;i++){
    console.log(multiRand());
    /*we display the results by incrementing for each time 'i' does not match
    the value added by the prompt.*/
 }


