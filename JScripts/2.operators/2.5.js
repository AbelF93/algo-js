let a = prompt ('What is your favorite number ?');
const x = 42;
const message = "you suck";
const winner = "Well Done!";

while (a!==x){
    alert(message);
    let a = prompt ('What is your favorite number ?');
    if (a==x){
        alert (winner);
        break;
    }
} 