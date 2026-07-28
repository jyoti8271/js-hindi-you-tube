const requestUrl='https://api.github.com/users/hiteshchoudhary'
const xhr=new XMLHTTPRequest();
xhr.open('Get',requestUrl)
xhr.onreadyStateChange=function()
{
    console.log(xhr.readystate);
    if(xhr.readyState===4)
    {
        const data=JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.followers);
    }
}
xhr.send();