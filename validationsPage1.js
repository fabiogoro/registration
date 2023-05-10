const validRegEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let birthdayUpdated = false;
let star = "*";

function validationsPageOne(){
    validateName()
    validateEmail()
    validateBirthday()
    if (validateName() && validateEmail() && validateBirthday()){   //birthday is 'true' if any input, even 01/01/0001 or 03/03/3333
        return true;
    } else {
        return false;
    }  
}

function validateName(){
    let name = document.querySelector('#nameID').value
    let myArray = name.split(" ")
    if (!myArray[0] || myArray[1] == undefined || myArray[0].length < 2 || myArray[1].length < 2){
        document.querySelector('#nameValidation').textContent = star;
        return false;
    } else {
        return true;
    }
} 

function validateEmail(){
    let email = document.querySelector('#emailID').value
    if (!email || !validRegEmail.test(email)){
        document.querySelector('#emailValidation').textContent = star;
        return false;
    } else {
        return true;
    }
}

function updateIfBirthdayHasInput(){
    birthdayUpdated = true; 
}

function validateBirthday(){
    if (birthdayUpdated == false){
        document.querySelector('#birthdayValidation').textContent = star;
        return false;
    } else {
        return true;
    }
}

