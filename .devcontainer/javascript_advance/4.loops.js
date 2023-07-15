//for of loop. it is used to print value 


//for of loop in array

const arr = [1,2,3,4,5];

for (const i of arr) {
    
   // console.log(i);
}


const greetings = "hello world";

for (const i of greetings) {
    //console.log(i);
}

//Maps   // maps is object which is used to store uniqe keys

const map = new Map()

map.set("in", "india");
map.set("pak","pakistan");


//console.log(map);

// for of loop on map
for (const [key , value] of map) {
   // console.log(value);
    
}


// for of loop on object 

const myObj = {
    name : "hamza",
    rollno : 3,
}

//for (const i of myObj) {   its not iterable for of loop is not working with object
   // console.log(i);
//}

//for in loop . it is used to print the keys 
for (const key in myObj) {
   
   // console.log(myObj[key]);
}


// for each loop 

const language = [ "c++", "c" , "java"];

language.forEach(function(item){
    //console.log(item);
});

language.forEach((value)=>{
    //console.log(value);
})

function printMe(item)
{
   // console.log(item);
}

language.forEach(printMe);


language.forEach((item , index , arr)=> {
    //console.log(item , index, arr);
})


