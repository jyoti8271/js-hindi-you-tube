//primitive ----> 7 type
//1. string
//2. number
//3. number
//4. boolean
//5. null
//6. undefined
//7. symbol
//8. bigint

const score=100
const scorevalue=100.4
const Loggedin=false
let useremail="jyoti8271singh@gmail.com"

const id= Symbol("1,23,4")
const anotherid=Symbol("1,23,4")

console.log(id===anotherid)

const bigNumber=1234566666666677777777777n //last mai n represetnt krna hia


//Reference type(Non- Primitive)
// 1. Array
// 2.objects
// 3.Functions


//arrat
const heros=["shaktiman","nagraj","doga"]
//object
let myobj={
    name:"jyoti",
    age:15,

}

const myFunction =function()
{
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction); //object function bola jata hai

console.log(typeof null);
console.log(typeof anotherid);





