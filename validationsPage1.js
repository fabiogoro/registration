const validRegEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let birthdayUpdated = false;

function validationsPageOne(){
    if (validateName() && validateEmail() && birthdayUpdated == true){   //birthday is 'true' if any input, even 01/01/0001 or 03/03/3333
        console.log("valid")
    } else {
        console.log("not valid")
    }  
}

function validateName(){
    let name = document.querySelector('#nameID').value
    let myArray = name.split(" ")
    if (!myArray[0] || myArray[1] == undefined || myArray[0].length < 2 || myArray[1].length < 2){
        return false;
    } else {
        return true;
    }
} 

function validateEmail(){
    let email = document.querySelector('#emailID').value
    if (!email || !validRegEmail.test(email)){
        return false;
    } else {
        return true;
    }
}

function updateIfBirthdayHasInput(){
    birthdayUpdated = true;
}