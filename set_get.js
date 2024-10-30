var Studet = /** @class */ (function () {
    function Studet() {
        this._name = "Aman Rathod";
    }
    Object.defineProperty(Studet.prototype, "name", {
        // Getter method to return name
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Studet.prototype, "course", {
        // Setter method to set the course name
        set: function (thecourse) {
            this._course = thecourse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Studet.prototype, "semester", {
        //check the sem and insert the sem
        set: function (thesem) {
            if (thesem > 8 || thesem < 1) {
                throw new Error("Enter correct semester");
            }
            this._sem = thesem;
        },
        enumerable: false,
        configurable: true
    });
    return Studet;
}());
// Access any property of the Student class
var student = new Studet();
// Setter call
student.course = "Web Development";
student.semester = 5;
console.log(student);
