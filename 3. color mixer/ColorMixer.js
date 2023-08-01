

function mixer(){
    event.preventDefault();
        let color1 = document.getElementById("color1st").value;
        let color2 =document.getElementById("color2nd").value;
    if(color1 == "red" && color2 == "blue" || color1 == "blue" && color2 == "red"){
        document.body.style.backgroundColor = "purple"
    }
    else if(color1 == "red" && color2 == "yellow" || color1 == "yellow" && color2 == "red" ){
        document.body.style.backgroundColor = "orange";
    }
    else if(color1 == "blue" && color2 == "yellow" || color1 == "yellow" && color2 == "blue"){
        document.body.style.backgroundColor = "green";
    }
    else{
        let popup = document.createElement("h2");
        popup.textContent = "Invalid color comination";
        document.body.appendChild(popup);
    }
    
}
    document.getElementById("submit").addEventListener('click',mixer)







// function mixer() {
//     let color1 = document.getElementById("color1st").value;
//     let color2 = document.getElementById("color2nd").value;
  
//     if ((color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red")) {
//       document.body.style.backgroundColor = "purple";
//     } else if ((color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")) {
//       document.body.style.backgroundColor = "orange";
//     } else if ((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")) {
//       document.body.style.backgroundColor = "green";
//     } else {
//       let popup1 = document.getElementById("popup");
//       popup1.innerText= "Invalid color combination";
      
//     }
//   }
  
//   document.getElementById("submit").addEventListener("click", mixer);



