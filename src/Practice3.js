//https://www.fullstack.cafe/blog/javascript-code-interview-questions
//CallBack function
/*
function modify(arr, callback){
    console.log("I am modifying the function");
    arr.push(100);
    callback();
}
var arr = [1, 2, 3];
function callfuntion(){
    console.log("array is modified", arr);
}
modify(arr, callfuntion);

//Reverse the string
Input_String = function(str){
    return str.split("").reverse().join("");
}
console.log(Input_String("I am Student"));


//To confirm that if an object is an array
//arrayList = [1, 2, 3]
function greet(param){
    //if(Object.prototype.toString.call(param) === '[object Array]'){
      //  console.log(Object.prototype.toString.call(param));
}
greet(1);

//To delete an Array
var Array_List = ["A", 1, "B", "C"];
//Array_List = [];
Array_List.splice(0, Array_List.length);
console.log(Array_List);

// bind method

const Boy = {
    Name: "Bharat",
    caste: "Sharma",
    Age: 24,
    Info: function(){
        return "The Name " + this.Name + " with caste " + this.caste + " his age is: " + this.Age;
    }
}

var Boy2= function(){
    return "The Name " + this.Name + " with caste " + this.caste + " his age is: " + this.Age;
}
console.log(Boy2.bind(Boy)());


// create object from Student prototype
let Student = {
    name: "Lisa",
    age: 24,
    marks: 78.9,
    display() {
      console.log("Name:", this.name);
    }
  };
  
  let std1 = Object.create(Student);
  
  delete Student.name;
  //delete std1.name;   //not possible because name property is not inside std1 object.
  std1.display();
  
  

 
 //IIFE function in which we function is invoked by giving value at the end of function declaration.
 var output = (function(x){
    delete x;  // it can not because delete is used to delete the property.
    return x;
  })(0);

  console.log(output);
 */ 

  var globalVar = "ABC";
  (function(OuterVar){
    var OuterFuncvar = "X";
    (function(InnerVar){
        var InnerFuncVar = "Y";
        console.log(
            "outerArg: " +OuterVar + " \n" +"Globalvar: " +globalVar +" \n" +"InnerVar: " +InnerVar +" \n" +"InnerFuncVar: " +InnerFuncVar)
    })(6)
  })(5)
