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