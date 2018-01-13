"use strict"

// to run this file :  node inheritance.js

// super keyword is just like base keyword in c#

class Employee
{
    constructor(name, age, weight)
    {
        this.name=name;
        this.age= age;
        this.weight= weight;
    }

    GetDetail()
    {
        console.log("My name is "+ this.name);
    }
}

var obj=new Employee("naveen",27,76);
obj.GetDetail();


class PermanentEmployee extends Employee
{
    constructor(name, age, weight,employeeType)
    {
      super(name, age, weight);
        this.employeeType= employeeType;
    }


    GetEmployeeType()
    {
        console.log("My employeeType is "+ this.employeeType);

        super.GetDetail();
    }
}

var obj=new PermanentEmployee("semwal",27,76,"Permanent");
obj.GetDetail();
obj.GetEmployeeType();
