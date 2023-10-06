const username=document.getElementById('username');
const email=document.querySelector('#email');
const phone=document.querySelector('#phone');
const mytext=document.getElementById('mymessage');
var name_error=document.getElementById('error-name');
var error_email=document.getElementById('error-email');
var error_phone=document.getElementById('error-phone');
var error_message=document.getElementById('error-message');
const sbm=document.getElementById('submit');

let validuser=false;
let validphone=false;
let validemail=false;
let validmytext=false;



username.addEventListener('keyup',function(){
  var usersname=username.value.trim();
  if(usersname.length==0)
  {
    name_error.style.color='red';
    name_error.innerHTML='Name is required';
    validuser=false;
  }
   else if(!usersname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
   {
    name_error.style.color='red';
      name_error.innerHTML="Write full Name";
      validuser=false;
   }
   else{
    name_error.style.color='green';
    name_error.innerHTML='<i class="fa-solid fa-check"></i>';
    validuser=true;
   }
   
});



phone.addEventListener('keyup',function(){
    var phn=phone.value.trim();
    if(phn.length==0)
    {
        error_phone.style.color='red';
        error_phone.innerHTML="Phone number is required";
        validphone=false;
    }
    if(phn.length>0)
    {
        if(!phn.match(/^[0-9]{11}$/))
        {
            error_phone.style.color='red';
            error_phone.innerHTML="Phone number should be in digits (0-9)";
            validphone=false;
        }
        else if(phn.length==11)
        {
            error_phone.style.color='green';
            error_phone.innerHTML='<i class="fa-solid fa-check"></i>';
            validphone=true;
            }
            else if(phn.length>11)
            {
                error_phone.style.color='red';
                error_phone.innerHTML="Phone number should be in digits (0-9)";
                validphone=false;
            }
        }
    
   
 
    
  
    

})


email.addEventListener('keyup',function(){
    var mail=email.value.trim();
    if(mail.length==0)
    {
        error_email.style.color='red';
        error_email.innerHTML="Email required";
        validemail=false;
   
    }
    if(mail.length>0)
    {
        if(!mail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
        {
            error_email.style.color='red';
            error_email.innerHTML="Invalid Email";
            validemail=false;
        }
        else{
            error_email.style.color='green';
          error_email.innerHTML='<i class="fa-solid fa-check"></i>';
    validemail=true;
        }
       
    }
   
   
})



mytext.addEventListener('keyup',function()
{
var txt=mytext.value;
var req=30;
var left=req-txt.length;
if(left<0)
 {
 error_message.innerHTML='out of range';
error_message.style.color='red';
mytext.style.color='red';
validmytext=false;

}
else if(left==0 )
{
  error_message.innerHTML='valid number of charachters';
  validmytext=true;
  error_message.style.color='green';
mytext.style.color='green';
}
else if(left>0)
{
    error_message.innerHTML='valid number of charachters';
    validmytext=true;
    error_message.style.color='green';
  mytext.style.color='green';
  error_message.innerHTML=left+' '+'charachters left';
}
else{
    error_message.innerHTML=left+' '+'charachters left';
error_message.style.color='green';
mytext.style.color='green';


}

})


sbm.addEventListener('click',function(){
  
 if(!(validuser &&validphone&&validemail&&validmytext))
 {
    sbm.innerHTML='invalid data'
    sbm.style.color='red';
    setTimeout(() => {
        sbm.innerHTML='Submit Again' 
        sbm.style.color='red';
    }, 1000);
  

 }
 else{
    sbm.style.color='black';
    sbm.innerHTML='Successfully submited'
   setTimeout(() => {
    sbm.innerHTML='Submit'
    username.value='';
    email.value='';
    name_error.innerHTML='';
    phone.value='';
    error_phone.innerHTML='';
    mytext.value='';
    error_email.innerHTML='';
    error_message.innerHTML='';
   }, 3000);
   
  alert('Successfully submited')
 }
})




let data = window.performance.getEntriesByType("navigation")[0].type;
if(data==='reload')
   {
    username.value='';
    email.value='';
    phone.value='';
    mytext.value='';
   }
