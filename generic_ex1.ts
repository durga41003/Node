function getArray<Type>(array: Type[]){
    return array;
}
const arr_str=getArray<string>(["John","Ram","Shiva"]);
console.log(arr_str);


function getValue<T,V>(name:string,id:number){
    return `Name: ${name}, ID: ${id}.`;
}
console.log(getValue("John",23));




