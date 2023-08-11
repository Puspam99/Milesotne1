
function password(){
let password1 = document.getElementById("password").value;
let password2 = document.getElementById("confirmpassword").value ;


    if(password1 == password2){
        alert("login successfull");
        }
            else{
        alert("recheck password")
    }
    
}


document.getElementById("submit").addEventListener('click', password);

