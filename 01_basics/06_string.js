const name="jyoti"
const repo=78

// console.log(name+repocount+"value")// doesnot used for the standard code

//console.log(``)//using backticks
console.log(`Hello my name is ${name} and my repo count is ${repo}`) //it is called string interpolatation,easily use any method,

const gamename= new String('hiteshhc') // check this code on google console it gives the key value pairs 
console.log(gamename)


console.log(gamename[0])
console.log(gamename.__proto__)// it gives the blank curly braces that means it hold the many objects
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))//character position
console.log(gamename.indexOf('t'))//character index value

const newstring=gamename.substring(0,4)
console.log(newstring)

const anotherstring=gamename.slice(-7,4)
console.log(anotherstring)

const spacestring="      jyoti      "
console.log(spacestring)
console.log(spacestring.trim())        //for removing space  used


const url="https://jyoti.com/jyoit%34"
console.log(url.replace('34','='))



console.log(url.includes('sundar'))
console.log(gamename.split('='))

