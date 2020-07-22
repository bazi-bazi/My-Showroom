window.addEventListener('DOMContentLoaded', function () {


    'use strict';


    gsap.to(".animation__text", {
        duration: 10,
        x: 300,
        color: "#ffa500",
        ease: "bounce",
        repeat: -1,
        yoyo: true
    });



    // box

    let push = document.querySelector('.orange');
    push.addEventListener('click', function () {
        let tl = gsap.timeline({
            ease: "bounce"

        });

        //add 3 tweens that will play in direct succession.
        tl.to(".purple", {
            duration: 0.7,
            x: 120,
            ease: "bounce",
            scale: 1

        });
        tl.to(".pink", {
            duration: 0.7,
            x: 240,
            ease: "bounce",
            scale: 1
        });
        tl.to(".aqua", {
            duration: 1,
            x: 360,
            ease: "bounce",
            scale: 1

        });

    });

    let close = document.querySelector('.aqua');
    close.addEventListener('click', function () {
        let tl = gsap.timeline({

        });

        //add 3 tweens that will play in direct succession.
        tl.to(".purple", {
            duration: 1,
            x: 1,
            ease: "bounce",
            scale: 1
        });
        tl.to(".pink", {
            duration: 1,
            x: 1,
            ease: "bounce",
            scale: 1
        });
        tl.to(".aqua", {
            duration: 1,
            x: 1,
            ease: "bounce",
            scale: 1

        });

    });




});