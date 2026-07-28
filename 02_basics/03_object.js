//singleton

//object literals
// Object.create --------->constructor method



//const jsuser={}

      //object literals

     /* const jsuser1={
        name:"jyoti"
    
    }

    console.log(jsuser1)*/

let mysym = Symbol("key1");

const user = {
    name: "jyoti",
    age: 90,
    "full name": "jyoti kumari",
    [mysym]: "mykey1",
    Location: "jaipur",
    email: "jyoti8271singh@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"],
};

// Functions freeze se pehle add karo
user.greet = function() {
    console.log("hello user");
}

user.greetingtwo = function() {
    console.log(`hello js user, ${this.name}`);
}

Object.freeze(user);

user.greet();
user.greetingtwo(); node 02_basics/04_objects.js




