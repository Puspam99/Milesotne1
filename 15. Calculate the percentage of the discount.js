// 15. Calculate the percentage of the discount

let CalculateDiscount = (orignalPrice , discountPrice)=>
Math.round(((orignalPrice - discountPrice) / orignalPrice)*100);

const orignalPrice = 120
const discountPrice = 75
const discountPercentage = CalculateDiscount(orignalPrice , discountPrice)
console.log(discountPercentage +'%');


const squre = (n)=>{
    return n**2
}
function qube(n){
    return squre(n) ** n;
}
console.log(qube(3));