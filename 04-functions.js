let sayHello = function(){
    console.log('grant permission by collage');
    console.log('hey user');
}
sayHello();

let fullName = function(name){
    
    console.log(`hey ${name}`);
}
fullName('john');

let fullNameMaker= function(firstname, lastname){
    console.log(`your name is ${firstname} ${lastname}.`);

}
fullNameMaker('Prajakta','Gawali');

let adder = function(num1,num2){
    let added= num1 * num2;
    return added;
}
let result=adder(5,2);
console.log(result);

let guestUser= function(name, courseCount) {
    console.log(`hey your name is: ${name} and your course count number is : ${courseCount}`)
}
guestUser('akshay',1);

let getMyGrade= function (currentMark,totalmark){
    let myPercent=(currentMark/totalmark)*100;
    let myGrade;

    if(myPercent>=90){
        myGrade='A';
    }else if(myPercent>=80){
        myGrade='B';
    }else if(myPercent>=60){
        myGrade='C';
    }else {
        myGrade='F';
    }

    return `your grade:${myGrade} and my percentage:${myPercent}`
}

console.log(getMyGrade(50,100));

let month=[ 'jan','feb','march','april','may','june','jully','august','spt','oct','nov','dec']

month.forEach(function(month,index){
      console.log(`month number ${index+1} --- ${month}`)
})