
// Earlier function declaration and calling
var result= function() {
    
    return 10;
}

console.log(result());


// This is the example of arrow function
var data =  ()=>
{
    return 20;
};


// Avoid using var keyword. Instead use CONST or LET 
var data1 =  (fname,lname)=>
{
    return "My name is "+ fname+lname;
};

console.log(data1("naveen "," semwal"));