// Q12 Calculate rental cost

    function rentalCost(typeOfCar , NumOfDays){
        if (typeOfCar === 'Economy'){
            return NumOfDays*4000    
        }
        else if(typeOfCar ==='Midsizd'){
            return NumOfDays*10000
        }
        else if(typeOfCar === 'Luxury'){
            return NumOfDays*20000
        }
    }

    let typeOfCar = 'Luxury'
    let NumOfDays = 6
    let result = rentalCost(typeOfCar , NumOfDays)
    console.log(result);