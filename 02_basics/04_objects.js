//singleton object
const tinderuser=new Object()
console.log(tinderuser)

//non singleton object
const tinderuser1={}
console.log(tinderuser)

 tinderuser1.id="123abc"
 tinderuser1.name="jyoti"
 tinderuser1.isloggedin=false

 console.log(tinderuser1)




 const regularuser={
    email:"jtoti@com",
    fullname:{
        userfullname:{firstname:"jyoti",lastname:"singh"}
    }
 }

 console.log(regularuser)
  console.log(regularuser.fullname.userfullname)



  ///combining object

  const obj1={1:"a",2:"b"}
  const obj2={3:"a",4:"b"}

  //const obj3={obj1,obj2}


  ////const obj3=Object.assign(obj1,obj2) //all values are going in memory in obj1
  //const obj4=Object.assign({}, obj1 , obj2)


  const obj3={...obj1,...obj2}


  console.log(obj3)
  //console.log(obj4)




const users=[
    {
        id:1,
        emial:"jyoti@.com"
    },
    {

    },
    {

    }
]

user[1].email
console.log(tinderuser);
console.log(Object.keys());
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));



console.log(tinderuser.hasOwnProperty('isloggedin'));






  



