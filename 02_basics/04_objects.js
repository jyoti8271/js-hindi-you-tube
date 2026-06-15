//const tinderuser={} //non singleton 
const tinderuser=new Object()//singleton
console.log(tinderuser)

tinderuser.id="1234"
tinderuser.email="sammy@gmail.com"
tinderuser.isloggedin=false

console.log(tinderuser)

//nested objects
const regularuser={
    email:"jyoti8271singh@gmail.com",
    fullname:{userfullname:{firstname:{
        lastname:{

        }
    }

    }

    }
}

console.log(regularuser.fullname?.firstname)//       ?----> is used for the if else condition the full name is exists in the objects or not
///

const obj1={"1":"a"}
const obj2={"2":"b"}
const obj3={"3":"c"}
console.log(obj3)
console.log(obj1,obj2)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)

//when the value comes from the database
const user=[
    {
        id:1,
        email:"jyoti8271singh@gmail.com"

    }
    
]

console.log(tinderuser)
console.log(object.keys())
console.log(object.values())
console.log(object.entries())//every key- value pairs are change into an array
console.log(object.hasOwnProperty('isloggedin'))





