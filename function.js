// function declaration
function sayhi(){
    alert("HI")
}
// sayhi()
// function expression 
// no matter how the function is created function has a value


// alert(sayhi)  //show functon code in string represenetation, and it has a value (function code ), 
// we can use it as of our preferences
let func=sayhi
// func()// see this is executed

let Sayhi=function (){
    // alert("HI")
};
let func1=Sayhi;
// func1()
// Sayhi()

// semicolon in function expression not in function declaraion
// function sayHi() {
//     // ...
//   }
  
//   let sayHi = function() {
//     // ...
//   };  //; is not part of function syatax

//call back function 
function ask(question, yes,no){
    if(confirm(question)) yes()
    else   no()
}  
function showok(){
    alert("you agreed")
}
function ShowCancel(){
    alert("you cancel the execution")
}

ask("Do you Agree",showok,ShowCancel)