"use strict";
let button = document.querySelector(".button-task1");
let obj = document.querySelector(".win");
console.log(obj);

button.addEventListener('click', function(event){
    event.stopPropagation()
    obj.classList.remove('no-display');
});

document.body.addEventListener('click', function(){
    obj.classList.add('no-display');
})
