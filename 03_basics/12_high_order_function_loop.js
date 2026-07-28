const coding =["a","b","c","d"]
coding.forEach(function (items)
{
    console.log(items)
})

/////////////foreach using function
function primetime(item)
{
    console.log(item)
}
coding.forEach(primetime)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


const mycoding1=[
    {
        languagename:"jyoti kumari",
        branch:"cse Ai"
    },
    {
        languagename:"javascript",
        work: "webdevelopment"
    }
]
mycoding1.forEach((item) => {
    if(item.languagename){
        console.log(item.languagename)
    }
})



