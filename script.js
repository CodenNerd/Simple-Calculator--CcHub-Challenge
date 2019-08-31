let currentClick = 1;

const buttons = document.getElementsByTagName('button');

const getClickDigit = () => {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
    console.log(currentClick);
            currentClick = buttons[i].innerText;
            
            alert(currentClick);
            handleClicks();
        })
    }


    // set currentClick and return
}
const storedClicks = [];
const handleClicks = () => {

    if (currentClick == "=") {
        displaySolution();
        return;
    }
    if (currentClick == '%') {
        storedClicks.push(currentClick);
        displaySolution();
        return;
    }
    if (currentClick == 'C') {
        clearScreenAndReset();
        return;
    }
    if (currentClick == '&lArr;') {
        backSpace();        
        alert();
        return;
    }
    storedClicks.push(currentClick);
    displayDigits();
    return true;
}
const backSpace = () => {
    storedClicks.pop();
}
const displayDigits = () => {
    // display storedClicks on small screen
}

const computeSolution = () => {
    // convert storedClicks to Computable maths and get answer
}

const displaySolution = () => {
    if (computeSolution()) {
        // display answer on large screen

    }
    else {
        displayError();
    }
}

const determineErrorType = () => {
    // use the global stored clicks var or computeSolution function to do this 
}

const displayError = () => {
    determineErrorType();

    //display on screen based on error type
}

const clearScreenAndReset = () => {

}

const runApp = () => {
    getClickDigit();
}

runApp();