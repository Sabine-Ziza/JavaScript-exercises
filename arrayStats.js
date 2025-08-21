

const arrayStats=(arr)=> {
    
    let sum = arr.reduce((a,b)=> a + b, 0)
    let average=sum/arr.length

    let max= 0
    let min=10
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }

    }
    const obj={sum, average, max, min}
    return obj
    



}
console.log(arrayStats([1, 2, 3, 4, 5]))