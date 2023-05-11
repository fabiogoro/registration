let star = "*";

function validationsPageThree() {
  let image = document.querySelector("#image").value;
  try {
    new URL(image);
    document.querySelector("#imageValidation").textContent = "";
    return true;
  } catch (err) {
    document.querySelector("#imageValidation").textContent = star;
    return false;
  }
}
