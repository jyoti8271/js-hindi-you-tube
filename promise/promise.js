
const promiseOne=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log('async is completed')
        resolve();
    },1000);
});
    
    promiseOne.then(function()
{
    console.log("promise consumed")
});











const promise=new Promise(function(resolve,reject){
    setTimeout(function()
    {
        console.log('async task 2')
        resolve();

    },1000);
});
    promise.then(function()
{
    console.log('asunc 2 solved')
})





const promiseThree=new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    resolve({username:'jyoti',Email:'jyoti8271singh@gmail.com'})
},1000)
})


promiseThree.then(function(user)
{
    console.log(user)
})




const promiseFour=new Promise(function(resolve,reject)
{
    setTimeout(function()
{
    let error=false
    if(!error)
    {
        resolve({username:"jyoti",password:"jyoti123"})
    }
    else{
        reject("Error: something went wrong")
    }


},1000)
})
///it throw th error 

/*
promiseFour.then(function(user)
{
    console.log(user)
})*/



////using reenabling method-------->(())


promiseFour
.then((user)=>
{
    console.log(user)
    return user.username
})

.then((username)=>
{
    console.log(username)
})
.catch((error)=>
{
    console.log(error)
})
.finally(()=>{
    console.log("the promise is either resolved or rejected")
})






////////////handle from Async///////////////
const promisefive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;

        if (!error) {
            resolve({
                username: 'jyoti',
                password: '123'
            });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

async function consumepromisefive() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromisefive();



