let arr = ['mobile' , 'charger' , 'earphone' , 'laptop' , 'mobile'];
for(let i = 0; i<arr.length ; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            delete arr[i]
        }
    }
}
console.log(arr)