"use strict";
// working fine
// alert("hello");
// [1,2].forEach(alert)

// ...
// alert("hello")
// [1,2].forEach(alert)
// out put 1,2 undefined , witout seicolon js , js treated this as a single comment like this
// alert("hello")[1,2].forEach(alert)
// ctrl+/  -shortcut -single line comment

// varible-declare and assign in one l
// multiple variable in one line-
// let user="Jhon",age=25, message1="yo";

// let name='john';
// let admin=name;
// alert(admin)
// let planetEarth
// let currentVisitorName
// const birthday = '18.04.1982';
// let myName=prompt("what is your name")
// alert(myName)
// conditional operator

// let age = prompt("How old are you",17)
// let result=age<3?"Hi baby":'You are not baby';
// alert(result)
// multile ?
// let age = prompt("How old are you",17)
// let message=age<3?"Hi, Baby": age<18?"Hello you still below 18":age<100?"Hello greetings":"What an unusual age";
// alert(message)
// non-traditional use of '?'
// let number=prompt("What is the oficial name of js")
// let a=prompt("Number1")
// let b=prompt("number2")
// let result=(a+b) < 4?"Below":"Over"
// alert(result)

// logical operator
/*alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)*/
// alert( null || 0 || 1 ); // 1 (the first truthy value)

// alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// short-circuit evaluation of ||
// when  first truthy value is reached then the value returned immidiatly   without even touching the other arguments

// logical and find the first falsy value , and return the first falsy value or the last value of none if none are found

// and
// if the first operand is truthy,
// AND returns the second operand:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5
// // if the first operand is falsy,
// // AND returns it. The second operand is ignored
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

// alert( null || 2 && 3 || 4 );
/*The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
Now the result is the first truthy value: 3*/
// let age = 12;
// if (age > 23 || age < 90) {
//   alert("yes");
// }

// exercises
/*Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”*/
// let User_Name = prompt("Who's there",' ');
// if (User_Name === "Admin") {
//   let pw = prompt("What it your pw" , " ");
//   if (pw === "The Master") {
//     alert("Welcome");
//   } else if (pw === " " || pw === null) {
//     alert("Cancel");
//   } else {
//     alert("Wrong password");
//   }
// } else if (User_Name === ' ' || User_Name === null) {
//   alert("Cancel");
// } else {
//   alert("I DONT KOWN YOU");
// }

//  ?? nullish coalashing
let user = "sanu";

// alert(user ?? "Anonymous"); // Anonymous (user is undefined)
// use of  ?? operator
let firstname = null;
let lastname = null;
let nickname = "sanu";
// alert(firstname??lastname??nickname??"super coder")

// usig of break statement in while loop
// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number", ''); // get the value
//     if (!value) break; // (*) check  if no value is there then if block executed and brk and at the end sum printed
//     sum += value;
// }
// alert( 'Sum: ' + sum );

// continue-lighter version of break
//  doesnot stop the whole code

// continue- skip the curent iteration
// for (let i=0;i<10;i++){
//     if(i%2==0) continue;
//     alert(i)
// }
// see the below example what  beefit of continue , it basically decrease the nesting , or we can say decrease the readability
// for (let i=1;i<=10;i++){
//     if(i%2==0){  alert(i)} ;
//     // alert(i)
// }

// labels for break; continue
// outer:for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//     let input = prompt(`Value at coords (${i},${j})`, '');

//       // what if we want to exit from here to Done (below)?
//     //   just  add a label to break the total when there is no input
//     if(!input) break outer;
//     }

//   }

//   alert('Done!');
// let i=0;
// while(++i<5) console.log(i);
// while(i++<5) console.log(i);
// out the even number
// for(let i=2;i<=10;i++){
//     if(i%2==0)  alert(i)

// }

//changes for loop to while loop
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// solution
// let i=0
// while(i<3){
//     alert(`number ${i}!`);
//     i++;
// }

// task

/*Write a loop which prompts for a number greater than 100. 
If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. 
There’s no need to implement a special handling for a non-numeric input in this task.*/
// let number=prompt("Type  a number");
// while(number<=100 ){
// number=prompt("Again type a number")
// if (number>100 || number === null ) break;
// }

// small game
// let num;
// do {
// num=prompt("Type a number in between 1 to 100")

// }while(num<=100 &&  num)

// Write the code which outputs prime numbers in the interval from 2 to n
// for (let i = 2; i <= 200; i++) {
    
//   for (let j = 2; j <= i; j++) {
    
//     if (i === 2) console.log(i);
//     else if (i % j !== 0) {  
//       console.log(i);
//       break;
//     } else break;
//   }
// }

let n=10;
nextPrime:for(let i=2;i<=n;i++){
for (let j=2; j<i;j++){
    if(i%j===0) continue nextPrime
}
console.log(i)

}
