let previousButton = document.querySelectorAll("#previousbutton");
let nextButton = document.querySelectorAll("#nextbutton");

// make previous button move to the previous page
function backButtonNavigate(stepNumber) {
    let neededPageNumber = stepNumber - 1;
    pageManager.redirect(`page${neededPageNumber}.html`)
}

// find the number of the page where button is located 
function backButton() {
    previousButton.forEach((button) => {      
            const stepNumber = parseInt(button.getAttribute("step"))
            backButtonNavigate(stepNumber);
        })    
}

// validating fields, raise alert and move to the next page upon next button click
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

// find the number of the page where button is located 
function nextButtons() {
    nextButton.forEach((button) => {
            const stepNumber = parseInt(button.getAttribute("step"))
            nextButtonNavigate(stepNumber);
        })
}
