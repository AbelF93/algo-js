// Create a function pickLearner(inputAr, n) that takes 2 parameters.


let inputAr = ["Abel", "Alexandra", "Anthony","Benjamin","Bruno","Delphine","Emilien","Ethan","Ismaël","Jodie","Louka","Loïc","Luciano","Marine","Nikko","Noa","Steve","Sylvain","Thomas","Willy"];
/*
 * Return an array of randomly selected elements of the array in parameter without double 
 * @param { Array } inputAr
 * @param { Number } n should be greater than 0 and less than the length of inputAr
 * @return { Array }
*/
function pickLearner(inputAr, n) {
    let array = []; // we define a new array where our values will return
    for (i = 0; i < n; i++) { // We specify that the For loop continue until i is no longer strictly smaller then n.
        var randomSelect = inputAr[Math.floor(Math.random() * inputAr.length)]; //Here we create a randomSelect variable equal to the lenght of the inputAr array, and it as the same values as inputAr.

        while(array.includes(randomSelect)){ // we include the for loop a while condition, which select a value by the randomSelect variable of the new array.
            randomSelect = inputAr[Math.floor(Math.random() * inputAr.length)];
        }        
        array.push(randomSelect); // it pushes this new value each time the loop start.
    }

    return array; // and return it into this array.
}

console.log(pickLearner(inputAr, 5));
