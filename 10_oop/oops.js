const user={
    username:"jyoti",
    logincount:9,
    signedin:true,


    getUserDetails: function()
    {
       // console.log("got user details from database")
       // console.log(`username: ${this.username}`)
       console.log(this);
    }
}

const user2={
    username:"jyoti",
    logincount:9,
    signedin:true,


    getUserDetails: function()
    {
       // console.log("got user details from database")
       // console.log(`username: ${this.username}`)
       console.log(this);
    }
}
///////the objects are made repeatedy for same task for diffrent user so we use the constructor or function for time saving and make the code efficent
//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this)






//////////////////////Constructor function//////////////////////////////
//const promiseOne=new Promise() ///----->new keyword is the constructor function it is used to from one objects to make multiple instances
//const date =new Date()

function User(username,loginCount,isLoggedIn)
{
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn


    this.greeting=function()
    {
        console.log(`welecome ${this.username}`)
    

    return this //----------------> if we not user return the implicitly value is return --> u may be use or not does'nt affect 
    }
}

const userOne=new User("hitesh",12,true)
const userTwo=new User("chai or code",11,false)
console.log(userOne.constructor); //////////////constructor proprties is refrence of itself
console.log(userTwo)  ////////read about  the method  instance off
