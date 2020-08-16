let superHeros=[ 'spiderman','ironman','capt.america','thor']

console.log(superHeros);
console.log(superHeros[0]);
console.log(superHeros[1]);
console.log(superHeros[2]);
console.log(superHeros[superHeros.length-1]);

console.log(`we have ${superHeros.length} super heros.`)





let numbers= ['one','two','three','four','five','six']

console.log(` total length: ${numbers.length}`)

console.log(numbers.shift());

numbers.shift();

console.log(numbers);

let numbers1= ['one','two','three','four','five','six']

numbers1.unshift('something');

console.log(numbers1);

numbers1[2]='prajakta'
console.log(numbers1);


let numbers2= ['one','two','three','four','five','six']
numbers2.pop();
console.log(numbers2);


let numbers3= ['one','two','three','four','five','six']
numbers3.push('pallavi');

console.log(numbers3);

let numbers4= ['one','two','three','four','five','six']

numbers4.splice(4,2,'seven');
console.log(numbers4);


let myTodos = [];

myTodos.push('grant permission by collage')
myTodos.push('you are a very sweet and salty')
myTodos.push('food are very testy')

myTodos.forEach(function(todo,index){
       console.log(`your task no.:${index+1} and ${todo}`)
})



