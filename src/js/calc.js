window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let income = document.getElementById('income');
    let outcome = document.getElementById('outcome');
    let checkTaxes = document.getElementById('taxes');
    let result = document.getElementById('total');
    let resultTaxes = document.getElementById('totaltax');

    let incomeSum = 0,
        outcomeSum = 0,
        total = 0,
        totalTax = 0;



    result.innerHTML = 0;
    resultTaxes.innerHTML = 0;




    income.addEventListener('change', function () {
        incomeSum = +this.value;
        total = (incomeSum - outcomeSum) * 12;
        totalTax = total - (total * 20 / 100);

        if (income.value == '') {
            result.innerHTML = 0;
            resultTaxes.innerHTML = 0;
        } else if (outcome.value == '') {
            resultTaxes.innerHTML = 0;
            resultTaxes.innerHTML = 0;
        } else {
            result.innerHTML = total;
            resultTaxes.innerHTML = totalTax;
        }
    });

    outcome.addEventListener('change', function () {
        outcomeSum = +this.value;
        total = (incomeSum - outcomeSum) * 12;
        totalTax = total - (total * 20 / 100);


        if (income.value == '') {
            result.innerHTML = 0;
            resultTaxes.innerHTML = 0;
        } else if (outcome.value == '') {
            resultTaxes.innerHTML = 0;
            resultTaxes.innerHTML = 0;
        } else {
            result.innerHTML = total;
            resultTaxes.innerHTML = totalTax;
        }
    });

    checkTaxes.addEventListener('change', function (event) {
        if (event.target.checked) {
            totalTax = total - (total * 20 / 100);
            resultTaxes.innerHTML = totalTax;
        } else {
            resultTaxes.innerHTML = 0;
        }
    });
});