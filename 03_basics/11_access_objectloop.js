
const myobject={
    name:'jyoti',
    branch:'cse',
}
for(const obj in myobject)
{

    console.log(myobject[obj])
    //console.log(obj)
}


/////////////////////////for in loop using array
const programming=["js","rb","dc"]
    for (const key in programming)
    {
        console.log(programming[key])
    
    }



///////////////////for in loop using in map........................> it gives an error because map is not iterable
const map=new Map()
map.set('in','india')
map.set('br','bihar')
map.set('fr','france')

for (const place in map)
{
    console.log(map)
}

