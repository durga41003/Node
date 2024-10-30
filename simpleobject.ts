class StudentMarks{
    name:string;
    marks: number;
    constructor(name: string, marks:number){
        this.name=name;
        this.marks=marks;
    }
    result(){
        console.log(`Student ${this.name} scored ${this.marks}`);
    }
}
const student=new StudentMarks('Ram',90);
console.log(student.name);
student.result();

