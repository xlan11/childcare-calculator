const govPercent = .8;
const fullDayHours = 8.5;
const halfDayHours = 5;

const kids = document.getElementById('numKids');
const fullDays = document.getElementById('numDays');
const halfDays = document.getElementById('numHalfDays');
const displayBreakdown = document.getElementById('cost-breakdown')
let hourlyRate = document.getElementById('hourlyPrice')


function totalCost() {
    // if (kids.value == 0 || fullDays.value == "" || halfDays.value == "")
    if (fullDays.value == "" || halfDays.value == ""){
        alert("Please enter a number for every box"); 
    }
        else {

    let dayRate = (hourlyRate.value * fullDays.value) * fullDayHours;
    let halfDayRate = (hourlyRate.value * halfDays.value) * halfDayHours;

    let grossCost = (parseFloat(dayRate)) + (parseFloat(halfDayRate));
    grossCost=grossCost.toFixed(2)
    
    // let grossCost =  (parseFloat(kids.value)) * (parseFloat(dayRate)) + (parseFloat(halfDayRate));
    // grossCost=grossCost.toFixed(2)

    let govSaving = (grossCost / 100) * 20;
    govSaving = govSaving.toFixed(2);

    let netCost =  (parseFloat(dayRate)) + (parseFloat(halfDayRate)) - govSaving;
    netCost = netCost.toFixed(2);

    // let netCost =  (parseFloat(kids.value)) * (parseFloat(dayRate)) + (parseFloat(halfDayRate)) - govSaving;
    // netCost = netCost.toFixed(2);

    let monthly = netCost * 4;
    monthly = monthly.toFixed(2);
    

    
    displayBreakdown.innerHTML =
    `<h2>Cost breakdown:</h2>
    <ul>
        <li>Your child(ren) are in childcare for ${fullDays.value} full days and ${halfDays.value} half days per week.</li>
        <li>Your total childcare before deductions is <strong>£${grossCost}</strong> per week</li>
        <li><a href="https://www.gov.uk/tax-free-childcare" target="_blank">Tax-free childcare scheme</a> is saving you £${govSaving} per week</li>
        <li>Your childcare after deductions is <strong>£${netCost}</strong> per week</li>
        <li>This works out to £${monthly} per month assuming a four week month</li>
    </ul>
    <div class="math">
            <h2>Receipt</h2>
            <p>Full days: £${dayRate}</p>
            <p>Half days: £${halfDayRate}</p>
            <p class="saving">Tax-free saving: £${govSaving}</p>
            <hr>
            <p><strong>Total weekly bill: £${netCost}</strong></p>
    </div>
    `}
    }