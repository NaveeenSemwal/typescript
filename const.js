
/*

“const” keyword was introduced in ES6. It lets you define read only variables using JavaScript. 
Variables created using “const” are block scoped(or bracket scoped).
 Redeclaring a “const” variable in the same scope throws an error.

*/



const age= 25;

if (true) {
    
 console.log("Previous age is  "+age);

 //age=35; // This will give your error . Assignment to constant variable.

 //console.log("New age is  "+age);



 const name ="naveen";

 console.log("Name inside is "+ name);
}

const name ="semwal";

console.log("Name outside is "+ name);
