let previousButton = document.querySelectorAll("#previousbutton");
let nextButton = document.querySelectorAll("#nextbutton");
let submitButton = document.querySelectorAll("#submitbutton");
let newuserButton = document.querySelectorAll("#newuserbutton");
// let pages = document.querySelectorAll("#page")

function backButtonNavigate(stepNumber) {
    let neededPageNumber = stepNumber - 1;
    pageManager.redirect(`page${neededPageNumber}.html`)
}

function backButton() {
    previousButton.forEach((button) => {
        // button.addEventListener("click", () => {
            const stepNumber = parseInt(button.getAttribute("step"))
            backButtonNavigate(stepNumber);
        })
    // })
    
}

function nextButtonNavigate(stepNumber) {
    let neededPageNumber = stepNumber + 1;
    if (stepNumber === 1 && validationsPageOne() == true)  {
        pageManager.redirect(`page${neededPageNumber}.html`)
    }  else if (stepNumber === 2 && validationsPageTwo() == true)  {
        pageManager.redirect(`page${neededPageNumber}.html`)
    } else if (stepNumber === 3 && validationsPageThree() == true)  {
        pageManager.redirect(`page${neededPageNumber}.html`)
    } else {
        alert("Please fill in all required field")
    }    
}

function nextButtons() {
    nextButton.forEach((button) => {
            const stepNumber = parseInt(button.getAttribute("step"))
            nextButtonNavigate(stepNumber);
        })
    
}

// function nextButton() {

// }

// function submitButton() {

// }
