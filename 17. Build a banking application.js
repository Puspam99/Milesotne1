// 17. Build a banking application

let account = {
    name: "Rishu",
    balance: 500
}
function balanceUpdate(withdowl){
    if (withdowl>account.balance){
        console.log("Insufficient Balance");
    }else{
        account.balance -= withdowl;
        console.log("Remaining balence is:"+account.balance)
    }
}
balanceUpdate(400)