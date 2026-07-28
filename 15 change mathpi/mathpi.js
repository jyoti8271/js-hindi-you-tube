const Descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Descriptor)



//console.log(Math.PI)
//Math.PI=5
//console.log(Math.PI)


const chai={
    name:"ginger chai",
    price:250,
    isAvailabel:true,

/////////////code fTNA
    orderChail:function()
    {
        console.log("chai nhi bnai")
    }
    //////


}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"))




Object.defineProperty(chai,'name',{//writable:false,
     enumerable:true})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))



for(let [key,value]of Object.entries(chai))
{
    if(typeof value!=='function')
    {
    console.log(`${key} : ${value}`) /////it throw the error of iterable becuause it tis object
    }
}