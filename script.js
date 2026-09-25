// =========================
// STAR RATINGS
// =========================

const burgerCards = document.querySelectorAll(".burger-card");

burgerCards.forEach(function(card) {

    const stars = card.querySelectorAll(".star");

    stars.forEach(function(star, index) {

        star.addEventListener("click", function() {

            stars.forEach(function(item, starIndex) {

                if (starIndex <= index) {
                    item.classList.add("selected");
                } else {
                    item.classList.remove("selected");
                }

            });

        });

    });

});


// =========================
// HEART FAVORITE BUTTON
// =========================

const hearts = document.querySelectorAll(".heart");

hearts.forEach(function(heart) {

    heart.addEventListener("click", function() {

        if (heart.classList.contains("liked")) {

            heart.classList.remove("liked");
            heart.textContent = "♡";

        } else {

            heart.classList.add("liked");
            heart.textContent = "♥";

        }

    });

});