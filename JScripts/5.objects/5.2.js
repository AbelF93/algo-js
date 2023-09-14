/**Create a function named randomizeCast(tvSerie) that will take as argument the data structure
 *  you defined in the previous exercise and return a list of the same cast but in a random order.
 * Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie
 *  then display a randomized list of the previous cast that will form the new cast of your next serie. */


let myTvSerie = {
    Name: "One Piece",
    Production_Year: 1999,
    Cast_Members: ["Zoro", "Luffy", "Usopp", "Sanji"]
  };



function randomizeCast(myTvSerie){
   console.log(shuffleArray(myTvSerie.Cast_Members));
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

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

randomizeCast(askTvSerie(myTvSerie));
