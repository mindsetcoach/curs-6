let launches = {

    initialize: function() {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(launches.onAxiosFinished)
            .catch(launches.onAxiosError)
        ;

        let popupCloseButtons = document.querySelectorAll('.btn-close');
        for (let i = 0; i < popupCloseButtons.length; i++) {
            popupCloseButtons[i].addEventListener('click', launches.onPopupClose);
        }

        let tiles = document.querySelectorAll('.contentTile');
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('click', launches.onTileClick);
        }
    },

    onPopupClose: function() {
        // let's hide the popup
        let popups = document.querySelectorAll('.modal');
        for (let i = 0; i < popups.length; i++) {
            popups[i].style.display = 'none';
        }
    },
    
    onTileClick: function(event) {
        // let's show the popup
        let modalName = event.currentTarget.dataset.modalName;
        let popup = document.querySelector('.' + modalName);
        popup.style.display = 'block';
    },

    onNoOfLaunchesPressed: function() {
        alert('the no of launches was pressed');
    },

    onAxiosFinished: function(response) {
        let launchData = response.data;
        // TODO stuff here
    },

    onAxiosError: function(error) {
        console.log(error);
    }
};

launches.initialize();