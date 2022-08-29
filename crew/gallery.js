crew.gallery = {

    sortButton: null,

    init: function() {
        crew.gallery.sortButton = document.querySelector('div.si-crewGallery .si-sortButton');
        crew.gallery.sortButton.addEventListener('click', crew.gallery.onSortButtonClicked);

        let crewList = crew.data.allItems.slice();
        crewList.sort(crew.gallery.sortFunction);
        crew.data.allItemsSorted = crewList;

        crew.gallery.render(crew.data.allItems);
    },

    render: function(crewList) {

        let container = document.querySelector('div.si-crewGallery .modal-body');
        container.innerHTML = '';

        for (let i = 0; i < crewList.length; i++) {

            let divElement = document.createElement('div');
            divElement.classList.add('si-galleryItem');
            divElement.setAttribute('data-id', crewList[i].id);
            divElement.addEventListener('click', crew.gallery.onItemClicked);

            let imageElement = document.createElement('img');
            imageElement.classList.add('si-galleryItemImage');
            imageElement.src = crewList[i].image;

            let nameElement = document.createElement('div');
            nameElement.classList.add('si-galleryItemName');
            nameElement.innerHTML = crewList[i].name;

            divElement.appendChild(imageElement);
            divElement.appendChild(nameElement);

            container.appendChild(divElement);
        }
    },

    onItemClicked: function(event) {
        let crewMemberId = event.currentTarget.dataset.id;
        crew.carousel.init(crewMemberId);
    },

    onSortButtonClicked: function() {
        if (crew.data.isGallerySorted) {
            crew.data.isGallerySorted = false;
            crew.gallery.sortButton.innerHTML = 'Sort gallery';
            crew.gallery.render(crew.data.allItems);
        } else {
            crew.data.isGallerySorted = true;
            crew.gallery.sortButton.innerHTML = 'Go back to unsorted gallery';
            crew.gallery.render(crew.data.allItemsSorted);
        }
    },

    sortFunction: function(item1, item2) {
        if (item1.name > item2.name) {
            return 1;
        }
        if (item1.name < item2.name) {
            return -1;
        }
        return 0;
    }

};