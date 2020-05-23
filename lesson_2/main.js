/*=====================================================================*/
let a = 1, b = 1, c, d;
c = ++a; //сначало выполняется инкримент, а потом присваивается с
alert(c); // ответ: 2

//пример 2
d = b++; //сначало присваивается значение, а потом делается инкримент b
alert(d); //ответ: 1

//пример 3
c = 2 + ++a; //а=2 делается инкримент получается 2+3=5
alert(c); //ответ: 5
//пример 4
d = 2 + b++;//b=2 присваивается 2+2, затем инкримент b и b=3
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

/*=====================================================================*/

let a = 2; //в переменную кладется 2
let x = 1 + (a *= 2);   // сначало выполняется то, что в скобках a = a*2 => a=4
                        // затем к 1+а=1+4=5, иксу присваивается 5
                        // a=4, x=5

/*=====================================================================*/
let a = Number(prompt("Введите число a:"));
let b = Number(prompt("Введите число b:"));
let c;

if ((a >= 0) && (b >= 0)) {
    c = a - b; 
} else if ((a < 0) && (b < 0)) {
    c = a * b; 
}else {
    c = a + b;
}

alert(c);
/*=====================================================================*/

let a = Number(prompt("Введите число a:"));
let b = Number(prompt("Введите число b:"));

function my_add(a, b){
    return (a + b);
}


function my_sub(a, b){
    return (a - b);
}


function my_mul(a, b){
    return (a * b);
}


function my_dif(a, b){
    return (a / b);
}

let c = my_add(a, b);
alert(c);
c =  my_sub(a, b);
alert(c);
c =  my_mul(a, b);
alert(c);
c =  my_dif(a, b);
alert(c);
/*=====================================================================*/
function mathOperation(arg1, arg2, operation){
    switch( operation){
        case "add":
            return(arg1 + arg2);
        case "sub":
            return(arg1 - arg2);
        case "mul":
            return(arg1 * arg2);
        case "dif":
            return(arg1 / arg2);
    }
}

alert(mathOperation(1, 7, "add"));
alert(mathOperation(1, 7, "sub"));
alert(mathOperation(1, 7, "mul"));
alert(mathOperation(1, 7, "dif"));

/*=====================================================================*/
function alertTextMoney(a) {
    let c = a % 10
    let text;
    switch(c){
        case 1:
            text = " рубль";
            break;
        case 2:
        case 3:
        case 4:
            text = " рубля";
            break;
        default:
            text = " рублей";
    };
    alert("Ваша сумма в " + a + text + " успешно зачислена.");
}
let a = Number(prompt("Введите число:"));
alertTextMoney(a);