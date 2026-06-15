//name print
function greet(name)
{
    return "hello"+name+"!"
}
console.log(greet("jyoti"))



//function
function sayname()
{
    console.log("j")
    console.log("y")
    console.log("o")
    console.log("t")
    console.log("i")
}

sayname()

//function of two numbers
/*function addtwonumber(num1,num2)
{
    num1+num2
    return
}

const result=addtwonumber(3,4)
console.log(result)//----------------->o/p is undefinesd  */


//add two number
function add(num1,num2)
{
    let result=num1+num2
    return result
}
const result=add(3,4)
console.log(result)

//function add two
function addtwo(num1,num2)
{
   return result1=num1+num2
}
result1=addtwo(8,9)
console.log("result is",result)

//function ffor user are logged in
function loginusermessage(username)
{
    return `${username} just logged in`
}
console.log(loginusermessage("jyoti"))
console.log(loginusermessage({}))
console.log(loginusermessage())

//function  
function loginusermessage1(username)
{
    if(username===undefined)
    {
        console.log("please enter the username")
    }
    return`${username} just logged in `
}

console.log(loginusermessage1())
console.log(loginusermessage("jyoti"))


//calculatecartprice
function calculatecartprice(num1)
{
            return num1
}
console.log(calculatecartprice(3))

//another functiom
function calculateprice(val1,val2,...num1)
{
    return num1
}
console.log(calculateprice(23,89,90,75,))



//function using object

const user={
    name:"jyoti",
    price:89
}

function handleobject(anyobject)
{
    return `user name is ${anyobject.name} and the price will be ${anyobject.price}`
}
console.log(handleobject(user))

//another method to using function in objects
function handleobject1(anyobject)
{
      return `the name is ${anyobject.name} and the price will be ${anyobject.price} `
    
}
console.log(handleobject1({name:"jyoti",age:45}))

//in fuction we are using array 
 const mynewarray=[10,2,8,9,8,34,57]

function gettingarray(array)
{
    return array[5]
}
console.log(gettingarray(mynewarray))

//another method to call array
function arr(array)
{
    return array[0]
}
console.log(arr([10,67,89,78]))