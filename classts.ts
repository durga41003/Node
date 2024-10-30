class Student{
    constructor(public name : string, public marks:number) {}
    result(): void{
        console.log(`${this.name} scored ${this.marks}`);
    }
}

const stud=new Student("ABC",90);
stud.result();