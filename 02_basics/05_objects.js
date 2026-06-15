//Destructing
const course={
    coursename:"web development",
    price:1000,
    courseinstructor:"jyoti"
}

console.log(course)


const{courseinstructor}=course
console.log(courseinstructor)

//destructor
const{courseinstructor:instructor}=course
console.log(instructor)


//used in React
/*const navbar=(props.comapny)=>
    {

    }
 navbar(company="jyoti")   


 const navbar=({company})=>
    {

    }
 navbar(company="jyoti") */


 //json files

/*
 {
    coursename:"web development",
    price:1000,
    courseinstructor:"jyoti"
}
*/





