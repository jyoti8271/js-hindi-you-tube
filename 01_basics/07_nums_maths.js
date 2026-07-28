const score=100
console.log(score)


const balance= new Number(100) //new keyword are used for the number
console.log(balance)

console.log(balance.toString().length)   //converting number to string  and define the length of number through string properties
console.log(balance.toFixed(2))

console.log(typeof balance) // o/p obj because num keyword give the key value number

const othernumber=123.8956
console.log(othernumber.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')) //it convert the number in the form of usd standard number




// @@@@@@@@@@@@@@  Maths  @@@@@@@@@@@@@@@@@@@@@@@jyoti8271
console.log(Math) // check on console for prototype
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.8))
console.log(Math.floor(8.5))
console.log(Math.sqrt(4))

//random
console.log(Math.random())
console.log(Math.random(8))
console.log(Math.random()*10)
console.log((Math.random()*10)+1)// 1 added beacause of avoiding 0.03 type of number


console.log(Math.floor(Math.random()*10)+1) //math.floor is added beacuse of to fix the number
 

//trick of min,max define and also it has a formula
const min=10 
const max=20
console.log(Math.floor(Math.random()*(max-min)+min))
