
const display = document.getElementById('display')


function Display(value) {
    display.value += value;
}

function clearDisplay() {
    localStorage.clear(); 
    currentIndex = 0;                                                                                                                                                                                                                                           
    display.value = '';
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

let c = document.getElementById('c');
let alertShown = false; 

c.onmouseover = function() {
    if (!alertShown) { 
        alert("This 'C' button can clear your screen and also previous calculation history.");
        alertShown = true; 
    }
};