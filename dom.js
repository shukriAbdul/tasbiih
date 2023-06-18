// let element = document.getElementById("divMy")
// element.innerHTML ="hello dom";
// element.style.backgroundColor = "green";
// console.log(element)


// let element2 = document.querySelector("p") 
// element2.innerHTML ="hello my name is shukri";
// element2.style.backgroundColor ="black";  
// element2.style.color = "white";
// console.log(element2)

// let element3 = document.querySelector(".mySS");
// element3.style.backgroundColor = "red" ; 
// element3.style.fontSize ="20px";
// element3.innerHTML ="hello my name is shukri";

// console.log(element3)

 

// let btn = document.querySelector("button")
// btn.style.backgroundColor = "darkblue";
// btn.style.color = "white";
// btn.style.border = "none";
// btn.style.borderRadius = "5px";
// btn.style.width = "100px";
// btn.style.height = "30px";


// btn.addEventListener("click", () =>{
//     element.style.color = "white";
//     element.style.textTransform ="uppercase";
//     element.style.width = "250px";
//     element.style.textAlign = "center";
//     btn.style.border = "none";
//     btn.style.border = "2px solid darkblue";
//     btn.style.color = "black";
//     btn.style.backgroundColor = "transparent";
   

// })

let innerValue = 0;
let value1 = document.querySelector("p")

let btn = document.querySelector(".btn1")
btn.style.backgroundColor = "rgb(14, 58, 98)";
value1.style.color = "red";
btn .style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.width = "100px";
 btn.style.height = "30px";

 btn.addEventListener("click", () =>{
  innerValue++;
    value1.innerHTML = innerValue; 
    if(innerValue==10){
      value1.style.color = "blue";
     }
     else{
    value1.style.color = "black";
     }
    // if(innerValue==2){
    //   body.style.backgroundColor = "red";
    // }else if(innerValue ==3){
    //   body.style.backgroundColor = "green";
    // }else if(innerValue ==4){
    //   body.style.backgroundColor = "yellow";
    // }else if(innerValue ==5){
    //   body.style.backgroundColor = "orange";
    // }else{
    //   body.style.backgroundColor = "white";
    // }
    if(innerValue >=5 &&  innerValue <=10){
      btn.style.border = "none";
       btn.style.border = "2px solid darkblue";
         btn.style.color = "black";
          btn.style.width = "100px";
         btn.style.backgroundColor = "transparent";
    }
    else{
      btn.style.backgroundColor = "rgb(14, 58, 98)";

      btn .style.color = "white";
     btn.style.border = "none";
     btn.style.borderRadius = "5px";
     btn.style.width = "100px";
     btn.style.height = "30px";


    }
   
    

    // btn.style.border = "none";
    //   btn.style.border = "2px solid darkblue";
    //   btn.style.color = "black";
    //   btn.style.width = "130px";
    //  btn.style.backgroundColor = "transparent";

     
});
let btn3 = document.querySelector(".btn3")
btn3.style.backgroundColor = "rgb(44, 18, 68)";

btn3.style.color = "white";
btn3.style.border = "none";
btn3.style.borderRadius = "5px";
btn3.style.width = "100px";
btn3.style.height = "30px";

btn3.addEventListener("click", () =>{
 
if(innerValue >0){
  innerValue--;
    value1.innerHTML = innerValue ; 
   if(innerValue==0){
    value1.style.color = "red";
   }
   else if(innerValue==10){
    value1.style.color = "blue";
   }else{
    value1.style.color = "black";
   }
  //  if(innerValue==2){
  //   body.style.backgroundColor = "black";
  // }else if(innerValue ==3){
  //   body.style.backgroundColor = "darkgreen";
  // }else if(innerValue ==4){
  //   body.style.backgroundColor = "darkblue";
  // }else if(innerValue ==5){
  //   body.style.backgroundColor = "orange";
  // }else{
  //   body.style.backgroundColor = " rgb(41, 47, 60);";
  // }

   
    // btn.style.border = "none";
    //   btn.style.border = "2px solid darkblue";
    //   btn.style.color = "black";
    //   btn.style.width = "130px";
    //  btn.style.backgroundColor = "transparent";
    } 
    if(innerValue >=5 &&  innerValue <=10){
      btn.style.border = "none";
       btn.style.border = "2px solid darkblue";
         btn.style.color = "black";
          btn.style.width = "100px";
         btn.style.backgroundColor = "transparent";
    }
    else{
      btn.style.backgroundColor = "rgb(14, 58, 98)";

      btn .style.color = "white";
     btn.style.border = "none";
     btn.style.borderRadius = "5px";
     btn.style.width = "100px";
     btn.style.height = "30px";


    }
    
     
}
);  

let btn1 = document.querySelector(".btn2")
btn1.style.backgroundColor = "darkblue";
btn1.style.color = "white";
btn1.style.border = "none";
btn1.style.borderRadius = "5px";
btn1.style.width = "100px";
 btn1.style.height = "30px";

btn1.addEventListener("click", () =>{
    innerValue = 0;
    value1.innerHTML = innerValue;
    // btn.style.border = "none";
    //   btn1.style.border = "2px solid darkred";
    value1.style.color = "red";
    //   btn1.style.width = "130px";
    //  btn1.style.backgroundColor = "transparent";
       
     
})
value1.style.fontSize = "50px"


let body = document.querySelector("body")
