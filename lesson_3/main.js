'use strict';
/*===========================================================*/
for (let i=0; i <= 10; i++) {
    let text = "";
    if (i == 0){ 
        text = "это ноль"
    }else if (i%2 == 0) {
        text = "четное число"
    }else {
        text = "нечетное число"
    };
    console.log(i + " - " + text );
}
/*============================================================*/
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
/*============================================================*/
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
let i = 0;
for (; i < products.length; i++){
    console.log(i);
    products[i].price = products[i].price * (1-0.15);  
    console.log(products[i].price);
}
/*============================================================*/
const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg",]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];
let i=0
for (; i < products.length; i++){
    if (typeof(products[i].photos) != "undefined"){
        if (products[i].photos.length != 0) {
            console.log(products[i].photos[0]);
        }
    };
}

products.sort(function (a, b) {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  return 0;
});
console.log(products);

/*============================================================*/
for (let i = 1; i <= 20; i++){
    console.log("x".repeat(i));
}