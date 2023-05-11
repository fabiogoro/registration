let previousButton = document.querySelector("#previousbutton");
let nextButton = document.querySelector("#nextbutton");
let form = document.querySelector("#form");

nextButton.onclick = function (e) {
  e.preventDefault()
  if(!form.checkValidity()) form.reportValidity()
  else {
    const stepNumber = parseInt(this.getAttribute("step"))
    pageManager.redirect(`page${stepNumber+1}.html`)
  }
}

previousButton.onclick = function (e) {
  e.preventDefault()
  const stepNumber = parseInt(this.getAttribute("step"))
  pageManager.redirect(`page${stepNumber-1}.html`)
}
