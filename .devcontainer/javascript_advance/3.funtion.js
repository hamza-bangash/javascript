function sayName()
{
    //console.log("hamza");
}
sayName();

function caculateCarPrice(...num1)  // reset operator now it will becom to add infinte permeters
{
    return num1;
}

//console.log(caculateCarPrice(500,600,4,5));

function handleobject(anyObject) // parameters as a object
{
   // console.log(anyObject.num1);
}

handleobject(caculateCarPrice);

//arrow function

const addTwo = (no1,no2)=>(no1+no2) //implict return
//console.log(addTwo(5,6));

//immediately invoked functiion expersion (iife)
(function check()
{
    console.log("name");
})();