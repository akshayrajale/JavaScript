let sayHello = function(name){
    console.log(name)
}

sayHello('sammy')

sayHello = (name)=>{
    console.log(name)
}

sayHello('sammy')


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

let index = prajakta.filter((happy)=>{
          return happy.isDone==true
})

console.log(index)