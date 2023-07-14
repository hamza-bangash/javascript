// stack 
 // all permitive datatypes store in stack 

let name1 = "hamza";
let name2 = name1; // it will copy the content of name1

name2 = "mustafa"; // it will not effect name1 varable

console.log(name1 + name2);

//Heap 
// all non-permitive datatypes store in Heap

let myobj1={
    name: "hamza",
    email: "hamza.com"
}
let myobj2 = myobj1; // it will give the refernce

myobj2.name="Mustafa"; // it will also effect myobj1

console.log(myobj1.name);
console.log(myobj2.name);

