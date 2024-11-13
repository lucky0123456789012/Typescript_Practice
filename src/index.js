
/*var obj = {
    a: "hello"
  };
  
  function modify(o) {
    //o.a += " world";
    o = {a : "Bharat"};
  }
  
  modify(obj);
  console.log(obj.a); //prints "hello world"

  */
/*
  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  };

  function updateBrand(obj) {
    // Mutating the object is visible outside the function
    obj.brand = "Toyota";
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    //obj = null;
  }

  console.log(car.brand); // Honda

// Pass object reference to the function
updateBrand(car);

// updateBrand mutates car
console.log(car.brand); // Toyota

*/

let obj1 = { value: 10 };

function test12 (object1){
    object1: numbe = {value : 20};

}
console.log(obj1.value); // Outputs: 10

test12(obj1);
console.log(obj1.value); // Outputs: 20