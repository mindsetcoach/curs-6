crew.carousel = {

    init: function(crewMemberId) {
        popupHandling.showSpecificModal('.si-crewCarousel');

        let backToGalleryButton = document.querySelector('div.si-crewCarousel .si-backButton');
        backToGalleryButton.addEventListener('click', crew.carousel.onBackButtonClicked);

        crew.carousel.render(crewMemberId);
    },

    render: function(crewMemberId) {

        let allCrew = crew.data.allItems;

        let selectedCrewMember = listSearch.getItemById(allCrew, crewMemberId);

        let containerDiv = document.querySelector('div.si-crewCarousel .modal-body > div');
        containerDiv.style.backgroundImage = 'url("' + selectedCrewMember.image + '")';

    },

    onBackButtonClicked: function() {
        popupHandling.hideSpecificModal('.si-crewCarousel');
    }

};