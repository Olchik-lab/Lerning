// btn1.onmousedown = function func(a) {
//     let x = prompt("Введите первое число:");
//     let y = prompt("Введите второе число:");
//     alert(`результат:  ${Number(x) + Number(y)}`);
// }
// btn2.onmousedown = function func() {
//     let x = prompt("Введите первое число:");
//     let y = prompt("Введите второе число:");
//     alert(`результат:  ${Number(x) - Number(y)}`);
// }
// btn3.onmousedown = function func() {
//     let x = prompt("Введите первое число:");
//     let y = prompt("Введите второе число:");
//     alert(`результат:  ${Number(x) / Number(y)}`);
// }
// btn4.onmousedown = function func() {
//     let x = prompt("Введите первое число:");
//     let y = prompt("Введите второе число:");
//     alert(`результат:  ${Number(x) * Number(y)}`);
// }

function func(){
    let userInput = document.getElementById('urName').value;
    //  newName.innerHTML = document.getElementById('urName').value;
    newName.innerHTML = userInput;
    console.log(userInput);
    }

let Num1;
let Num2;
let ans = document.getElementById('ans');

function plus (){
    Num1 = document.getElementById('num1').value; 
    Num1 = parseInt(Num1)
    Num2 = document.getElementById('num2').value;
    Num2 = parseInt(Num2)
    
    ans.innerHTML = Num1 + Num2;
   }
   function minus (){
    Num1 = document.getElementById('num1').value; 
    Num1 = parseInt(Num1)
    Num2 = document.getElementById('num2').value;
    Num2 = parseInt(Num2)
    
    ans.innerHTML = Num1 - Num2;
   }
   function divide (){
    Num1 = document.getElementById('num1').value; 
    Num1 = parseInt(Num1)
    Num2 = document.getElementById('num2').value;
    Num2 = parseInt(Num2)
    
    ans.innerHTML = Num1 / Num2;
   }
   function multiply (){
    Num1 = document.getElementById('num1').value; 
    Num1 = parseInt(Num1)
    Num2 = document.getElementById('num2').value;
    Num2 = parseInt(Num2)
    
    ans.innerHTML = Num1 * Num2;
   }
