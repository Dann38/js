let products_html = document.querySelector(".products");
let table_bill = document.querySelector(".tbl_bill");

let products = [
    ['product_1', 'https://placeimg.com/640/480/arch', 1000],
    ['product_2', 'https://placeimg.com/640/480/see', 100],
    ['product_3', 'https://placeimg.com/640/480/tech', 200],
    ['product_4', 'https://placeimg.com/640/480/animals', 10],
    ['product_5', 'https://placeimg.com/640/480/flower', 5000],
];

let arrayBasket = [];

for (let i=0; i <= 4; i++){
    products_html.innerHTML += ''+
    '<div id_product='+i+' class="product">'+
        '<h3>'+ products[i][0] + '</h3>'+
        '<div class="info no-display"></div><img src="'+ products[i][1] + '" alt="Картинка">'+
        '<p class="price">'+products[i][2]+'</p>'+
        '<button class="into_basket">Купить</button>'+
    '</div>';
}

function getIndexInBasket(id_product){
    for (let i=0; i < arrayBasket.length; i++){
        if (arrayBasket[i][0] == id_product){
            return i;
        }
    }
    return -1;
} 
function updateBasket(){
    for (let i = 0; table_bill.rows.length != 0; i++){
        table_bill.removeChild(table_bill.childNodes[0]);
    }
    table_bill.innerHTML +='<tr class="head_tbl">'+
                        '<th class="name_product">Товар</th>'+
                        '<th class="count_product">Кол-во</th>'+
                        '<th class="price_prosuct">Цена</th>'+
                    '</tr>';
    for (let i = 0; i < arrayBasket.length; i++){
        table_bill.innerHTML += ''+
            '<tr>'+
                '<td>'+arrayBasket[i][1]+'</td>'+
                '<td>'+arrayBasket[i][3]+'</td>'+
                '<td>'+(arrayBasket[i][3]*arrayBasket[i][2])+'</td>'+
            '</tr>';
    }
}

function addBasket(id_product){
    
    let indexInBasket = getIndexInBasket(id_product); 
    if (indexInBasket == -1) {
        arrayBasket.push([id_product, products[id_product][0], products[id_product][2], 1])
    }else{
        arrayBasket[indexInBasket][3] += 1;
    }
    updateBasket();
    
}

function clickBuy(event){
    addBasket(this.attributes.id_product.value);
}

for (let i=1; i<=5; i++){
    products_html.childNodes[i].addEventListener('click', clickBuy)
}