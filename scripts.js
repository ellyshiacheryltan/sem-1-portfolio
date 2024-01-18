/* works page : updates z-index after animation */
var curtains = document.querySelector('.curtains');

// Add an event listener for the animationend event
curtains.addEventListener('animationend', function() {
    // Get the .container .texts element
    var texts = document.querySelector('.container .texts');

    // Change the z-index property
    texts.style.zIndex = '2';
});