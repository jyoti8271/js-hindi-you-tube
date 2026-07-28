
///////Array used for of loop


const arr=[1,2,3,4]
for(const arr1 of arr)
{
    console.log(arr1)
}




//when for of loop used in string
const greetings="hello baby"
for(const greet of greetings)
{
    console.log(`each character is:-->${greet}`)
}





/////////////////used map function()------> it doesnot take any duplicate value
const map=new Map()
map.set('in','india')
map.set('usa','united state')
map.set('br','bihar')
map.set('in','india')
console.log(map)

for(const [key,value] of map)
{
    console.log(key,value)
}



//////////////////////for of loop used an object but it will throw an error


/*
const  myobject={
    game1:'chess',
    game2:'rocket',
}

for(const game of myobject)
{
    console.log(game)
}*/
