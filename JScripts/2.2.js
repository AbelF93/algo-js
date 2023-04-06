let min = prompt('Enter a minimal value');
let max = prompt ('Enter an higher value');
let current = prompt ('Last one!');
if ((current>min) && (current<max)) {
    alert("You're between "+min+' and '+max+ "!");
} else if (min > max){
    alert("Error... Did you graduate ?");
} else {
    alert("you suck");
}
