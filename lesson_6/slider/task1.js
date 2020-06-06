"use strict";
const q = 3;
let img_name = ["animals", "tech", "any", "nature", "see" ];
let slider = document.querySelector(".slider");
function openImg(event){
   console.log("Работает"); 
}
for (let i = 0; i < q; i++){
    slider.innerHTML += '<div id="img_'+i+'" class="slider-item hidden-slide">'
            +'<img src="https://placeimg.com/640/480/'+img_name[i]+'" alt="">'
        +'</div>';
    slider.childNodes[i].addEventListener("click", function(event){
        console.log(Event.target); 
    });
}

