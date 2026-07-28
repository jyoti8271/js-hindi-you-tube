const inputslider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copybtn = document.querySelector("[data-copyButton]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercasecheck = document.querySelector("#uppercase");
const lowercasecheck = document.querySelector("#Lowercase");
const numbercheck = document.querySelector("#Number");
const symbolcheck = document.querySelector("#Symbol");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generatebutton");
const allcheckbox = document.querySelectorAll("input[type=checkbox]");

const symbols= "!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~";


let password="";
let passwordLength=10;
let checkcount=1;
///ste strength color to grey



//set password length  -> password length ko ui pr reflcet krwata hai
function handleSlider(){
    inputslider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
}


function setIndicator(color){
indicator.style.backgroundColor=color;
///shadow
}


function getRndInteger(min,max)
{
  return  Math.floor(Math.random()*(max-min)+min)
}


function generateRandomNumber(){
    return getRndInteger
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123))}


function generateUpperCase()
{
    return String.fromCharCode(getRndInteger(65,90))
}    

function generateSymbol()
{
    const randNum=getRndIntegr(0,symbols.length)
    return symbols.charAt(randNum)
}


function calcStrength()
{
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hassym=false;

    if(uppercasecheck.checked) hasUpper=true;
    if(lowercasecheck.checked) hasLower=true;
    if(numbercheck.checked) hasNum=true;
    if(symbolscheck.checked) hasSym=true;


    if(hasUpper && hasLower &&(hasNum||hassym) && passwordlength>=8)
    {
        setIndicator('#0f0')
    }

    else if ((hasLower||hasUpper) && (hasNum||hassym)&& passwordlength>=6)
    {
        setIndicator('#ff0')
    }
    else{
        setIndicator('#f00')
    }
}



async function copycontent()
{
    try{
         await navigator.clipboard.writeText(passwordDisplay.value)
         copyMsg.innerText="copied"
    }

    catch{
            copyMsg.innerText="Failed"
    }
        ///to make copy wala span visisble
    copyMsg.classList.add("active")

    setTimeout( ()=> {
        copyMsg.classList.remove("active");
        
    },2000 );



    function shufflePassword




    function handleCheckboxchange(){
        checkcount=0;
        allcheckbox.forEach((checkbox)=>
        {
            if(checkbox.checked)
                checkcount++;
        })
    }

    /////special condition
    if(passwordLength<checkcount)
    {
        passwordLength=checkcount;
        handleSlider();
    }




////////////////alll check box//////////
    allcheckbox.forEach((checkbox) =>
    {
        check.addEventListener('change',handleCheckboxchange);
    })

    //////event listener

    inputslider.addEventListener('input',(e)=>
    {
        passwordLength=e.target.value
        handleSlider();
    }
    )


    copybtn.addEventListener('click',()=>
    {
        if(passwordDisplay.value)
            copycontent();
    })


    /////////Generate Password////////////////

    generateBtn.addEventListener('click',()=>
    {
     //none of the checkbox are selcted
     if(checkcount<=0) return;
     if(passwordLength=checkcount)
        {
            handleSlider();
        }   
        ////////let"s start the journey to find new password
        //remove old password
        
        password="";


        ///let's put the stuff mentioned by checkboxes
/*
        if(uppercasecheck.checked)
        {
            password+=generateUpperCase();
        }

         if(lowercasecheck.checked)
        {
            password+=generateLowerCase();
        }

         if(numbercheck.checked)
        {
            password+=generateRandomNumber();        }

         if(symbolcheck.checked)
        {
            password+=generateSymbol();
        }

*/

        let funarr=[];
        if(uppercasecheck.checked)
            funarr.push(generateUpperCase);

         if(lowercasecheck.checked)
            funarr.push(generateLowerCase);

         if(numbercheck.checked)
            funarr.push(generatRandomNumber());

          if(symbolcheck.checked)
            funarr.push(generateSymbol);

          /////////compulsory addition

          for(let i=0; i<funarr.length;i++)
          {
            password+=funarr[i]();
          }


          /////////remaining addition 
          for(let i=0; i<passwordLength-funArr.length);
          {
            let randIndex=getRndInteger(0,funarr.length)
            password +=funarr[randIndex]();
          }


          ///////shuffle the password
          password=shufflePassword(Array.from(password));
          passwordDisplay.value=password;
          ///calculate strength
          calcStrength();

    })


    


}
