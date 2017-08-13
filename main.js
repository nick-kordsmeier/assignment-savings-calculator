// Savings Calculator

// calculate() function to be called when "Calculate" button is clicked. This function accepts the user's input and
// calculates how much a savings account would generate each month if compounded monthly.

function calculate() {
    // Import the user's input values for amount, rate, and number of years and convert from string to float.
    var amount = parseFloat(document.getElementById("amount").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);

    // Initialize the balance variable (setting equal to starting amount).
    var balance = amount;

    // Initialize outputTable variable, in which the HTML table will be built.
    var outputTable = "<table> <tr> <th>Month</th> <th>Interest</th> <th>Balance</th> </tr>";

    // Loop through the number of months to be considered, calculating interest each month and the cumulative balance.
    // Relevant output values are added to the outputTable variable.
    for (i = 0; i < years * 12; i++) {
        interestValue = Math.round(balance * ((rate/100)/12) * 100)/100;
        balance += interestValue;
        outputTable += "<tr> <td>" + (i+1) + "</td> <td>" + interestValue.toFixed(2) + "</td> <td>" + balance.toFixed(2) + "</td> </tr>";
    }
    
    // Finalize the outputTable variable.
    outputTable += " </table>";

    // Set the HTML contents associated with the "results_table" id equal to the outputTable variable.
    document.getElementById("results_table").innerHTML = outputTable;
}

// reset() function to clear our the HTML contents associated with the "results_table" id.
function reset() {
    document.getElementById("results_table").innerHTML = "";
}