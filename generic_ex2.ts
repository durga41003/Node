interface samp<T>{
    name: T[]; //generic variable
    id:number
}
let person: samp<string> = {name:["Raj","Rao"],id:1234}
console.log(person);