interface samp1<T extends {id:number}>{
  date:T[];
}
interface objsamp{
    id:number;
    name:string;
    age:number
}
let per:objsamp = {id:23,name:"john",age:34};
console.log(per);