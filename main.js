let title=document.querySelector(".title")
let turn = "X";
let squares =[];
 
console.log(squares);



function winner(){
    for(let i=1;i<10; i++){
      squares[i]=  document.getElementById("item"+i).innerHTML;
    }
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1] !=""){
       title.innerHTML=`${squares[1]} winner`;
       document.getElementById("item1").style.backgroundColor="darkmagenta";
       document.getElementById("item2").style.backgroundColor="darkmagenta";
       document.getElementById("item3").style.backgroundColor="darkmagenta";
         setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
       
    } else if(squares[1] && squares[2]  && squares[3] && squares[4] && squares[5] && squares[6] && squares[7] && squares[8] && squares[9] !="") {
         title.innerHTML="New Game";
        setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
        }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5]!=""){
        title.innerHTML=`${squares[4]} winner`;
         document.getElementById("item4").style.backgroundColor="darkmagenta";
       document.getElementById("item5").style.backgroundColor="darkmagenta";
       document.getElementById("item6").style.backgroundColor="darkmagenta";
          setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
    }else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8]!=""){
        title.innerHTML=`${squares[7]} winner`;
         document.getElementById("item7").style.backgroundColor="darkmagenta";
       document.getElementById("item8").style.backgroundColor="darkmagenta";
       document.getElementById("item9").style.backgroundColor="darkmagenta";
        setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
    } else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1]!=""){
        title.innerHTML=`${squares[1]} winner`;
         document.getElementById("item1").style.backgroundColor="darkmagenta";
       document.getElementById("item4").style.backgroundColor="darkmagenta";
       document.getElementById("item7").style.backgroundColor="darkmagenta";
          setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
    } else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2]!=""){
        title.innerHTML=`${squares[2]} winner`;
         document.getElementById("item2").style.backgroundColor="darkmagenta";
       document.getElementById("item5").style.backgroundColor="darkmagenta";
       document.getElementById("item8").style.backgroundColor="darkmagenta";
          setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
    } else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3]!=""){
        title.innerHTML=`${squares[3]} winner`;
         document.getElementById("item3").style.backgroundColor="darkmagenta";
       document.getElementById("item6").style.backgroundColor="darkmagenta";
       document.getElementById("item9").style.backgroundColor="darkmagenta";
          setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
    } else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3]!=""){
        title.innerHTML=`${squares[3]} winner`;
         document.getElementById("item3").style.backgroundColor="darkmagenta";
       document.getElementById("item5").style.backgroundColor="darkmagenta";
       document.getElementById("item7").style.backgroundColor="darkmagenta";
          setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
    } else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1]!=""){
        title.innerHTML=`${squares[1]} winner`;
         document.getElementById("item1").style.backgroundColor="darkmagenta";
       document.getElementById("item5").style.backgroundColor="darkmagenta";
       document.getElementById("item9").style.backgroundColor="darkmagenta";
          setInterval(function(){title.innerHTML +="."},1000);
        setTimeout(function(){location.reload()},4000);
    } 
}






 

function game(id){

     let element=document.getElementById(id);
     if(turn === "X" && element.innerHTML == ""){ 
        element.innerHTML="X";
        turn="O";
        title.innerHTML="O";
     }else if( turn === "O" && element.innerHTML == ""){
        element.innerHTML="O";
        turn="X";
        title.innerHTML="X";
   }
   winner()
}