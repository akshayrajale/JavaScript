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


let withdrow = function(a, b){
     if(a>b && (a-b) >= 1000 && b%100 == 0) {

        let twoThousand = Math.floor(b/2000);
        console.log(`Two Thousand : ${twoThousand}`)
        let temp = b%2000;

        let oneThousand= Math.floor(temp/1000);
        console.log(`One Thousand ${oneThousand}`);

        temp = temp%1000;

        let fiveHundred= Math.floor(temp/500)
        console.log(`Five Hundred ${fiveHundred}`)

        temp= temp%500;

        let twoHundred= Math.floor(temp/200)
        console.log(`Two hundred ${twoHundred}`)

        temp= temp%200;


        let oneHundred=Math.floor(temp/100)
        console.log(`One hundred ${oneHundred}`);

        temp= temp%100;
        console.log(`Your available balance is : ${a-b}`)


    } else {
         console.log("Invalid")
     }
}

withdrow(50000, 43000)
withdrow(0, 43000)
withdrow(123030, 200)
withdrow(1200, 200)


