var num1=Math.random();
num1*=6;
num1=Math.floor(num1);
var randomNumber1=num1+1;
var change1="images/dice"+randomNumber1+".png";
var x1=document.querySelector(".img1");
x1.setAttribute("src",change1);


var num2=Math.random();
num2*=6;
num2=Math.floor(num2);
var randomNumber2=num2+1;
var change2="images/dice"+randomNumber2+".png";
var x2=document.querySelector(".img2");
x2.setAttribute("src",change2);


var rash=document.querySelector("h1");
if(randomNumber1>randomNumber2)
{
  rash.innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber1===randomNumber2)
{
  rash.innerHTML="Draw!";
}
else{
  rash.innerHTML="Player 2 Wins!🚩";
}
