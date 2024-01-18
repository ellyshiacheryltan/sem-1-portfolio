// Select all elements with class "carousel"
const carousels = document.querySelectorAll(".carousel");

// Iterate through each carousel element
carousels.forEach(($carousel) => {

    // UI Elements
    const $list = $carousel.querySelector(".carousel__list");
    const $previous = $carousel.querySelector(".carousel__button--previous");
    const $next = $carousel.querySelector(".carousel__button--next");

    // Variables
    const limit = $list.children.length - 1;
    let timeout;
    let index = 0;
    let current = $list.children[index];
    let previous = current;


    const animate = function (type = "increment") {
        
        // Performance update
        // Clear any existing timeout, prevent overlapping animation
        if (timeout) {
            clearTimeout(timeout);
        }

        // Remove transitioning classes to the carousel
        $carousel.classList.remove("is-transitioning");

        // Determine transition direction
        if (type === "increment") {
            $carousel.classList.remove("is-transitioning-inversed");
        }

        if (type === "decrement") {
            $carousel.classList.add("is-transitioning-inversed");
        }

        // Asign current to previous
        previous = current;

        // Wait for the next frame to apply the transition
        timeout = setTimeout(function () {
            $carousel.classList.add("is-transitioning");

            // Add transition classes to the item
            previous.classList.remove("is-transitioning-in");
            previous.classList.add("is-transitioning-out");

            // Remove transition out class after 500ms
            timeout = setTimeout(function () {
                clearTimeout(timeout);
                $carousel.classList.remove("is-transitioning");
                previous.classList.remove("is-transitioning-out");
            }, 500);

            // Increment index
            if (type === "increment") {
                index = (index + 1) % (limit + 1);
            }

            // Decrement index
            if (type === "decrement") {
                index = (index - 1 + limit + 1) % (limit + 1);
            }

            // Re-assign current
            current = $list.children[index];
            current.classList.add("is-transitioning-in");

            // Log it
            console.log(index, previous, current);
        }, 16);
    };

    /**
    *
    * Event Listeners
    */
    $previous.onclick = function () {
        if(index > 0) {
            animate("decrement");
        };
    };

    $next.onclick = function () {
        if(index < limit){
            animate("increment");
        }
    };
});