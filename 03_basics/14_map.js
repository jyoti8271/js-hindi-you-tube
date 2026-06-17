//using map function
const mynumbers=[1,2,3,4,5]
const newnum=mynumbers.map((num) => num>2)
console.log(newnum)

////using for eachloop

const mynumber = [12,3,4,56,78]

mynumber.forEach((item) => {
    if(item > 3){
        console.log(item)
    }
})