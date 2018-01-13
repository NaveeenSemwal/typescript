
// COMMAND  : node EcmaScript.js

/* “let” keyword was introduced in ES6. It lets you define block scope(bracket scope) variables in JavaScript.
 Initially JavaScript only supported function scope and global scope variables.
 
 “let” keyword limits the variables accessibility upto a block, statement or expression.
 */
if(true)
{
    let x = 12;
    console.log(x); // 12
}

// UnComment this 
// console.log(x); // x is not defined

//********************************************************************************************************/

// This is the difference b/w var and let keyword.

if(true)
{
    var y= 20;
    console.log("The inside is "+ y);
}

console.log("The outside is "+ y);