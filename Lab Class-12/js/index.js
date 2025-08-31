function buttonClick1(){
    alert('Hello');
}

function paraClick(){
    var text = document.querySelector('#paraId');
    //var text = document.getElementById('paraId');
    text.innerHTML= 'This is second text of the para.';
}   


function ImageClick(){
   var text = document.querySelector('#imageId');
   text.src='images/rainyday.jpg';
}   