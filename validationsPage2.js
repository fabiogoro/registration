let houseValid = true;

function validationsPageTwo(){
    let city = document.querySelector('#cityID').value;
    let street = document.querySelector('#streetID').value;
    if (!city || !street || houseValid == false){
        console.log("not valid")
        return false;
    } else {
        console.log("valid")
        return true;
    }
}

function validateHouseNumber(){
    let houseInput = document.querySelector('#houseID').value;
    if(!houseInput){
        houseValid = true;
    } else if (houseInput <= 0){
        houseValid = false;
    } else {
        houseValid = true;
    }
}



    