"use strict";
//Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
//мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//- единицы (в свойстве units)
//- десятки (в свойстве tens)
//- сотни (в свойстве hundereds)
//Например, для числа 45 мы должны получить следующий объект:
//units: 5, //это единицы
//tens: 4, //это десятки
//hundreds: 0, //это сотни
//Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
//необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
const min_ = 0;
const max_ = 999;
const text_error = "Ошибка: некорректный ввод";
function HTU(h, t, u){
    this.hundereds = h;
    this.tens = t;
    this.units = u;
}
function myFunction(num) {
    if (Number.isInteger(num) && (num >= min_) && (num <= max_)){
        let h, t, u, tmp;
        tmp = num;
        num = num%100;
        h = (tmp - num)/100;
        tmp = num;
        num = num%10;
        t = (tmp-num)/10;
        u = num;
        
        const NumHTU = new HTU(h, t, u);
        return NumHTU;
    }else{
        console.log(text_error);
    }
    
}

myFunction("frfr");
console.log(myFunction(123));
console.log(myFunction(0));