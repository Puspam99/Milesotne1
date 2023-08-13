// Q13  Bill splitter


function billSpliter(foodCost , NumOfPeople){
    const totalBill = foodCost*NumOfPeople;
    const billPerPerson = totalBill / NumOfPeople;
    return{
        totalBill : totalBill,
        billPerPerson: billPerPerson
    }
}

let costOfEachDish = 7;
let numOfPeople  = 10;
let bill = billSpliter(costOfEachDish, numOfPeople);
console.log(bill);