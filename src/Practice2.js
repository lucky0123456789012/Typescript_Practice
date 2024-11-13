/*

let Info = {
    Name: "Bharat",
    RollNumber: "33",
    Standard: (ClassNumber)=>{return ClassNumber},
    Score: {Math: 30, Science: 20 },
    Hobbies: ["Swim", "Run", "Reading"]
}
//console.log(`${Info.Name}, ${Info.Standard(2)}, ${Info.RollNumber}, ${Info.Score.Math}, ${Info.Hobbies[2]}`);


let Person = new Object({
    Name: "Bharat",
    RollNumber: "33",
    Standard: (ClassNumber)=>{return ClassNumber},
    Score: {Math: 30, Science: 20 },
    Hobbies: ["Swim", "Run", "Reading"]
});
console.log(typeof Person); 
console.log(`${Person.Name}, ${Person.Standard(2)}, ${Person.RollNumber}, ${Person.Score.Math}, ${Person.Hobbies[1]}`);
//let Man = Object.assign({}, Person);
let Man = { ... Person}
console.log(Man);

*/

//Create buttton using Javascriot Event Handling
// Create a button element
