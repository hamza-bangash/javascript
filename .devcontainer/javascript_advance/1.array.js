// array 

const myarray = [0,1,2,3,4,5,"hamza"];

//console.log(myarray);
//console.log(myarray[3]);

//Array Methods
 //push()
myarray.push(8); // it will expand array
//console.log(myarray);

//pop()
myarray.pop(); // it will delete last index of array


// unshift()  it will add index to start of array opposite to push()
//shift() it will delete index to start of arrray opposite to pop()
//join() will convert array to string

let newarray  = myarray.join();

//console.log(newarray); // so this will in string of array content

//slice , splice

//console.log("A" , myarray);

const arr1 = myarray.slice(1,3); // it will store the the index of myarray from 1,3 in arr1 add it will not effect myarray

//console.log(arr1);

const arr2 = myarray.splice(1,3); // it will effect myarray  it will cut the index which was store in arr2 from myarray
//console.log(arr2);




//concat()

const arr3 = arr1.concat(arr2); // it merage two array together
//console.log(arr3);

//sperade 

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];

const array4= [ ...array1,...array2,...array3];  //sperade marage all array together like concat method 

console.log(array4);

