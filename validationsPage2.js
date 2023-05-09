let houseValid = true;
let star = "*";

function validationsPageTwo(){
    if (!validCityAndStreet() || houseValid == false){
        return false;
    } else {
        return true;
    }
}

function validCityAndStreet(){
    let city = document.querySelector('#cityID').value;
    let street = document.querySelector('#streetID').value;
    if (!city){
        document.querySelector('#cityValidation').textContent = star;
        return false;
    } else if (!street){
        document.querySelector('#streetValidation').textContent = star;
        return false;
    } else {
        return true;
    }
}



function validateHouseNumber(){
    let houseInput = document.querySelector('#houseID').value;
    if(!houseInput){
        houseValid = true;
        document.querySelector('#houseValidation').textContent = "house address is optional";
    } else if (houseInput <= 0){
        houseValid = false;
        document.querySelector('#houseValidation').textContent = "house address cannot be 0 or negative";
    } else {
        houseValid = true;
        document.querySelector('#houseValidation').textContent = "";
    }
}



    