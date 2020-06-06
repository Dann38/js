"use strict";
let products_html = document.querySelector(".products");
 
for (let i=1; i <= 3; i++){
    products_html.innerHTML += '<div class="product"><h3>product '+ i + '</h3><div class="info no-display"></div><img src="pr_img.jpg" alt="Картинка"><button class="disc">Описание</button></div>';
}
let products = document.querySelectorAll(".product");
for (let i=0; i < products.length; i++){
//    console.log(products[i]);
    products[i].childNodes[3].addEventListener('click', function(event){
        console.log(event.target.parentNode.childNodes[1]);
        event.target.parentNode.childNodes[1].classList.remove('no-display');
        event.target.parentNode.childNodes[1].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quod, mollitia consequuntur blanditiis? Quia laboriosam totam, sunt recusandae quam tenetur ad doloremque cupiditate quis? Facere, rem, adipisci. Aliquid, fugiat, similique."
        
    });
    products[i].childNodes[1].addEventListener('mouseout', function(event){
        event.target.parentNode.childNodes[1].classList.add('no-display');
    });
}
 