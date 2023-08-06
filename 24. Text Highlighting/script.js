const button = document.getElementsByClassName("button")[0];
const para = document.getElementById("paragraph")
button.addEventListener("click",()=>{
    const parArr = para.innerText.split(' ')
    // console.log(parArr)
    for(let i = 0; i<parArr.length;i++){
        if(parArr[i].length >=8){
            const high = document.createElement("span")
             high.classList.add('highlight')
            high.innerHTML = parArr[i]
            high.style.backgroundColor = "yellow"
            high.style.color = "black"
            parArr[i] = high.outerHTML
        }
    }
    para.innerHTML = parArr.join(' ')
})