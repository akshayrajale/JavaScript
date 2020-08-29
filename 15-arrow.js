const mobile= {
    price:10000,
    weight:2000,

    func: function(){
        return `This is the ${this.price}$  for mobile`
    }
}
console.log(mobile.func())


const mobiles= {
    price:10000,
    weight:2000,

    func: ()=>{
        return `This is the ${this.weight}$  for mobile`
    }
}
console.log(mobiles.func())