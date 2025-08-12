 document.addEventListener("DOMContentLoaded",function(){

 let form= document.getElementById("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

let isValid=true;
let nameError= document.getElementById("nameError");
let emailError= document.getElementById("emailError");
let messageError= document.getElementById( "messageError");
let successMessage = document.getElementById("successMessage");
let Username= document.getElementById("name")
let email= document.getElementById("email")
let message= document.getElementById("message")


nameError.textContent="";
emailError.textContent="";
messageError.textContent="";
successMessage.textContent="";


if(Username.value.trim() ===""){
nameError.textContent="Name is required";
isValid=false;
}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

if(message.value.trim()===""){
messageError.textContent="Message cannot be empty";
isValid=false;
}

if(isValid){
    successMessage.textContent="Form submitted successfully! ";
console.log("Username:",Username.value);
console.log("Email",email.value);
console.log("Message",message.value);
    form.reset();
alert("form submitted successfully")
}
})
 })
