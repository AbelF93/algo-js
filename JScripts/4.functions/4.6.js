/* Create a function factorial(a) that returns the factorial of a number.

That function must be recursive.*/

function factorial(a){
    if (a < 0) { 
        return -1; 
     } 
     else if (a == 0){ 
        return 1; 
     } 
     else { 
        return a * factorial(a - 1); 
     } 
}

console.log(factorial(0))
console.log(factorial(-65))
console.log(factorial(3));
console.log(factorial(452));