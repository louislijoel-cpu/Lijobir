document.addEventListener("DOMContentLoaded", function () {

    const openBtn =
        document.getElementById("openBtn");

    const birthdayReveal =
        document.getElementById("birthdayReveal");

    const messageBtn =
        document.getElementById("messageBtn");

    const messageSection =
        document.getElementById("messageSection");

    const memoriesBtn =
        document.getElementById("memoriesBtn");

    const finalSection =
        document.getElementById("finalSection");

    const birthdayMusic =
        document.getElementById("birthdayMusic");


    /* =========================================
       PAGE 1 → PAGE 2 + START MUSIC
    ========================================= */

    if (openBtn && birthdayReveal) {

        openBtn.addEventListener("click", function () {

            birthdayReveal.classList.add("active");


            /* Start birthday music */

            if (birthdayMusic) {

                birthdayMusic.volume = 0.45;

                birthdayMusic.play()
                    .catch(function (error) {

                        console.log(
                            "Music could not start:",
                            error
                        );

                    });

            }

        });

    }


    /* =========================================
       PAGE 2 → PAGE 3
    ========================================= */

    if (messageBtn && messageSection) {

        messageBtn.addEventListener("click", function () {

            birthdayReveal.classList.remove("active");

            messageSection.classList.add("active");

        });

    }


    /* =========================================
       PAGE 3 → PAGE 4
    ========================================= */

    if (memoriesBtn && finalSection) {

        memoriesBtn.addEventListener("click", function () {

            messageSection.classList.remove("active");

            finalSection.classList.add("active");

        });

    }

});