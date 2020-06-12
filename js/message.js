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



