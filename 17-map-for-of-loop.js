let john ={
    name:'i am john',
    age:24,
    isActive:true
}

let marry ={
    name:'i am marry',
    age:26,
    isActive:true
}
let sam ={
    name:'i am sam',
    age:25,
    isActive:true
}

let users= new Map()

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

console.log(users)

console.log(users.size)

console.log(users.get('sam'))

console.log(users.keys())

console.log(users.values())

for( let key of users.keys()){
    console.log(key)
}

for( let value of users.values()){
    console.log(value)
}

for( let [key,value] of users.entries()){
    console.log(key +'=' + value.name)
}


users.forEach((value,key)=> console.log(key +'=' + value.name))
