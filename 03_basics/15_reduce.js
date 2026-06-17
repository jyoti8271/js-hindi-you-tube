//Reduce----.user suppliedd user
///it gives accumulatoer and current value----->(current value that means array ka value jo diya hua hai)


const array=[12,3,4,56]

const initialvalue =0
const sumwithinitial=array.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialvalue);
console.log(sumwithinitial);









const mynums = [1,2,3]

const mytotal = mynums.reduce(function(acc, value) {
    console.log(`acc:${acc} and curval:${value}`)
    return acc + value
}, 3)

console.log(mytotal)





/*const mytotal=mynums.reduce((acc,curr)=>acc+curr)
console.log(mytotal)*/


///////////////////////////////shopping cart/////////////////////////
const shoppingcart=[
    {
        itemname:"js couse",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:8000
    },
    {
        itemname:"datasciencecouse",
        price:9000
    }]

    const value=shoppingcart.reduce((acc,item)=>acc+item.price,0)
    console.log(value)

