let launches = {

    initialize: function() {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(launches.onAxiosFinished)
            .catch(launches.onAxiosError)
        ;

        let popupCloseButton = document.querySelector('.popupHeader > span');
        popupCloseButton.addEventListener('click', launches.onPopupClose);

        let tiles = document.querySelectorAll('.contentTile');
        for (let i = 0; i < tiles.length; i++) {

            let theTile = tiles[i];
            theTile.addEventListener('click', launches.onTileClick);
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

    onNoOfLaunchesPressed: function() {
        alert('the no of launches was pressed');
    },

    fillPopupValue: function(launchData) {
        let myPopup = document.querySelector('.popup');
        let newDiv = document.createElement('div');
        newDiv.innerHTML = launchData.length;
        newDiv.addEventListener('click', launches.onNoOfLaunchesPressed);
    
        myPopup.appendChild(newDiv);
    },

    onAxiosFinished: function(response) {
        let launchData = response.data;
        launches.fillPopupValue(launchData);
    },

    onAxiosError: function(error) {
        console.log(error);
    }
};

launches.initialize();