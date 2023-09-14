/*Create a function: calcDistance which takes the coordinates of two different points A and B in a 2D space.
 That function must return the distance between those two points.*/

 function calcDistance(arr1, arr2){ //We assign two arrays, each one representing a point as a value for this function.
    let distance = Math.sqrt((arr2[0]-arr1[0])*(arr2[0]-arr1[0])+(arr2[1]-arr1[1])*(arr2[1]-arr1[1])); //In this function, we create a variable which calculate the distance between the 2 points using SquareRoot.
    return distance; // we return the Distance variable to the calcDistance function.
}

var pointA = [1,1];
var pointB = [2,2];
var pointC = [3,1];
var pointD = [4,1];
var pointE = [-2,2];
var pointF = [2,-2];

console.log(calcDistance(pointA, pointB));
console.log(calcDistance(pointA, pointC));
console.log(calcDistance(pointD, pointA));
console.log(calcDistance(pointE, pointF));