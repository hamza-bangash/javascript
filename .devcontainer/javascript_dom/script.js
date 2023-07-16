//Dom Manipulation

///////------Element selecting-------/////

//ther are seven way to selects elements some of them are following

const check1 = document.querySelector(".check1"); //element is selected by query using class


/////-------styling Element ----------///
//inline styling

check1.style.color = `white`;
check1.style.fontWeight = "bold";
check1.style.fontSize = "2rem";


////-----adding and removing element -----////

const p = document.createElement('p'); // element is created
check1.append(p); //now element is attached to check1 element
p.remove(); // now this will remove paragraph element 


////-----Modifying Text -----////

p.innerHTML = "this is paragraph i add by javascript";


/////--------modifying atribute & classes --------///

check1.setAttribute('id', 'boder'); //this will add id naming boder to check1 element
check1.removeAttribute('id','boder');//thsi will remove id 

////----adding classes ----you can also add by upper method
//there four way of classes modification 
//1.adding class
check1.classList.add("main");
//2.remove class 
check1.classList.remove("main");
//3.toqqle this mean if class was present in element remove it if not add it 
check1.classList.toggle("main");
//4.replace it will to parameters to replace classes
check1.classList.replace("newclass","oldclass");


////-------traverse the dom ------//// traverse meaning(move back and forth or sideways.)
     /*differce between node and element . node is 
     is checking for every thing weather its text or element on other hand element check
     only for elements leaving other thing. */
//1.parent node traverse 
console.log(check1.parentNode);
console.log(check1.parentElement);

//2.child node traverse
console.log(check1.childNode);
console.log(check1.childElement);

//3.sibling node travese

console.log(check1.previousSibling);
console.log(check1.nextSibling)
console.log(check1.previousElementSibling);
console.log(check1.nextElementSibling);