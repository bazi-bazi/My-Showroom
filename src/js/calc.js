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

    //result
    let gettravel = document.getElementById('totaltravel'); // total prise
    let gettravelers = document.getElementById('totalper'); // prise per traveler

    //form
    let travelersSum = document.getElementById('travelerssum'); // amount of travelers
    let daysSum = document.getElementById('dayssum'); // amount of days
    let countriessum = document.getElementById('countries'); // all countries
    let travelersFinal = 0;
    let daysFinal = 0;
    let priseAll = 0;
    let priseAllPersons = 0;

    gettravel.innerHTML = 0;
    gettravelers.innerHTML = 0;


    travelersSum.addEventListener('change', function () {
        travelersFinal = +this.value;
        priseAll = (travelersFinal + daysFinal) * 1000;
        priseAllPersons = priseAll / daysFinal;

        if (daysSum.value == '') {
            gettravel.innerHTML = 0;
            gettravelers.innerHTML = 0;
        } else if (travelersSum.value == '') {
            gettravel.innerHTML = 0;
            gettravelers.innerHTML = 0;
        } else {
            gettravel.innerHTML = priseAll;
            gettravelers.innerHTML = priseAllPersons;
        }

    });


    daysSum.addEventListener('change', function () {
        daysFinal = +this.value;
        priseAll = (travelersFinal + daysFinal) * 1000;
        priseAllPersons = priseAll / daysFinal;

        if (daysSum.value == '') {
            gettravel.innerHTML = 0;
            gettravelers.innerHTML = 0;
        } else if (travelersSum.value == '') {
            gettravel.innerHTML = 0;
            gettravelers.innerHTML = 0;
        } else {
            gettravel.innerHTML = priseAll;
            gettravelers.innerHTML = priseAllPersons;
        }

    });

    countries.addEventListener('change', function () {
        if (travelersSum.value == '' || daysSum.value == '') {
            gettravel.innerHTML = 0;
            gettravelers.innerHTML = 0;
        } else {
            let per = priseAll;
            let persons = priseAllPersons;
            gettravel.innerHTML = per * this.options[this.selectedIndex].value;
            gettravelers.innerHTML = persons * this.options[this.selectedIndex].value;
        }
    });





});