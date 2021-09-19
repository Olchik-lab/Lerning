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
    Num2 = document.getElementById('num2').value;
     
    ans.innerHTML = +Num1 + +Num2;
   }
   function minus (){
    Num1 = document.getElementById('num1').value; 
    Num2 = document.getElementById('num2').value;
        
    ans.innerHTML = +Num1 - +Num2;
   }
   function divide (){
    Num1 = document.getElementById('num1').value; 
    Num2 = document.getElementById('num2').value;

    if (Num2 == 0){
        return alert('На ноль делить нельзя!')
    } else {

ans.innerHTML = Num1 / Num2;
    } 
   }   
   
   function multiply (){
    Num1 = document.getElementById('num1').value; 
    Num2 = document.getElementById('num2').value;
    
    ans.innerHTML = Num1 * Num2;
   }
   function clear() {
    document.getElementsByClassName("form-control").value='';
}
