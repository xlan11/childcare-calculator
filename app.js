
const govPercent = .8;
const fullDayHours = 8.5;
const halfDayHours = 5;
const kids = document.getElementById('numKids');
const fullDays = document.getElementById('numDays');
const halfDays = document.getElementById('numHalfDays');
const displayBreakdown = document.getElementById('cost-breakdown');
const hourlyRate = document.getElementById('hourlyPrice');
const submit = document.getElementById('calculate');
let previous = [];

fullDays.addEventListener('input', submitValid);
halfDays.addEventListener('input', submitValid);
hourlyRate.addEventListener('input', submitValid);
submit.addEventListener('click', totalCost);
let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
event.preventDefault(); })

function submitValid() {
  if (fullDays.value === "" || halfDays.value === "" || hourlyRate.value ===""){
    submit.disabled=true;}
    else {
        submit.disabled= false;
    }    
}
    
function totalCost() {
    let dayRate = (hourlyRate.value * fullDays.value) * fullDayHours;
    dayRate = dayRate.toFixed(2);
    let halfDayRate = (hourlyRate.value * halfDays.value) * halfDayHours;
    halfDayRate = halfDayRate.toFixed(2);
    let grossCost = (parseFloat(dayRate)) + (parseFloat(halfDayRate));
    grossCost=grossCost.toFixed(2)
    let govSaving = (grossCost / 100) * 20;
    govSaving = govSaving.toFixed(2);
    let netCost =  (parseFloat(dayRate)) + (parseFloat(halfDayRate)) - govSaving;
    netCost = netCost.toFixed(2);
    let monthly = netCost * 4;
    monthly = monthly.toFixed(2);
    displayBreakdown.innerHTML =
    `<h2>Cost breakdown:</h2>
    <ul>
        <li>Your child(ren) are in childcare for ${fullDays.value} full days and ${halfDays.value} half days per week.</li>
        <li>Your total childcare before deductions is <strong>£${grossCost}</strong> per week</li>
        <li><a href="https://www.gov.uk/tax-free-childcare" target="_blank">Tax-free childcare scheme</a> is saving you <strong>£${govSaving}</strong> per week</li>
        <li>Your childcare after deductions is <strong>£${netCost}</strong> per week</li>
        <li>This works out to <strong>£${monthly}</strong> per month assuming a four week month</li>
    </ul>
    <div class="math">
            <h2>Receipt</h2>
            <p>Full days: £${dayRate}</p>
            <p>Half days: £${halfDayRate}</p>
            <p class="saving">Tax-free saving: £${govSaving}</p>
            <hr>
            <p><strong>Total weekly bill: £${netCost}</strong></p>
    </div>
    `
    previous.push({
        full: dayRate,
        half: halfDayRate,
        gross: grossCost,
        saving: govSaving,
        net: netCost,
        monthly: monthly,
    })
    console.log(previous)
    // previous = JSON.stringify(previous)

}