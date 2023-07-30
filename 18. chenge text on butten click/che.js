
        let hedding = document.querySelector("h1")
        let button = document.querySelector("button");
        button.addEventListener("click", ()=>{
            if(hedding.innerText ==="The most affordable learning platform"){
                hedding.innerText = "PW Skills"
            }else{
                hedding.innerText = "The most affordable learning platform"
            }
        })
        