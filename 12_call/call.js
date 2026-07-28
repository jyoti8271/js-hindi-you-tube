function SetUserName(username)
{
    ///////////complex db calll
    this.username=username
    console.log("called")
}


function CreateUser(username,email,password)
{
    SetUserName.call(this,username)
    this.email=email
    this.password=password
}

const chai=new CreateUser("chai","jyoti8271singh@gmail.com",123)
console.log(chai)
