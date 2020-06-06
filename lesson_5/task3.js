"use strict";
document.body.innerHTML += '<div class="table"></div>';
let table = document.querySelector(".table");
let black = false;
let color = "black";
function letter(i){
   table.innerHTML += '<div class="row"></div>';
    let row = document.querySelectorAll(".row")[i];
    row.innerHTML += '<div class="cell "></div>';
    for (let j=0; j < 8; j++){
        row.innerHTML += '<div class="cell ">'+String.fromCharCode(j+65)+'</div>';
    }
    row.innerHTML += '<div class="cell "></div>'; 
}

letter(0)
for (let i=1; i < 9; i++){
    table.innerHTML += '<div class="row"></div>';
    let row = document.querySelectorAll(".row")[i];
    
    row.innerHTML += '<div class="cell">'+(i)+'</div>';
    
    for (let j=0; j < 8; j++){
        if (black) {
            color = "black";
            black = false;
        }else{
            color = "white";
            black = true;
        }
        row.innerHTML += '<div class="cell '+color+'"></div>';
    }
    row.innerHTML += '<div class="cell">'+(i)+'</div>';
    if (black) {
            color = "black";
            black = false;
    }else{
            color = "white";
            black = true;
    }
}
letter(9);