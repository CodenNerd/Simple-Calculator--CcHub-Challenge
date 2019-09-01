let currentClick = 1;
let currentSolution;
const storedClicks = [];

const buttons = document.getElementsByTagName('button');
const smallScreen = document.querySelector('.screen-sm');
const largeScreen = document.querySelector('.screen-lg');
const getClickDigit = () => {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            currentClick = i == 1 ? 'del' : buttons[i].innerText;
            handleClicks();
        })
    }
    // set currentClick and return
}
const handleClicks = () => {

    if (currentClick == "=") {
        displaySolution();
        return;
    }
    if (currentClick == 'del'){
        backSpace();
        return;
    }
    if (currentClick == '%') {
        
        displaySolution();
        return;
    }
    if (currentClick == 'C') {
        clearScreen(largeScreen);
        clearScreen(smallScreen);
        reset();
        return;
    }

    storedClicks.push(currentClick);
    displayDigits();
    return true;
}
const backSpace = () => {
    storedClicks.pop();
        displayDigits();
}


const displayDigits = () => {
    // display storedClicks on small screen
    clearScreen(smallScreen);
    smallScreen.textContent = storedClicks.join('');
}
   let errorTypeVar = 'Syntax Error'
const computeSolution = () => {
    // convert storedClicks to Computable maths and get answer
    

    const stringedStoredClicks = storedClicks.join('');
    const stringedStoredClicksModified = stringedStoredClicks.replace(/×/g, '*');
    const newStoredClicks = stringedStoredClicksModified.split('');
    console.log(newStoredClicks);

    if(newStoredClicks[0] == '*' || newStoredClicks[0] == '/' || newStoredClicks[0] == '-'|| newStoredClicks[0] == '+'){
        errorTypeVar = 'Syntax Error';
        return false;
    }
    let numbers = [];
    let symbols = []
    let cNo = '';
 
    for(let i = 0; i< newStoredClicks.length; i++){

        if(newStoredClicks[i] == '*' || newStoredClicks[i] == '/' || newStoredClicks[i] == '-'|| newStoredClicks[i] == '+'){
           symbols.push(newStoredClicks[i]);
           numbers.push(cNo);
           cNo = '';
        }
        else{
            cNo = cNo + newStoredClicks[i];
        }
    }
    numbers.push(cNo);
    
    let total = Number(numbers[0]);
    for(let ii = 0; ii < numbers.length; ii++){

        if(symbols[ii] == '*'){
           total = total * Number(numbers[ii + 1]);
        }
        else if(symbols[ii] == '/'){
            total = total / Number(numbers[ii + 1]);
        }else if(symbols[ii] == '-'){
            total = total - Number(numbers[ii + 1]);

        }else if(symbols[ii] == '+'){
            total = total + Number(numbers[ii + 1]);
        }else{
            
            let returnValue = isNaN(total) ? false : total;
            if (!returnValue) errorTypeVar = 'Math Error';

            if (currentClick == '%') returnValue = returnValue/100;
            return returnValue;
        }
    }
}

const displaySolution = () => {
    currentSolution = computeSolution();

    if (currentSolution) {
        // display answer on large screen
        largeScreen.style.fontSize = "4em";
        largeScreen.textContent = currentSolution;
    }
    else {
        largeScreen.style.fontSize = "3em";
        displayError();
    }
}
const adjustOutputSize = () =>{

}
const determineErrorType = (errorType) => {
    // use the global stored clicks var or computeSolution function to do this 
    //  return SyntaxError // Maths Error
    return errorType;
}

const displayError = () => {
    let errorType = determineErrorType(errorTypeVar);

    //display on screen based on error type
    largeScreen.textContent = errorType;

}

const clearScreen = (screenObject) => {
    screenObject.textContent = null;
}

const reset = () =>{
    location.reload();
}

const runApp = () => {
    getClickDigit();
}

runApp();