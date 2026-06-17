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




    //.........................practice question...................

    //1. sum of array
    const arr3=[1,2,3,4,5]
    const inital=0;
   const result= arr3.reduce((acc,currentvalue)=>
    {
        return acc+currentvalue
    },inital)
    console.log(result)


    //2.product of array
    const arr4=[2,2,3,4,5,]
    
    const result1=arr4.reduce((acc,currval)=>{
        return acc*currval
    },2)
    console.log(result1)



    //3. largest number
    const arr5=[78,2,3,43,43,4,4123,332,3]
    const initial=0
    const result2=arr5.reduce((acc,currval)=>
    {

        if(currval>acc)
        {
            return currval

        }
        else
        {
            return acc
        }
    })
    console.log(result2)


    ///4.smallest number
    const arr6=[2,3,4,5]
    
   resul= arr6.reduce((acc,curr)=>
   {
    if(curr<acc)
    {
      return  curr
    }
    else
    {
       return  acc
    }
   },3)
   console.log(resul)


   //sum of even number
   const sumeven=[1,8,4,93,2,3,2]
   const sum=sumeven.reduce((acc,curr)=>
{
if(curr%2===0)
{
   return acc+curr
    
}
else{
    return acc;
}
},2)
console.log(sum)


//total character count kr0
const string=["jyoti","kumari"]
const count=string.reduce((acc,curr)=>
{
  return acc+curr.length
},2)






