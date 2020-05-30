"use strict";
function Post(author, text, date){
    this.author = author;
    this.text =text;
    this.date = date;
}
Post.prototype.edit = function(text){
    this.text = text;
}

function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}
const p1 = new Post("Даниил", "плохой текст", "25.05.2020");
console.log(p1);
p1.edit("Хороший текст");
console.log(p1);

const p2 = new AttachedPost("Дима", "Текст", "25.05.2020" );
console.log(p2);

/*========================================================*/
class Post2{
    constructor(author, text, date) {
        this.author = author;
        this.text =text;
        this.date = date;
    }
    edit(){
        this.text = text; 
    }
}

class AttachedPost2 extends Post2{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
    this.highlighted = true;
    } 
}


const p3 = new Post2("Даниил", "плохой текст", "25.05.2020");
console.log(p3);
p1.edit("Хороший текст");
console.log(p3);
const p4 = new AttachedPost2("Дима", "Текст", "25.05.2020");
console.log(p4);