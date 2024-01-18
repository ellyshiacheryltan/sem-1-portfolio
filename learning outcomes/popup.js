/* pop-up */
    /* selects all elements in class 'responsive' with [data-popup-target] attribute */
    const openPopupElements = document.querySelectorAll('.responsive [data-popup-target]');
    /* selects all elements with [data-close-button] attribute */
    const closePopupButtons = document.querySelectorAll('[data-close-button]');
    /* selects element with the id 'overlay' */
    const overlay = document.getElementById('overlay');
    
    /* iterates through each element in openPopupElements */
    openPopupElements.forEach(element => {
        element.addEventListener('click', () => {
            /* selects the pop-up element using the value from the [data-popup-target] attribute */
            const popup = document.querySelector(element.dataset.popupTarget);
            
            /* gets the title of the pop-up from the data-title attribute */
            const title = element.dataset.title;
            openPopup(popup, title);
        });
    });
    
    function openPopup(popup, title) {
        /* if the popup value is null, exit the function */
        if (popup == null) return;

        /* updates the title of the pop-up in the pop-up */
        popup.querySelector('.title').innerText = title;

        /* add the class 'active' to classes 'popup' and 'overlay' */
        popup.classList.add('active');
        overlay.classList.add('active');
    }

    closePopupButtons.forEach(element => {
        element.addEventListener('click', () => {
            /* finds the closest ancestor element with the class 'popup' */
            const popup = element.closest('.popup');
            closePopup(popup);
        });
    });

    // overlay click event listener to close popup
    overlay.addEventListener('click', function () {
        const popups = document.querySelectorAll('.popup.active');
        popups.forEach(popup => {
            closePopup(popup);
        });
      });

    // Function to close the popup
    function closePopup(popup) {
        if (popup == null) return;

        popup.classList.remove('active');
        overlay.classList.remove('active');
    }