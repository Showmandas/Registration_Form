const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phn');
const pass=document.getElementById('password');
const conpass=document.getElementById('conpass');
console.log(form);
form.addEventListener('submit',(event) => {
	validation();
	event.preventDefault();
	

})



const sendData = (usernameval,sRate,count) =>{
   if(sRate===count){
       alert("Registration Complete!!");
       swal("Welcome! " +usernameval, "Registration Successful", "success");
      location.href=`response.html?username=${usernameval}`
   }
}
 const SuccessMsg = (usernameval) =>{
     let formControl = document.getElementsByClassName('group-form');
     var count=formControl.length - 1;
     for(var i=0;i<formControl.length;i++){
      if(formControl[i].className==='group-form success'){
          var sRate=0+i;
        //   console.log(sRate);
          sendData(usernameval,sRate,count);
      }else{
          return false;
      }
     } 
 }
//define validation function
const validation = () =>{
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const phoneval=phn.value.trim();
    const passval=password.value.trim();
    const conpassval=conpass.value.trim();
//more email validation
const isEmail=(emailval) =>{
    var Atsym=emailval.indexOf('@');
    if(Atsym < 1) return false;
    var dot = emailval.lastIndexOf('.');
    if(dot < Atsym + 2) return false;
    if(dot === emailval.length - 1) return false;
    return true;
}
//validate username
if(usernameval === ""){
    setErrorMsg(username,"pls fill up this field");
}else if(usernameval.length <= 2){
    setErrorMsg(username,"username minimum 3 character");
}else{
    setSuccessMsg(username);
}
//validate email
if(emailval === ""){
    setErrorMsg(email,"pls fill up this field");
}else if(!isEmail(emailval)){
    setErrorMsg(email,"Invalid Email");
}else{
    setSuccessMsg(email);
}
//validate phone
if(phoneval === ""){
    setErrorMsg(phone,"pls fill up this field!");
}else if(phoneval.length != 11){
    setErrorMsg(phone,"Invalid Phone Number!");
}else{
    setSuccessMsg(phone);
}
//validate password
if(passval === ""){
    setErrorMsg(password,"pls fill up this field");
}else if(passval.length <= 5){
    setErrorMsg(password,"min 6 character");
}else{
    setSuccessMsg(password);
}
//validate Confirm password
if(conpassval === ""){
    setErrorMsg(conpass,"pls fill up this field");
}else if(passval !== conpassval){
    setErrorMsg(conpass,"password doesn't match");
}else{
    setSuccessMsg(conpass);
}
  SuccessMsg(usernameval);
}

//Set Error message
function setErrorMsg(input,errormsgs){
    const groupForm=input.parentElement;
    const small = groupForm.querySelector('small');
    groupForm.className="group-form error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const groupForm=input.parentElement;
    groupForm.className="group-form success";
}