let arr:string[]= ["Apple","Mango","Grapes"];
for(let i in arr){
    console.log(arr[i])
}
let arr1:string[]= new Array("orange","lemon");
for(let i=0;i<arr1.length;i++){
    console.log(arr[i]);
}
arr1.push("Strawberry","peers","pineapple"); //push
console.log(arr.splice(0,2)); //splice
console.log(arr.reverse()); //reverse
let arr3:number[] =[3,9,0,41];

let sum:number = arr3.reduce((a,b) => //reduce
{
  return a+b;
},0);

console.log(sum);
let arr2:number = arr3.unshift(2,4,5);//unshift operation

arr.concat(arr1); //concat
console.log(arr);

let val:number|undefined;
val= arr3.pop();

///foreach
arr3.forEach((num: number)=>{
    console.log(num);
});

let res:string =arr3.toString(); //toString()


