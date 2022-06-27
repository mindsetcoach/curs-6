
axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function(response) {
        // handle success
        console.log(response);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
;

let onPopupClose = function() {
    // let's hide the popup
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
};

let onTileClick = function() {
    // let's show the popup
    let popup = document.querySelector('.popup');
    popup.style.display = 'block';
};

let popupCloseButton = document.querySelector('.popupHeader > span');
popupCloseButton.addEventListener('click', onPopupClose);

let tiles = document.querySelectorAll('.contentTile');
for (let i = 0; i < tiles.length; i++) {

    let theTile = tiles[i];
    theTile.addEventListener('click', onTileClick);
}