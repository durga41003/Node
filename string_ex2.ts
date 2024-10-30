function Pers (name:string, id:number){
    this.name=name;
    this.id=id;
}
var pers=new Pers("Ajay",89);
Pers.prototype.email="ajay@gmail.com";
console.log(pers.name);
console.log(pers.email);
