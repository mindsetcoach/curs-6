crew.gallery = {

    render: function() {
        let crewList = crew.data.allItems;
        let container = document.querySelector('div.si-crewGallery .modal-body');

        for (let i = 0; i < crewList.length; i++) {

            let divElement = document.createElement('div');
            divElement.classList.add('si-galleryItem');

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
    }

};