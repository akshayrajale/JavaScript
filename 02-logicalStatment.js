let formSubmit=false
let addmission=true
let paidFees=false
let student=true

if (formSubmit && addmission &paidFees){
    console.log('you are eligible for entry');
    console.log('you are eligible for going to collage');
}else if(formSubmit || paidFees){
    console.log('please pay addmission fees then you will be get entry in collage');
}else{
    console.log('you are not grant in collage');
}



let king='john'
if(true){
    let king='sam'
    
    if (true){
        let king ='ram'
    }
    console.log(king); 
}
if(true){
    console.log(`i am second part: ${king}`)
}




