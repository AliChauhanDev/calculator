const display = document.getElementById('display')
let lastActionWasCalculation = false;

function Display(value) {
    if (lastActionWasCalculation) {
        display.value = '';  // Clear the display if the last action was a calculation
        lastActionWasCalculation = false;
    }
    display.value += value;
}

function clearDisplay() {                                                                                                                                                                                                                                    
    display.value = '';
}
function ClearStorage(){
    localStorage.clear();
    currentIndex = 0;
}


function clearLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
        saveCalculation(display.value);
        lastActionWasCalculation = true;  
    } catch (error) {
        display.value = 'Error';
    }
}

function saveCalculation(result) {
    let calculations = JSON.parse(localStorage.getItem('calculations')) || [];
    calculations.push(result);
    localStorage.setItem('calculations', JSON.stringify(calculations));
}

let currentIndex = 0; // variable jo index ko locat karega calculation ke array me

function showPreviousCalculations() {
    let calculations = JSON.parse(localStorage.getItem('calculations')) || [];
    if (currentIndex < calculations.length) {
        document.getElementById('display').value = calculations[currentIndex];
        currentIndex++;
    } else {
        currentIndex = 0; 
        alert('No more previous calculations');
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= 0 && key <= 9 || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        display.value += key;
    } 
    else if (key == 'Enter') {
        calculate();
    } 
    else if (key === 'Backspace') {
        clearLast();
    } 
    else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});
