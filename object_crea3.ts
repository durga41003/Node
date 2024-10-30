let emp={
    firstname: " Raj ",
    lastname: " Rai "
}

function display(obj:{firstname:String, lastname:String}):void{
   console.log("Name :", obj.firstname, obj.lastname);
}
display(emp);