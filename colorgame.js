var num=6;
var colors=[];
var pickedcolor;
var squares= document.querySelectorAll(".squares");
var colordisp= document.querySelector("#colordisp");
var message= document.querySelector("#message");
var reset= document.querySelector("#reset");
var h1= document.querySelector("h1");
var flag= false;
var mode = document.querySelectorAll(".mode");

init();
function init(){
    setupmode();
    setupsquare();
   reset1();
}
function setupsquare(){
    for( var i=0; i<squares.length;i++){
        squares[i].addEventListener("click",function(){
            var clickedcolor=this.style.backgroundColor;
           if(!flag)
           {
               if(clickedcolor===pickedcolor)
               {
                   reset.textContent="PLAY AGAIN?";                       
                   message.textContent="Correct! ";
                    flag= true;
                   h1.style.backgroundColor = pickedcolor;
                   for(var j=0 ;j<squares.length;j++)
                   {
                       squares[j].style.backgroundColor= pickedcolor;
                   }                   
                }
                else
               {
                   message.textContent="Try Again";
                   this.style.backgroundColor= "black";
               }
           }
       });
   }
}
function setupmode(){
    for(var i = 0; i < mode.length ; i++){
        mode[i].addEventListener("click",function(){
           mode[0].classList.remove("selected");
           mode[1].classList.remove("selected");
           mode[2].classList.remove("selected");
           this.classList.add("selected");
            if(this.textContent==="EASY")
            num = 3;
            else if(this.textContent==="MEDIUM")
            num = 6;
            else
            num=8;
           reset1();
           });
       }
}
reset.addEventListener("click",reset1);

function pickcolor(){
    var x=Math.floor(Math.random()*colors.length );
    return colors[x];
}
function generateRandom(num){
    var arr=[];
    for(var i=0; i<num;i++)
    {
        arr[i]=randomcol();
    }
    return arr;
}
function randomcol(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r +", "+g+", "+b+")";
}
function reset1(){
    colors=generateRandom(num);
    pickedcolor = pickcolor();
    colordisp.textContent=pickedcolor;
    message.textContent="";
    flag=false;
    reset.textContent="NEW COLORS";
    for( var i=0; i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.display= "block";
            squares[i].style.backgroundColor= colors[i];
        }
        else
        {
            squares[i].style.display= "none";
        }
    }
    h1.style.backgroundColor="steelblue";
    colordisp.textContent= pickedcolor;
}