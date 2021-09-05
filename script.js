'use strict'

// function generateArray(){
//     var num = Number(prompt("Give number of options: "));
//     var array = [];
//     for(var m = 0; m < num; m++){
//         array.push(prompt(`Give ${m+1}. option: `));
//     }
//     return array;
// }

function generateNumber(numLimit){
    return Math.floor(Math.random()*(numLimit)) + 1;
}

var options = ['positive', 'negative', 'neutral'];

do{
    var num = generateNumber(options.length)-1;
    alert(`Got: ${options[num]}`);
}while(confirm("Try again?") === true)
