let a  = {
    name: "hggjjj",
    age: 20
}
console.log(a)

let Student = {
    name: "akshay",
    age: 26,
    id: 21222,
}
//console.log(Student)

function Student1(firstName, lastName, id, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this. age = age;
}

let Student2 = new Student1("Akshay", "Rajale", 22, 22);
let Student3 = new Student1("rohit", "pawar", 24, 20);
let Student4 = new Student1("hemant", "kulkarni", 22, 36);
let Student5 = new Student1("jonn", "doe", 22, 35);

console.log(Student2)
console.log(Student3)
console.log(Student4)
console.log(Student5)

