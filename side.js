function openNav() {
    document.getElementById("mySidenav")
    .style.width="24%";
   }
   
   function closeNav() {
    document.getElementById("mySidenav")
    .style.width = "0";
   }

let btn = document.querySelector("#confirm");
btn.addEventListener("click",con);


   function con(){
    let number = document.querySelector("#num").value 
    if(number.length!=10){
         alert("Invalid Number Entered");
    }
    else{
     localStorage.setItem("mymobile",number);
     document.querySelector("#mobile").style.display= "none";
     document.querySelector("#ver").style.display= "block";
     document.querySelector("#confirm").innerHTML= "Login";
     document.querySelector("#confirm").style.backgroundColor="grey";
     document.querySelector("#confirm").style.color="white";
     
     let i=45;
     document.querySelector("#timer").innerHTML="00:"+i;
     let id=setInterval(function(){
        i--;
        document.querySelector("#timer").innerHTML= "00:"+i;
        let d1= document.querySelector("#digi1").value;
        let d2= document.querySelector("#digi2").value;
        let d3= document.querySelector("#digi3").value;
        let d4= document.querySelector("#digi4").value;
        if( d1!="" && d2!="" && d3!="" && d4!="" ||(i==0))
        {
            document.querySelector("#confirm").style.backgroundColor="black";
            document.querySelector("#timer").style.display="none";
            let btnn= document.querySelector("#confirm");
            btnn.addEventListener("click",login)
            clearInterval(id)
        }
     },1000)
    }
   }

   

   function login(){
    alert("Login Successful");
    document.getElementById("mySidenav").style.width = "0";
   }