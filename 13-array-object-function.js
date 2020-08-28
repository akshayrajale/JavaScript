
let akshay = ['mon','tue','wedn','thur']

console.log(akshay)

console.log(akshay.indexOf('tue'))

console.log(akshay[akshay.indexOf('tue')])




let prajakta = [{
    title : 'prajakta is good girl',
    isDone: true
},{
    title:'prajakta is naugty girl',
    isDone:false
},{
    title:'prajakta is very beutiful girl',
    isDone:true
}]



let bracket = prajakta.findIndex(function(happy){
       console.log(happy)
        return happy.title== 'prajakta is good girl'

})

 console.log(bracket)



let palla= function(happy, title){
    let palla1= prajakta.findIndex(function(name,palla1){
        return name.title===title
    })

    return prajakta[palla1]
}

let printMe= palla(prajakta, 'prajakta is naugty girl')

console.log(printMe)





let prajakta1 = [{
    title : 'prajakta is good girl',
    isDone: true
},{
    title:'prajakta is naugty girl',
    isDone:false
},{
    title:'prajakta is very beutiful girl',
    isDone:true
}]


let palla2= function(happy, title){
    let palla1= prajakta1.find(function(name,palla1){
        return name.title===title
    })

    return palla1
}

let printMe1= palla2(prajakta1, 'prajakta is good girl')

console.log(printMe1)








































