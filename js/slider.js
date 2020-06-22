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