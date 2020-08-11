let marks=35;
if(marks>90){
    console.log('grade1');
}else if(marks>70){
    console.log('grade2');
}else if(marks>40){
    console.log('grade3');
}else{
    console.log('fail');
}


let bal
let wid
let deposit

let withdrow = function(a, b,c){
     if(a>b && (a-b) >= 1000) {
         console.log(`balance: ${a-b}`)
     } else {
         console.log("low balance")

     }

    if(b%100 == 0) {
        console.log( b/200);
    }else{
    console.log("invalid")
    }
}
withdrow(50000, 5000)

