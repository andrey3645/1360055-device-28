//message

var messagePopup = document.querySelector('.message-popup-wrapper');
var messageButtonOpen = document.querySelector('.button-contacts');
var messageButtonClose = messagePopup.querySelector('.close');
var fullName = messagePopup.querySelector('[name="full-name"]');
var email = messagePopup.querySelector('[type="email"]');
var messageText = messagePopup.querySelector('[name="message-text"]');
var messageForm = messagePopup.querySelector('.message-popup-form');

var isStorageSupport = true;
var storage = '';

try {
    storage = localStorage.getItem('name');
} catch (err) {
    isStorageSupport = false;
}

messageButtonOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    messagePopup.classList.add('popup--active');
    if (storage) {
        fullName.value = storage;
        email.focus();
    } else {
        fullName.focus();
    }
});

messageButtonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove('popup--active');
    messagePopup.classList.remove('popup--error');
});

messageForm.addEventListener('submit', function (evt) {
    if (!fullName.value || !email.value || !messageText.value) {
        evt.preventDefault();
        messagePopup.classList.remove('popup--error');
        messagePopup.offsetWidth = messagePopup.offsetWidth;
        messagePopup.classList.add('popup--error');
        messageText.focus();
    } else {
        localStorage.setItem('name', fullName.value);
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (messagePopup.classList.contains('popup--active')) {
            evt.preventDefault();
            messagePopup.classList.remove('popup--active');
            messagePopup.classList.remove('popup--error');
        }
    }
});

//map popup

var mapPopup = document.querySelector('.map-popup-wrapper');

var mapPopupOpen = document.querySelector('.info__contacts-map');

var mapPopupClose = document.querySelector('button.map-close');

mapPopupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
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

// slider

var sliderButton1 = document.getElementById('slider-btn-1');

var sliderButton2 = document.getElementById('slider-btn-2');

var sliderButton3 = document.getElementById('slider-btn-3');

var firstSlide = document.getElementById('first-slide');

var secondSlide = document.getElementById('second-slide');

var thirdSlide = document.getElementById('third-slide');

sliderButton1.addEventListener('click', function() {
    sliderButton2.classList.remove('checked');
    sliderButton3.classList.remove('checked');
    sliderButton1.classList.add('checked');
    secondSlide.classList.remove('current-slide');
    thirdSlide.classList.remove('current-slide');
    firstSlide.classList.add('current-slide');
});

sliderButton2.addEventListener('click', function() {      
    sliderButton3.classList.remove('checked');
    sliderButton1.classList.remove('checked');
    sliderButton2.classList.add('checked');
    thirdSlide.classList.remove('current-slide');
    firstSlide.classList.remove('current-slide');
    secondSlide.classList.add('current-slide');
});

sliderButton3.addEventListener('click', function() {     
    sliderButton1.classList.remove('checked');
    sliderButton2.classList.remove('checked');
    sliderButton3.classList.add('checked');
    firstSlide.classList.remove('current-slide');
    secondSlide.classList.remove('current-slide');
    thirdSlide.classList.add('current-slide');
});

// services 

var servicesButton1 = document.getElementById('services-btn-1');
console.log(servicesButton1);

var servicesButton2 = document.getElementById('services-btn-2');
console.log(servicesButton2);

var servicesButton3 = document.getElementById('services-btn-3');
console.log(servicesButton3);

var servicesSlide1 = document.querySelector('.first');
console.log(servicesSlide1);

var servicesSlide2 = document.querySelector('.second');
console.log(servicesSlide2);

var servicesSlide3 = document.querySelector('.third');
console.log(servicesSlide3);

servicesButton1.addEventListener('click', function() {
    servicesButton2.classList.remove('services__slider-button--active');
    servicesButton3.classList.remove('services__slider-button--active');
    servicesButton1.classList.add('services__slider-button--active');
    servicesSlide2.classList.remove('active');
    servicesSlide3.classList.remove('active');
    servicesSlide1.classList.add('active');
});

servicesButton2.addEventListener('click', function() {    
    servicesButton3.classList.remove('services__slider-button--active');
    servicesButton1.classList.remove('services__slider-button--active');
    servicesButton2.classList.add('services__slider-button--active');    
    servicesSlide3.classList.remove('active');
    servicesSlide1.classList.remove('active');
    servicesSlide2.classList.add('active');
});

servicesButton3.addEventListener('click', function() {   
    servicesButton1.classList.remove('services__slider-button--active');
    servicesButton2.classList.remove('services__slider-button--active');    
    servicesButton3.classList.add('services__slider-button--active');
    servicesSlide1.classList.remove('active');
    servicesSlide2.classList.remove('active');
    servicesSlide3.classList.add('active');
});



