// var a=1;

// function addstyle() {

//   var Paraid =document.querySelector("#paraId");
//     Paraid.style.color = "red";
//     Paraid.style.fontSize = "20px";
//     Paraid.style.fontWeight = "bold";
//     Paraid.style.fontstyle = "italic";
//     Paraid.style.textDecoration = "underline";
//     Paraid.style.backgroundColor = "black";
// }
// //remove style
// function removestyle() {
//   var Paraid = document.querySelector("#paraId");
//   Paraid.style.color = " ";
  
// }
var paraid = document.querySelector("#paraId");
function addStyle() {
    paraid.classList.add("para-style");
}
function removeStyle() {
    paraid.classList.remove("para-style");
}
function next(){
    location.href="/Lab Class-13/next.html"
}
var paraId = document.querySelector("#paraId");
paraId.addEventListener("click", addStyle); 
function addStyle() {
    paraId.classList.add("para-style");
}  
