/////goal is 
/*
let myname="jyoti          "
let mychannel="chai   "

console.log(myname.trim().length)
console.log(myname.truelength);*/


let myHeros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getsSpiderPower: function () {
        console.log(`spidey power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function () {
    console.log("jyoti is present in all objects")

    //giving power to the array
    Array.prototype.heyHitesh=function()
    {
    console.log(`hitesh says hello`)
    }
}
//heropower.hitesh()
//myHeros.hitesh()

//heropower.heyHitesh()





/////////////////////Inheritance///////////////
const user=
{
    name:"jyoti",
    email:"jyoti8271singh@gmail.com"
}

const teacher=
{
    makevideo:true
}

const teachingsupport=
{
    isavailable:false
}

const support={
     makeassignment:'js sssignmenta',
     fulltime:'true',
     __proto__:teachingsupport

}

teacher__proto__=user

//////////////////////////modern syntax
Object.setPrototypeOf(teachingsupport,teacher)

let anotherUserName="chai or code"
String.prototype.truelength=function()
{
    console.log(`${this}`



    )
    console.log(`true length is:${this.trim().length}`)
}

anotherUserName.truelength()
"hitesh".truelength()
"icetea".truelength()


