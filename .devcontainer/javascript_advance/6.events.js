// there are two ways to use envents  1.events handler and 2.event listener

//1.event handler

// it is use inline html 

function onClick(){
    //console.log('i was click');
}

function onMouseover()
{
   // console.log('muse over on me ');
}

function onKeyPress(){
    console.log('key was press');
}



// Event lisner 
const button = document.getElementById('buttons');
button.addEventListener('click',()=>{
    console.log('clickby event 1');
})

button.addEventListener('click',()=>{
    console.log('clickby event 2');
})