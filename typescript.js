// To compile a typerscript file :     tsc typescript.ts

// Run JS file  : node typescript.js

var Student = (function () {
    function Student(_name) {
        this._name = _name;
    }
    return Student;
})();
