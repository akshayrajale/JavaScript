let userEmail= 'pallu'
let passward= 'abc@!123456'

let userChecker= function(user){
     if((user.includes(123)) && (user.length> 8)){
         return true
     }else{
         return false
     }
}

console.log(userChecker(userEmail))


let palla= function(pass){

    if((pass.includes(123)) && (pass.length>8) && (pass.includes('@!'))){
        return true
    }else{
        return false
    }
}
console.log(palla(passward))

