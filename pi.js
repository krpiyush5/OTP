function secure()
{
var x=	 Math.floor(Math.random() * (9999 - 1000) ) + 1000;
document.getElementById("piyush").innerHTML=x;
document.getElementById("pi").innerHTML="Don't share this with other";
}
