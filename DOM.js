/*a)java script can change all the html element in the page;
java script can change all the html atribute in the page;
java script can change all the css style in the page;
java script can remove existing html element and atributes;
js can react to the existing html event in the page
js can create a new html event in the page

*/

let x=document.getElementById("demo").getAttribute("id");
let r=document.getElementById("demo").setAttribute("class","democlass");

x.innerHTML="   ";

let y=document.getElementsByClassName("demo");
y[i].innerHTML="";

let z=document.getElementsByTagName("demo");
// document.querySelector ("") ;first index ;;class by . and id by #
//document.querySelectorAll(""); all elements
//style
let x=document.getElementById("demo").style.Color="blue";
//create
let s = document.createElement('h2');

let par = document.getElementsByTagName("body");
par[0].append(s);
//remove
s.remove();

//events in java script
/* onclick ho gya
mouse event