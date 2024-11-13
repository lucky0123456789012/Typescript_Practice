/*
//Array map
let A = [1, 2, 3, 4]
let ArrayMap3 = A.map((num, index)=>{
    return `${num}: ${index}`;});
console.log(ArrayMap3);
console.log(A);

//anothe example
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35 }
  ];

let funcArray = (user) => {
    return {
        id: user.id,
        name: user.name,
        age: user.age 
    } ;
}
let arrayMap4 = users.map(funcArray);
console.log(arrayMap4);
console.log(users);

//Array filter
let funcArray1 = (user1, index) => {
    return user1.age ==25 && index == 1
}

console.log(users.filter(funcArray1));
*/
//To convert Obj to Array
let Obj = {id: "Key", Name: "Bharat", Type: "car" }
debugger;
console.log(Object.keys(Obj));
console.log(Object.values(Obj));
debugger;
console.log(Object.entries(Obj));


