const dayRate = 34;
const halfdayRate = 16;
const govPercent = .8;

const kids = document.getElementById('numKids');
const fullDays = document.getElementById('numDays');
const halfDays = document.getElementById('numHalfDays');

let displayGrossCost = document.getElementById('gross-cost');
let displayFullDays = document.getElementById('full-days');
let displayHalfDays = document.getElementById('half-days');
let displayGov = document.getElementById('government');
let displayNetCost = document.getElementById('net-cost')
let displayMonthlyCost = document.getElementById('monthly-cost')


function totalCost() {
    if (kids.value == 0){
        alert("add at least 1 child");
    }
    else {
    let grossCost = (parseFloat(kids.value) * ((parseFloat(fullDays.value) * dayRate) + (parseFloat(halfDays.value) * halfdayRate)));
    grossCost=grossCost.toFixed(2)

    let netCost = (parseFloat(kids.value) * ((parseFloat(fullDays.value) * dayRate) + (parseFloat(halfDays.value) * halfdayRate))) * govPercent;
    netCost = netCost.toFixed(2);

    displayGrossCost.innerHTML = `Your total childcare before deductions is costing you <strong>£${grossCost}</strong> per week`;
    displayNetCost.innerHTML = `Your childcare after deductions is costing you <strong>£${netCost}</strong> per week`;
    displayFullDays.innerHTML = `Your child(ren) are in childcare for ${fullDays.value} full days per week.`;
    displayHalfDays.innerHTML = `Your child(ren) are in childcare for ${halfDays.value} half days per week.`;
    
    let monthly = netCost * 4;
    displayMonthlyCost.innerHTML = `This works out to £${monthly} per month assuming a four week month`;

    let govSaving = (grossCost / 100) * 20;
    govSaving = govSaving.toFixed(2);
    displayGov.innerHTML = `<a href="https://www.gov.uk/tax-free-childcare" target="_blank">Tax-free childcare scheme</a> is saving you £${govSaving} per week`;
    
    }
} 

