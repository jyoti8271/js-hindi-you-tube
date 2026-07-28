//basic variable declaration
let name="jyori"
console.log(name)


//number addition
let a=10
let b=20
console.log(a+b)

//update varibale value
let c=30
c=20
console.log(c)


//string concatenation
let firstname="jyoti"
let secondname="kumari"
console.log(firstname+" "+secondname)

//boolean variable
//check user is logged in
let isloggedin=true
console.log(isloggedin)


//swap variable
let d=20
let e=40
let temp=d
d=e
e=temp
console.log(d,e)


//calculate total price
let price=20
let gst=18
let total=("total price is:", price+gst)
console.log(total)


///undefined variable
let data;
console.log(data)

//hoisting trick
console.log(f)
var f=20

//let vs temporal dead zone
//console.log(g)  //////////refrence error
//let g=20

///const mutation trick
const user = { name: "Jyoti" };
user.name = "Singh";
console.log(user.name);


//const reassignment
const x=30;
//x=20;
console.log(x)



///scope challenge
let h=5
function test()
{
    h=10
    console.log(h)
    
}
 console.log(h)
test()


///block scope
{
    var i=1
    var j=2
}

console.log(i)
console.log(j)


///shadowing
let k=100
if(true){
    let k=200
    console.log(k)

}
console.log(k)


//variable+ function hoisting mix
console.log(z)
var z=function()
{
    return 10;
};


//const obj vs re assign
const obj={value:1}
//obj={value:2}
console.log(obj.value)


///Global vs local scope
let m=10
function demo()
{
    m=20;
}
demo()
console.log(m)


///
var n=1;
function foo()
{
    console.log(n)
    var n=2
}
foo()

///simple calculator using variables
let o=10
let p=20
console.log(o*p,o+p,o-p,o/p)


//find largest number
let q=10
let r=20
let s= 30

if(q>r&& q>s)
{
    console.log(q)

}
else if(r>s && r>q)
{
    console.log(r)
}
else
{
    console.log(s)
}


///swap two number  without using 3rd variable
let ab=30
let ba=20
ab=ab+ba
ba=ab-ba
ab=ab-ba

console.log(ab,ba)


///check even or odd
let num=7
if(num%2==0)
{
    console.log("even")
}
else{
    console.log("odd")
}




////count the number
let number=12345
console.log(String(number).length)

///reverse the number
let number1=12345
let reverse=(String(number1).split('').reverse().join(''))
console.log(number1)
console.log(reverse)


//check positive ,negative or zero
let number2=-5
if(number2>0)
{
    console.log("positive")
}
else if(number2<0){
    console.log("negative")
}
else{
    console.log("zero")
}


////simple login check
let theUserLoggedIn=false
if(theUserLoggedIn)
{
    console.log("login sucessful")
}
else{
    console.log("invalid credential")
}


//string +variable logic
let name5="jyoti"
let age=18
console.log(`my name is ${name5} and i am ${age} years old`)


//temperature convertes
let celsius=30
let farhenhite=(c*9/5)+32
console.log(farhenhite)

//grade system
let marks=85
if (marks>=90)
{
    console.log("A+")
}

else if(marks >=75 && marks<=89)
{
    console.log("B")
}

else if(marks>=50 && marks<=74)
{
    console.log("C")
}

else{
    console.log("D")
}