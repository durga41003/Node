interface props {
	id: number
}

function getInfo <T extends props>(data:T[]):T[]{
	return data;
}

console.log(getInfo([{id:123,name:"John"},
	{id:345,name:"debruyne"},
	{id:789,name:"sam"}]));
