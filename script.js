document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("openBtn");
    const birthdayReveal = document.getElementById("birthdayReveal");

    const messageBtn = document.getElementById("messageBtn");
    const messageSection = document.getElementById("messageSection");

    const memoriesBtn = document.getElementById("memoriesBtn");
    const finalSection = document.getElementById("finalSection");

    const birthdayMusic = document.getElementById("birthdayMusic");


    /* =========================================
       PAGE 1 → PAGE 2
    ========================================= */

    if (openBtn && birthdayReveal) {

        openBtn.addEventListener("click", function () {

            birthdayReveal.classList.add("active");

            if (birthdayMusic) {

                birthdayMusic.volume = 0.45;

                birthdayMusic.play().catch(function (error) {
                    console.log("Music could not start:", error);
                });

            }

        });

    }


 /* =========================================
   PAGE 2 → PAGE 3
========================================= */

if (messageBtn && birthdayReveal && messageSection) {

    messageBtn.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        birthdayReveal.classList.remove("active");

        messageSection.classList.add("active");

        /* Force Page 3 to become visible */
        messageSection.style.opacity = "1";
        messageSection.style.visibility = "visible";
        messageSection.style.pointerEvents = "auto";

        /* Hide Page 2 completely */
        birthdayReveal.style.opacity = "0";
        birthdayReveal.style.visibility = "hidden";
        birthdayReveal.style.pointerEvents = "none";

    });

}


    /* =========================================
       PAGE 3 → PAGE 4
    ========================================= */

    if (memoriesBtn && messageSection && finalSection) {

        memoriesBtn.addEventListener("click", function () {

            messageSection.classList.remove("active");

            finalSection.classList.add("active");

        });

    }

});