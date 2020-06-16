var mapPopup = document.querySelector('.map-popup-wrapper');
console.log(mapPopup);

var mapPopupOpen = document.querySelector('.info__contacts-map');
console.log(mapPopupOpen);

var mapPopupClose = document.querySelector('button.map-close');
console.log(mapPopupClose);

mapPopupOpen.addEventListener('click', function () {
    mapPopup.classList.add('popup--active');
});

mapPopupClose.addEventListener('click', function () {
    mapPopup.classList.remove('popup--active');
});

// Эскейп

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains('popup--active')) {
            evt.preventDefault();
            mapPopup.classList.remove('popup--active');
        }
    }
});

// Пробел

mapPopupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 32) {
        if (!mapPopup.classList.contains('popup--active')) {
            evt.preventDefault();
            mapPopup.classList.add('popup--active');
        }
    }
});
