window.addEventListener('DOMContentLoaded', function () {

    'use strict';


    // Form 1 (with JSON and callback function)

    let notifications = {
        loading: 'loading...',
        success: 'Thanks, we will contact with you soon',
        failure: 'something gone wrong',
    };

    let form = document.querySelector('.form__first');
    let input = document.getElementsByTagName('input');
    let inputx = document.getElementById('formfirst');
    let statusText = document.createElement('div');
    let textarea = document.getElementsByTagName('textarea');

    statusText.classList.add('status');




    form.addEventListener('submit', function (event) {

        event.preventDefault();
        form.appendChild(statusText);

        if (inputx.value.length == '') {
            statusText.innerHTML = notifications.failure;
        } else {

            let request = new XMLHttpRequest();
            request.open('POST', 'http://localhost/local/server.php');
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");

            let formData = new FormData(form);

            let object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            let json = JSON.stringify(object);


            request.send(json);

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusText.innerHTML = notifications.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusText.innerHTML = notifications.success;
                } else {
                    statusText.innerHTML = notifications.failure;
                }
            });

            /// empty text areas

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';

            }

            for (let i = 0; i < textarea.length; i++) {
                textarea[i].value = '';
            }


        }



    });



    // Form 2 (with JSON and promises)


    let warnings = {
        loading: 'loading...',
        success: 'Assistance will be provided for you shortly',
        failure: 'something went wrong, try again later',
    };

    let forms = document.querySelector('.form__second');
    let inputs = document.getElementsByTagName('input');
    let inputy = document.getElementById('formsecond');
    let statusMessage = document.createElement('div');
    let textareas = document.getElementsByTagName('textarea');
    statusMessage.classList.add('status');




    forms.addEventListener('submit', function (events) {

        events.preventDefault();
        forms.appendChild(statusMessage);

        if (inputy.value.length == '') {
            statusMessage.innerHTML = warnings.failure;
        } else {

            function sendForm() {

                return new Promise(function (resolve, reject) {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'http://localhost/local/server.php');
                    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
                    let formData = new FormData(forms);

                    let obj = {};

                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });

                    let json = JSON.stringify(obj);

                    request.send(json);

                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    });

                });

            }

            function clearForm() {
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';

                }
            }

            function clearArea() {
                for (let i = 0; i < textareas.length; i++) {
                    textareas[i].value = '';
                }
            }



            sendForm()
                .then(() => statusMessage.innerHTML = warnings.loading)
                .then(() => statusMessage.innerHTML = warnings.success)
                .catch(() => statusMessage.innerHTML = warnings.failure)
                .then(clearForm)
                .then(clearArea)

        }

    });




});