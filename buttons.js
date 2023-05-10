let previousButton = document.querySelectorAll("#previousbutton");
let nextButton = document.querySelectorAll("#nextbutton");
let submitButton = document.querySelectorAll("#submitbutton");
let newuserButton = document.querySelectorAll("#newuserbutton");
let pages = document.querySelectorAll("#page")

function backButtonNavigate(stepNumber) {
    let a;
    let neededPageNumber = stepNumber - 1 ;
    console.log(neededPageNumber)
    pages.forEach((page) => {
        const pageNumber = parseInt(page.getAttribute("page"));
        if(neededPageNumber === pageNumber) {
            a.href = document.getElementById(`${neededPageNumber}`);
        }
   })
   console.log(a);
}

function backButton() {
    previousButton.forEach((button) => {
        button.addEventListener("click", () => {
            const stepNumber = parseInt(button.getAttribute("step"))
            backButtonNavigate(stepNumber);
        })
    })
    
}

backButtonNavigate(3)

// function nextButton() {

// }

// function submitButton() {

// }