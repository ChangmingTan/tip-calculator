/*
    Name: Changming Tan
    Date: 3/16/2019
    IT 207
    URL: http://ctan.greenriverdev.com/207/final/tip-calculator.html

    JavaScript Final Project - Tip Calculator: this website will calculate the tip amount that you may want to tip depending on the total
*/

//defult the result is hidden
var result = document.getElementById('result');
result.style.display = 'none';

function go() {

    //validate bill amount
    var totalBill = document.getElementById('totalBill').value;
    var errorTotalBill = document.getElementById('errorTotalBill');

    if (totalBill === "") {
        errorTotalBill.className = 'error';
    } else {
        errorTotalBill.className = 'hidden';
    }

    //validate service
    var service = document.getElementById('service').value;
    var errorService = document.getElementById('errorService');

    if (service === 'none') {
        errorService.className = 'error';
    } else {
        errorService.className = 'hidden';
    }

    //validate number of people sharing the bill
    var people = document.getElementById('people').value;
    var errorShare = document.getElementById('errorShare');

    if (people === "") {
        errorShare.className = 'error';
    } else {
        errorShare.className = 'hidden';
    }

    //create a calculate() function to calculate the net and tip
    function calculate() {
        //parse the values to float and int
        totalBill = parseFloat(totalBill);
        service = parseFloat(service);
        people = parseInt(people);

        //calculate net before WA tax 10.1%
        var net = (totalBill / 1.101);

        //calculate bill for each person without tip
        var eachNoTip = (totalBill / people);

        //calculate tip for each person based on the net
        var tip = (net * service) / people;

        //calculate bill for each person including tip
        var eachWithTip = (eachNoTip + tip);

        //variables for result div
        var billMsg = document.getElementById('billMsg');
        var netMsg = document.getElementById('netMsg');
        var tipMsg = document.getElementById('tipMsg');
        var totalMsg = document.getElementById('totalMsg');

        //.toFixed(2) always shows the price with two decimals only
        billMsg.innerHTML = eachNoTip.toFixed(2);
        netMsg.innerHTML = net.toFixed(2);
        tipMsg.innerHTML = tip.toFixed(2);
        totalMsg.innerHTML = eachWithTip.toFixed(2);

        //it does not show the result if the content is NaN
        if (people === 0) {
            alert('Invalid number of people.');
        } else if (!isNaN(netMsg.textContent) && !isNaN(tipMsg.textContent)) {
            result.style.display = 'block';
        }

        //show error message if user does not enter numbers
        if (totalBill !== '' && isNaN(totalBill) || people !== '' && isNaN(people)) {
            alert('Please enter number values.');
        }
    }
    //call the calculate funstion
    calculate();
}

//get the button and assign onclick function
var button = document.getElementById('button');
button.onclick = go;