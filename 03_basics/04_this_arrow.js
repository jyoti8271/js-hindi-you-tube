const user={
    username:"jyoti",
    price:99,
     welcomemessage:function()
    {
        console.log(`${user},welcome to website`);
       // console.log(this)
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this)












function chai()
{
    let username="jyoti"
    console.log(this)
}
chai()


const chai1= function()
{
    let username="jyoti"
    console.log("this username")
}
chai()


//Arrow function 
const addtwo=(num1,num2)=>{
    return num1+num2
}

console.log(addtwo(3,4))

//////implicit return -----------------> Does not use return kewyword
const addwo=(num1,num2)=>num1+num2
console.log(addwo(3,6))



//////object return 
const addtwo=(num1,num2)=>({username:"jyoti"})
console.log(addtwo(3,4))
