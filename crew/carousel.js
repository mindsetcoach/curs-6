crew.carousel = {

    init: function() {
        popupHandling.showSpecificModal('.si-crewCarousel');

        let backToGalleryButton = document.querySelector('div.si-crewCarousel .si-backButton');
        backToGalleryButton.addEventListener('click', crew.carousel.onBackButtonClicked);
    },

    onBackButtonClicked: function() {
        popupHandling.hideSpecificModal('.si-crewCarousel');
    }

};