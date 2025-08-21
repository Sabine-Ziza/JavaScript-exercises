// You are given an array of product objects, each containing a name (string) 
// and a price (number). Your task is to implement a function 
// called sortProducts that sorts the products based on their 
// prices in ascending order. 

const sortProduct= (obj)=> {
    let arr=[]
    for(let i=0; i<obj.length; i++){
        arr.push(obj[i].price)

    }
let sortObject = arr.sort((a,b)=> a-b)
return sortObject;
}
console.log(sortProduct([{name:'milk', price:200},{ name:'sugar',price:500},{ name:'shoes', price:300}]))