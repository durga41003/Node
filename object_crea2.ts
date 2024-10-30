function employee(emp_fn,emp_ln,emp_age){
    this.fn=emp_fn;
    this.ln=emp_ln;
    this.age=emp_age;
}
var person1= new employee("Raj","Rai",45);
console.log("Name :", person1.fn, person1.ln,"  Age :",person1.age);