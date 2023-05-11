let houseValid = true;
let star = "*";

function validationsPageTwo() {
  if (!validCityAndStreet() || houseValid == false) {
    return false;
  } else {
    return true;
  }
}

function validCityAndStreet() {
  let city = document.querySelector("#city").value;
  let street = document.querySelector("#street").value;
  let output = true;
  if (!city) {
    document.querySelector("#cityValidation").textContent = star;
    output = false;
  } else document.querySelector("#cityValidation").textContent = "";
  if (!street) {
    document.querySelector("#streetValidation").textContent = star;
    output = false;
  } else document.querySelector("#streetValidation").textContent = "";

  let houseInput = document.querySelector("#house").value;
  if (!houseInput) {
    document.querySelector("#houseValidation").textContent = "house address is optional";
  } else if (houseInput <= 0) {
    output = false;
    document.querySelector("#houseValidation").textContent = "house address cannot be 0 or negative";
  } else {
    document.querySelector("#houseValidation").textContent = "";
  }
  return output;
}







