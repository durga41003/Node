class Person{
    constructor(private firstName:string,private lastName:string ){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getName():string{
        return `Hello, name: ${this.firstName} ${this.lastName}.`;
    }
}
class Emp extends Person{
    constructor(firstName:string, lastName:string, private age:number){
       super(firstName,lastName);
    }
    display():void{
        console.log(super.getName());
        console.log(`Age:,${this.age}`);
    }

}
let emp=new Emp("Raj","Rao",34);
emp.display();
