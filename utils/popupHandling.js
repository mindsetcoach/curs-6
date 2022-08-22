let popupHandling = {

    popupInit: function() {
        let popupCloseButtons = document.querySelectorAll('.btn-close');
        for (let i = 0; i < popupCloseButtons.length; i++) {
            popupCloseButtons[i].addEventListener('click', popupHandling.onPopupClose);
        }

        let tiles = document.querySelectorAll('.contentTile');
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('click', popupHandling.onTileClick);
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

    showSpecificModal: function(modalClass) {
        let modal = document.querySelector(modalClass);
        modal.style.display = 'block';
    },

    hideSpecificModal: function(modalClass) {
        let modal = document.querySelector(modalClass);
        modal.style.display = 'none';
    },
}