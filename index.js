"use strict"
function text(printText, secondText)
{
    console.log(printText, secondText)
}
// INPUT
const arrNum = [];
// List resuls
const expression = [];
// MATH
let out;
// ACT
const plus = document.getElementById("plus").value;
const min = document.getElementById("min").value;
const mult = document.getElementById("mult").value;
const split = document.getElementById("split").value;

const history = document.getElementById("history");
 

// Array number
function numberAdd(numbers) {
    arrNum.push(numbers);
    text( "Global",arrNum)
    Input(arrNum.join(''));    
}

function split_plus() {
    text( "Start",arrNum)
    if(arrNum[0]!=='-') {
        
        arrNum.unshift('-')
        text( "-",arrNum)
        return arrNum
        // text("!==",  arrNum)
        // return 
    }
    else if(arrNum[0]==='-'){
        arrNum.delete[0]
        text("===", arrNum)
        return arrNum
    }
   
    // return numberAdd(arrNum)
    return  
}

function clearAll(){
    clearNumbersArray(arrNum);
    clearInput();
    stateTrueFloat();
}



// STATE FLOAT POINT
let wrapped;                                    // Хранит функцию с текущим контекстом состояния кнопки.
function floatPoint() {
    let hundlerPoint=false;                                               
    let stateNowBool;                           // Передает состояние hundlerPoint.
    return function statePoint() {  
        hundlerPoint = !hundlerPoint;
        wrapped = func.bind(hundlerPoint);      // Биндим в func, чтобы передать контекст.
        return hundlerPoint;
    }   
}
function func() { floatPoint.stateNowBool = this; } 
let count = floatPoint();
count();                                        // Запускаем цикл, чтобы объявить состояние аргументов в floatPoint.

const stateTrueFloat = function() {
    if (count()!==true){ count(); }
}

// NUMBER
class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }
    num_1() { numberAdd(1); }
    num_2() { numberAdd(2); }
    num_3() { numberAdd(3); }
    num_4() { numberAdd(4); }
    num_5() { numberAdd(5); }
    num_6() { numberAdd(6); }
    num_7() { numberAdd(7); }
    num_8() { numberAdd(8); }
    num_9() { numberAdd(9); }
    num_0() { numberAdd(0); }  
    num_point() {
        wrapped();                                  // читаем состояние кнопки и биндим в func
        if (floatPoint.stateNowBool === true) {
            numberAdd(".");
            return count();
        }
    }       
        
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Menu(menu);

function clearInput() { input.value=''; }
function clearNumbersArray(clearArray) {
    while (clearArray.length) { clearArray.pop(); }
}

function Input(results) {
    // console.log(typeof(results))    

    document.getElementById('input').value = results;
}

function inputFunc() {
    const input = document.getElementById("input");    
}

function plusFunc() { Active(plus); }
function minFunc()  { Active(min);  }
function multFunc() { Active(mult); }
function splitFunc(){ Active(split);}

function Active(act) {
    stateTrueFloat();
    out = input.value + act;
    var act = act;
    clearAll();
}

function enter() {
    stateTrueFloat()
    const nextNumber = input.value;
    const result = eval(out.concat(input.value));
    clearInput();
    Input(result);
    story(result, nextNumber);
}



//history
const li = function () {
    var selectorLI = document.querySelector("ul").children;
    history.removeChild(selectorLI[0])
}

function story(result, nextNumber) {
      
    const list = document.createElement("li");

    nextNumber = String(nextNumber);
    out = String(out);
    result = String(result);

    expression.push(out+nextNumber+'='+result);

    for (let i=0; i<expression.length; i++){
        list.textContent =expression[i];
        history.appendChild(list);
    }
    
    if (expression.length>15){
        li()    
    }
}

function historyClear() {
    history.innerHTML="";
    clearNumbersArray(expression);
}




