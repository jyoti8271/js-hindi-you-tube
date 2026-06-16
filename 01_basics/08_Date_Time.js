let mydate= new Date()
console.log(mydate)
console.log(typeof mydate)
console.log(mydate.toLocaleString())
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleString())
console.log(mydate.toTimeString())
console.log(mydate.toUTCString())


console.log(typeof mydate)

//specific Date
let mycreatedate=new Date(2023,0,23,4,5,6)
console.log(mycreatedate.toLocaleString())
console.log(mycreatedate.toDateString())

//Time-Stamp
let Timestamp=Date.now()
console.log(Timestamp.toLocaleString())

//comparing milisecond
console.log(mycreatedate.getTime())

//convert in second
console.log(Date.now()/1000)// it take decimal value so we are using formula next line of code instead of this place
console.log(Math.floor(Date.now()/1000))

let newdate=new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(newdate.getDate())



newdate.toLocaleString('default',{
    weekday:"long"
})