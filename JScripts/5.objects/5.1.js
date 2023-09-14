/*
Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:
*/

function askTvSerie(){
    let myTvSerie = new Object();
    myTvSerie.Name = prompt("What is your favourite Tv Serie ?");
    myTvSerie.Production_Year = prompt("In which year has it been released ?");
    myTvSerie.Cast_Members = [];
    myTvSerie.Cast_Members.push(prompt("Which actor have played in this serie ?"));
    
    let answer = prompt("Another actor? (Yes or No) : ");

    while(answer == 'Yes' || answer == 'yes' || answer == 'y' ){

        myTvSerie.Cast_Members.push(prompt("What is his name ?"));
        answer = prompt("Another actor? (Yes or No) : ");
    
    }

    console.log(JSON.stringify(myTvSerie, null, 3))
}

askTvSerie();