const arrNum = [1,2,3,4,5];
const arrHund = [100,101,102];


let result = arrNum.reduce((a,b)=>{
    return a+b;
});

    alert ('The average value of this array is ' + result);

    let sum = arrHund.reduce((a,b)=>{
        return a+b;
    });
    
        alert ('The addition of the array is ' + sum);