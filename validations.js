//const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const validRegEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let name = document.getElementById('nameInput').value;
let email = document.getElementById('emailInput').value;
let birthday = document.getElementById('birthdayID').value;

function validationsPageOne(){
    if(checkName() && checkEmail()){
        return true;
    } else {
        return false;
    }
//email valid
//birthdate - has input     
}

function validationsPageTwo(){
//city
//street
//house number - optional - not 0 and not negative
}

function validationsPageThree(){
//image url
}

function checkName(){
    let myArray = name.split(" ")
    if (myArray[0].length > 1 && myArray[1].length > 1){
        return true;
    }
    // if(!regName.test(name)){
    //     return false;
    // }else{
    //     return true;
    // }
}

function checkEmail(){
    if (validRegEmail.test(email)){
        return true
    } else {
        return false
    }
}
