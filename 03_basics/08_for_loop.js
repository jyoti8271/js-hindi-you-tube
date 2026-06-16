const array=[1,2,3,45]
for(let index=0; index<Array.length; index++)
{
    console.log(array[index])
}


for (let i=1; i<=10; i++)
{
    console.log(`outer loop value is :${i}`)
    for(let j=1; j<=10; j++)
    {
        console.log(`outer loop value is ${i} and inner loop value is ${j}`)
      //  console.log(i+'*'+j+'='+i*j)
    }
}




/////
for(i=0;i<=10;i++)
{
    const element=i;
    if(i===5)
    {
        
        console.log("5 is best number")
    }
    console.log(element)
}


//////////for loop used in array
let myarray=["ram","shyam","mahesh"]
console.log(myarray.length)

for(i=0; i<=myarray.length; i++)///<= ---> it gives output undefined
{
    const arr=myarray[i];
    console.log(arr)
}



////break and continue 

for(let i=0; i<=10; i++)
{
    if(i===5)
    {
        console.log("detected 5")
        continue;
    }

console.log(`value of i is ${i}`)    
}