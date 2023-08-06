const image = document.getElementById('image');

let x = 15;
let y = 1;

document.addEventListener("keydown",(event)=>{
switch(event.key){
    case "ArrowUp":
        if(x !== -10){
            x--
        }else{
           x=50 
        }
        break
        case "ArrowDown":
            if(x == 55){
                x= -10
            }else{
                x++
            }
    case "ArrowRight":
        if(y == 100){
            y = -110
        }  else{
            y++
        } 
        break
    case "ArrowLeft":
    if(y == -110){
        y = 100
    }else{
        y--
    }         

}
image.style.marginTop = x+"%"
image.style.marginLeft = y+"%"
console.log(y)
})

                                     