
function oddSquares(oddArray){
    let arr=[];
    for(let i=0; i<oddArray.length; i++){
        if(oddArray[i]%2!== 0){
          arr.push(  oddArray[i] * oddArray[i])
         
         
        }
       
    }
    return arr;


}
console.log(oddSquares([1, 2, 3, 4, 5, 6]));
