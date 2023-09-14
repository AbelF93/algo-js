const nContent = "How many numbers would you like to addition ?";
const aContent = "insert a number please";
let n = prompt(nContent);
let num = 0;
let result = 0;

for (let i=1;i<=n;i++){
    num = prompt(aContent);
    result = parseInt(result) + parseInt(num);
}

alert ('The addition of your numbers is ' + result);
