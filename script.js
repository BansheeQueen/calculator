// Variables

// Bill value
const billInput = document.querySelector('.bill');
let billValue;

// Tips value
const tipBtns = document.querySelectorAll('.tip');
let tips;

// Number of people
const people = document.querySelector('.number');
let peopleNumber;

// Error
const error = document.querySelector('.error');

// Tip amount
const tipAmount = document.querySelector('.tip-sum');

// Total amount

const total = document.querySelector('.total-sum');

// Reset btn
const resetBtn = document.querySelector('.reset')
// Functions
const checkPeopleNumber = () => {
    if(peopleNumber < 1 || peopleNumber == null) {
        error.style.display = "block";
       } else {error.style.display = "none"}
}

const tipAmountCalc = () => {
    tipAmount.innerHTML = `$${(billValue*tips/peopleNumber).toFixed(2)}`
    if(tipAmount.innerHTML === "$NaN") {
        tipAmount.innerHTML = "$0.00"; 
    }

}

const totalAmountCalc = () => {
    total.innerHTML = `$${((billValue+billValue*tips)/peopleNumber).toFixed(2)}`;
    if(total.innerHTML === "$NaN") {
       total.innerHTML = "$0.00"; 
    }

}

const resetActivation = () => {
    resetBtn.classList.remove('inactive');
    resetBtn.classList.add('active');

}

const resetSettings = () => {
    if(resetBtn.classList.contains('active')){tips = 0;
    peopleNumber = 0;
    people.value = 0;
    billValue = 0;
    billInput.value = 0;
    tipAmount.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
    resetBtn.classList.remove('active');
    resetBtn.classList.add('inactive');
    tipBtns.forEach(btn => btn.classList.remove('checked'));
}
}


// Event Listeners

billInput.addEventListener('change', () => { billValue = parseFloat(billInput.value);
    tipAmountCalc();
    totalAmountCalc();
    resetActivation();});

tipBtns.forEach(btn => btn.addEventListener('click', () => {
    if(btn.getAttribute('data-value')){
        btn.classList.add('checked');
        tips = parseFloat(btn.getAttribute('data-value'))
    } else { tips = parseFloat(btn.value / 100)}
    tipAmountCalc();
    totalAmountCalc();
    resetActivation();
}));

tipBtns.forEach(btn => btn.addEventListener('change', () => {
    if(btn.getAttribute('data-value')){
        tips = parseFloat(btn.getAttribute('data-value'))
    } else { tips = parseFloat(btn.value / 100)}
    tipAmountCalc();
    totalAmountCalc();
    resetActivation();
}));

people.addEventListener('change', () => {
    peopleNumber = parseFloat(people.value);
    checkPeopleNumber();
    tipAmountCalc();
    totalAmountCalc();
    resetActivation();
});

resetBtn.addEventListener('click', resetSettings);

checkPeopleNumber();
tipAmountCalc();
totalAmountCalc();

