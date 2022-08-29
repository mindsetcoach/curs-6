crew.carousel = {

    init: function(crewMemberId) {
        popupHandling.showSpecificModal('.si-crewCarousel');

        let prevButton = document.querySelector('div.si-crewCarousel .si-prevButton');
        let nextButton = document.querySelector('div.si-crewCarousel .si-nextButton');
        let backToGalleryButton = document.querySelector('div.si-crewCarousel .si-backButton');
        prevButton.addEventListener('click', crew.carousel.onPrevButtonClicked);
        nextButton.addEventListener('click', crew.carousel.onNextButtonClicked);
        backToGalleryButton.addEventListener('click', crew.carousel.onBackButtonClicked);

        crew.carousel.render(crewMemberId);
    },

    render: function(crewMemberId) {

        let allCrew = crew.data.allItems;

        let selectedCrewMember = listSearch.getItemById(allCrew, crewMemberId);
        crew.data.selectedCrewMemberId = crewMemberId;

        let containerDiv = document.querySelector('div.si-crewCarousel .modal-body > div');
        containerDiv.style.backgroundImage = 'url("' + selectedCrewMember.image + '")';

    },

    onPrevButtonClicked: function() {
        let allCrew = crew.data.allItems;
        let crewMemberId = crew.data.selectedCrewMemberId;
        let prevCrewMemberResult = listSearch.getNeighborItemById(
            allCrew,
            crewMemberId,
            'prev'
        );
        if (prevCrewMemberResult !== null) {
            crew.carousel.render(prevCrewMemberResult.item.id);
            if (prevCrewMemberResult.isItemAtEdge) {
                let prevButton = document.querySelector('div.si-crewCarousel .si-prevButton');
                prevButton.setAttribute('disabled', true);
            } else {
                let nextButton = document.querySelector('div.si-crewCarousel .si-nextButton');
                nextButton.removeAttribute('disabled');
            }
        }
    },
    onNextButtonClicked: function() {
        let allCrew = crew.data.allItems;
        let crewMemberId = crew.data.selectedCrewMemberId;
        let nextCrewMemberResult = listSearch.getNeighborItemById(
            allCrew,
            crewMemberId,
            'next'
        );
        if (nextCrewMemberResult !== null) {
            crew.carousel.render(nextCrewMemberResult.item.id);
            if (nextCrewMemberResult.isItemAtEdge) {
                let nextButton = document.querySelector('div.si-crewCarousel .si-nextButton');
                nextButton.setAttribute('disabled', true);
            } else {
                let prevButton = document.querySelector('div.si-crewCarousel .si-prevButton');
                prevButton.removeAttribute('disabled');
            }
        }
    },
    onBackButtonClicked: function() {
        popupHandling.hideSpecificModal('.si-crewCarousel');
    }

};