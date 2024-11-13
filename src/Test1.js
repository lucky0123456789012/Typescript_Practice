/*
//Arrow function
const Foo = (param1, param2) => {let result = param1*param2;
    return result;};
console.log(Foo(2, 3));

//Another Arrow function
const Soo = (param3) => param3 * 20;
console.log(Soo(3));

//Arrow function with if-else condition but here same condition with Ternary operator
const Too = (param5) => {return (param5>=10) ? "age is for marriage" : "age not for marriage";};
console.log(Too(10));


const abc = (a)=> {return (a < 10) ? 'valid is this' : 'invalid is this';}
console.log(abc(9));

//Array Practice
let array1 = [2, 3, "Bharat", true];
let ArrayType = Array.isArray(array1);
console.log(ArrayType);
//Array practice continued
let ArrayType2 = Array.isArray([1, 2, 3]);
let ArrayType3 = Array.isArray(new Array("a", "b"));
console.log(ArrayType2);
console.log(ArrayType3);


//Program to confirm that input is an array or not by creating a function
//let input = Array.isArray();
let functionArray = function(input){
    if (Array.isArray(input)){
        return "This is an array";
    }
    else{
        return "Not an array";
    }
    }
console.log(functionArray([1, 2]));
console.log(functionArray());


//Array Practice
const persons = ["A", "B", "C", "D"];
persons[3] = "G";
//console.log(persons.at(-2));
//console.log(persons[0]);
//console.log(persons);
for(let item of persons){
    console.log(item);
};

for(let i=0; i<persons.length;i++){
    console.log(persons[i]);
};

for(let item in persons){
    console.log(item);
};

//For each Array

const customers = [
    {givenName : "Johan", surname: "Doe"},
    {givenName : "Jane", surname: "Client"},
    {givenName : "Bobby", surname: "Person"}
];
//Array Map() method
let Arraymap = customers.map((value, index)=>{
    return(`${index} : ${value.givenName} ${value.surname}`);
   // return(`${index} : ${nextValue.givenName} ${nextValue.surname}`);
})
//console.log(customers);
console.log(Arraymap);

const ArrayType4 = [1, 3, 4, 5]
const func4 = function(n){
    return 2*n;
} 

//console.log(func4(2));
const ArrayMap1 = ArrayType4.map(func4);
console.log(ArrayMap1);
console.log(ArrayType4);

const ArrayMap2 = ArrayType4.map((x)=>{return 3*x});
console.log(ArrayMap2);
*/
/////////---------------------

