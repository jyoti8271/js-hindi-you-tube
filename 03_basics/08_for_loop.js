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




//............................practice question............................................
//1 to 10

for(let i=0;i<=10;i++)
{
    const num=i
    console.log(num)
}

//sum of 1 to 10 number
sum=0;
for(let i=1;i<=10;i++)
{
    
    sum+=i
}
console.log(sum)

/////even number print from 1 to 20
for(let i=0;i<=20;i++)
{
    if(i%2===0)
    {   
        console.log(i)
    }
    else{   
        console.log(i)
    }
}

///table of 5
for(let i=0;i<=10;i++)
{
    console.log(5*i)
}

//print array elements
arr=["sjik","hgdhd","jdh"]
for(let i=0;i<arr.length;i++)
{
    
    console.log(arr[i])
}


////sum of array

/*const arr = [1, 2, 3, 45];

let sum5= 0;

for(let i = 0; i < arr.length; i++) {
    sum5+= arr[i];
}

console.log(sum5);*/



////find largest number in array
const large=[2,3,4,5,6]
let arr[0]
for(let i=0;i<=length;i++)
{
    if(i>large)
    {
        console.log(large)
    }
}


