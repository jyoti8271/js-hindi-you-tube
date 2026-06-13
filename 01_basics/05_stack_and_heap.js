// stack(primitive), heap(non-primitive)
// stack is the used for the variables of copy
//heap is used for the refernece of original value

//stack
let myyoutube="jyoti.com"
let anothername= myyoutube

anothername="chai or code"

console.log(myyoutube)
console.log(anothername)

//Heap
let userone=
{
    email:"jyoti8271singh@gmail.com",
    upi:"user@ybl"
}
let usertwo=userone
console.log(usertwo)

usertwo.email="jyoti9334singh@gmail.com"
console.log(userone)
console.log(usertwo)

