
const coding=["j","y","o","t","i"]
const values=coding.forEach((item)=>
{
    console.log(item)
    return item
})
//console.log(values)   ------------> it does not return any value ///o/p --->undefined
/////so,,,, we are using filter funtion to return the value
const mynums=[1,2,3,4,5,6,7,8]
const newnums=mynums.filter((num)=>  num>4)
console.log(newnums)




const mynums1=[1,2,3,4,56,78]
const newnums2=mynums1.filter((item)=>  {
   return item>4
})
console.log(newnums2)



const num=[1,2,34,56]
const newnum=[]
num.forEach((item)=>{
    if(item>2)
    {
        newnum.push(item)
    }
})
console.log(num)
console.log(newnum)