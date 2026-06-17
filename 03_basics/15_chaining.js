/////syntax

///const new nums=mynumbers.map().map().filter()

const mynumbers=[1,2,3,4,56]
const newnums=mynumbers.map((item)=>item*10).map((item)=>item+3).filter((item)=>item>=2)
console.log(newnums)

const mynumbers=[1,2,3,4,56]

const newnums = mynumbers
    .map((item) => item * 10)
    .map((item) => item + 3)
    .filter((item) => item >= 2)

console.log(newnums)
