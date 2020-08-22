let object={
    title:'musical industry',
    videoOwnerName:'prajakta gawali',
    videoDescription:'chal chayya chayaa',
    videoLength:15,
    
}

console.log(object);
console.log(`owner name ${object.videoOwnerName} and description ${object.videoDescription}`);


let akshay= {
    day : 'monday',
    meetings: 0,
    meetDone:0
}

let bracket = function (happy, rest){
    happy.meetings= happy.meetings + rest
}

let curly = function (happy, rest){
    happy.meetDone= happy.meetDone + rest
}

let getSummary = function (happy){
    let johnLeft = happy.meetings - happy.meetDone

    return ` you are ${johnLeft} meeting today`
}

bracket(akshay, 5)
curly(akshay, 2)
console.log(akshay)
console.log(getSummary(akshay))




