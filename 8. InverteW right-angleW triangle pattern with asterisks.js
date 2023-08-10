let str = ""
for(let i = 0; i<6; i++){
    for(let j = 0; j<6-i; j++){
        str += '*'
    }
    console.log(str)
    str = ""
}