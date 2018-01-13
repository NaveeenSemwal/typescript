 class  Student{ 

    constructor(name, age) { 
       this.Name = name; 
       this.Age = age; 
    } 


    test() { 
        console.log("The Name of Student is : ", this.Name) 
        console.log("The Age of Student is: ",this.Age) 
     } 

     // These are the Properties.
     set NameProperty(value)
     {
         this.Name= value;
     }

     get NameProperty()
     {
         return this.Name;
     }

     static StudentInit()
     {
         console.log("This is the static method...............");
     }
 }

 var obj = new Student("naveen",26);
 obj.test();
 Student.StudentInit();

 obj.NameProperty="Kamal";
 obj.test();
 
 