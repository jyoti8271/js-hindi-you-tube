
const temp=90
if(temp ===95)
{
   console.log("less than 50")
   console.log("executed")
}
else{
   console.log("greater than 50")
}
//console.log("executed")



const score=200
if(score>100)
{
   const power="fly"
   console.log (`user have power:${power} to the sky`)
}
   //console.log(`user have power:${power} to fly`)


   //short hand notation
   const balance=1000
   if(balance>500)
      console.log('amount payable')



   //nesting
   if (balance<500)
   {
      console.log("less than ")
   }
   else if(balance<750)
   {

      console.log("less than 750")
   }
   else {
      console.log("invalid")
   }


   //user logged in 
   const userloggedin=true
   const debitcard=true
   const usercanloggedingoogle=false
   const usercanloggedinemail=true
   if(userloggedin&&debitcard)
   {
      console.log("buycourse")
   }
   else if(usercanloggedingoogle||usercanloggedinemail)
   {
      console.log("userloggedin")
   }
   else{
      console.log("invaliduser")
   }

   //switch
   const month=12
      switch(month)
      {
      case 1:
         console.log("january")
         break;

      case 2:
         console.log("february")
         break;
      case 3:
         console.log("march")
         break;

      case 4:
         console.log("april")
         break;
         
      case 5:
         console.log("may")
         break;
         
      case 6:
         console.log("june")
         break;  
         
      case 7:
         console.log("july")
         break;  
         
      case 8:
         console.log("august")
         break;   

      default:
         console.log("default case match")
         break;   

      }
   

      const useremail='jyoti.kumari@gmail.com'
      if(useremail)
      {
        console.log("got user eamil")
      }

      else{
         console.log("dont have a useer email")
      }
   

      //falsy values

      //false,0,-0,bigint(0n)," ",null,undefined,nan


      //truthy values
      //"0","false",[],{},function(){}--------->  empty function


      if(useremail.length===0)
      {
         console.length("array is empty")
      }

      const emptyobject={}
      if(Object.keys(emptyobject.length===0))
      {
         console.log("object is empty")
      }




      //////nullish coalenshing operator---------->??---> it is only used for the null and defined

      let val8;
      val8=5??8
      console.log(val8)


      let val1;
      val1=5??10
      val2=null??10
      console.log(val1);

      var3=undefined??15
      console.log(val1)
      console.log(val2)
      console.log(var3)



      ////ternary operator
      const iceprice=100
      iceprice<=80?console.log("buy"):console.log("not buy")