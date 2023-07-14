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

//console.log(obj3);


const onlineuser = {};
onlineuser.id = "123abc";
onlineuser.name = "hamza";

//console.log(onlineuser);

const obj4 = {...obj1,...obj2};  // by spread operator
//console.log(obj4);

//array of objects

const array = [
    {
        name: "hamza",
        rollno: 5,
    },
    {
        no:1
    },
    {
        no:4,
    }
]

//console.log(array[0].name);

//keys values entries method


//console.log(Object.keys(obj1));  //it will print keys of object 
//console.log(Object.values(obj1)); // it will print the values of object
//console.log(Object.entries(obj1)); // it will print both

//console.log(obj1.hasOwnProperty('1')); // it will give us wether the keys are in the obj or not

//de-structure of objects
const course = {
    coursename: "javascript",
    price: 899,
    courseinstructor : "hitesh"
}

const {coursename : cname} = course;
console.log(cname);

//API intro

 //jason
 //{
  //  "name" : "hamza",
  //  "rollno": 3,
 //}