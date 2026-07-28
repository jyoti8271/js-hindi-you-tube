const myarr=[0,1,5,8,5]
console.log(myarr)


const myarr1=new Array(1,2,3,4)
console.log(myarr1[3])


//Array Methods
myarr.push(9)
console.log(myarr)

myarr.pop()
console.log(myarr)

myarr.unshift(9)         //placed before the 0 index
console.log(myarr)

myarr.shift()
console.log(myarr)


console.log(myarr.includes())
console.log(myarr.indexOf(3))

//join
const newarr=myarr.join()
console.log(myarr)
console.log(newarr)
console.log(typeof myarr)
console.log(typeof newarr)


//Difference between slice and splice
console.log("A",myarr)

const n1=myarr.slice(1,3)
console.log(n1)

console.log("B",myarr)
const n2=myarr.splice(1,3)
console.log(n2)

console.log("c",myarr)
console.log(n2)













