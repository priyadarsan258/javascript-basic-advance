'use strict'
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
let age = prompt("How old are you",17)
let message=age<3?"Hi, Baby": age<18?"Hello you still below 18":age<100?"Hello greetings":"What an unusual age";
// alert(message)
// non-traditional use of '?'
// let number=prompt("What is the oficial name of js")
let a=prompt("Number1")
let b=prompt("number2")
let result=(a+b) < 4?"Below":"Over"
alert(result)

// logical operator
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


