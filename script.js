const currentClick = 1;
const getClickDigit = () =>{
    // set currentClick and return

}
const storedClicks = [];
const handleClicks = () =>{
    getClickDigit();
    if(currentClick == '='){
        displaySolution();
        return false;
    }
    if(currentClick == 'C'){
        clearScreenAndReset();
        return false;
    }
    storedClicks.push(currentClick);
    displayDigits();
    return true;
}

const displayDigits = () =>{
    // display storedClicks on small screen
}

const computeSolution = () =>{
    // convert storedClicks to Computable maths and get answer
}

const displaySolution = () =>{
   if(computeSolution()) {
    // display answer on large screen

   }
   else{
       displayError();
   }
}

const determineErrorType = () =>{
    // use the global stored clicks var or computeSolution function to do this 
}

const displayError = () =>{
    determineErrorType();

    //display on screen based on error type
}

const clearScreenAndReset = () =>{

}

const runApp = () =>{
    handleClicks(); 
}

runApp();