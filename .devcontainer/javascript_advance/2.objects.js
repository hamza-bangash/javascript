//object literals

const myobj = {
    name : "hamza",
    age : 19,
    location : "Peshwar",
    "email" : "hamza@gmail.com", // by defult is like this 

}

// accessing value of objects 

//console.log(myobj.name); // not good way 
//console.log(myobj["name"]); // this is the good way

// changing value of objects

myobj.name = "hamza";

//console.log(myobj["name"]);

// singleton 
//const myobj2 = new Object();



const user = {
    email : "hamza.com",
   fullName: { // nested object
    firstName:"hamza",
    lastName: "khan",
   },
}

//console.log(user.fullName.firstName);


const obj1={
    1:"a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = Object.assign(obj1,obj2); // margin object together

console.log(obj3);




