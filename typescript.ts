
// To compile a typerscript file :     tsc typescript.ts

// By declaring a private property in the constructor it will do the two things.
// 1) parameterized constructor 2) Created properties of that class.

class Student {
    constructor(private _name: string) {
        
    }
}