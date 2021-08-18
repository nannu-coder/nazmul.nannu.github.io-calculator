//Select All Button
const buttons = document.querySelectorAll('button');

//Display Select
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});


// calculate function
function calculate(event) {
    //current click button value
    const clickButtonValue = event.target.value;

    if (clickButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // calculate and show the answer to display
            display.value = eval(display.value);
        }
    } else if (clickButtonValue === 'C') {
        // clear everything on display
        display.value = '';
    } else {
        // otherwise concatenate it to the display
        display.value += clickButtonValue;
    }

};