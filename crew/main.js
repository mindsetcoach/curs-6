let crew = {
    initialize: function() {
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(crew.fillPopupValue)
            .catch(function(error) {
                // handle error
                console.log(error);
            })
        ;
        let popupCloseButton = document.querySelector('.popupHeader > span');
        popupCloseButton.addEventListener('click', crew.onPopupClose);

        let tiles = document.querySelectorAll('.contentTile');
        for (let i = 0; i < tiles.length; i++) {

            let theTile = tiles[i];
            theTile.addEventListener('click', crew.onTileClick);
        }

    },

    onPopupClose: function() {
        // let's hide the popup
        let popup = document.querySelector('.popup');
        popup.style.display = 'none';
    },
    
    onTileClick: function() {
        // let's show the popup
        let popup = document.querySelector('.popup');
        popup.style.display = 'block';
    },

    fillPopupValue: function(response) {
        let crewData = response.data;
        let myPopup = document.querySelector('.popup');
        let newDiv = document.createElement('div');
        newDiv.innerHTML = crewData.length;
    
        myPopup.appendChild(newDiv);
    }
};

crew.initialize();

