 let cart = [2,3,4,5,6]
    function doubleCartQuantity(cart){
        for(let i= 0; i<cart.length; i++){
            cart[i] *= 2;
        }
    }
    doubleCartQuantity(cart)
    console.log(cart)
