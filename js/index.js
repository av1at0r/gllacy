var sliderButtons = document.querySelectorAll('button.slider__control');
var activeButton = document.querySelector('button.slider__control--active');
var activeSlide = document.querySelector('.slider__slide--active');
var activeBackground = document.querySelector('.slider__slide-bg.slider__slide-bg--active');
var sliderBackground = document.getElementById('slider-background');

function sliderButtonEventHandler(e) {
  if (!e.target.classList.contains('slider__control--active')) {
    activeButton.classList.remove('slider__control--active');
    showSlide(e.target.dataset.slide);
    e.target.classList.add('slider__control--active');
    activeButton = e.target;
  }
}

function showSlide(slideNumber) {
  var slideToShow = document.getElementById('slide-' + slideNumber);
  activeSlide.classList.remove('slider__slide--active')
  slideToShow.classList.add('slider__slide--active');
  activeSlide = slideToShow;
  activeBackground.classList.remove('slider__slide-bg--active');
  activeBackground = document.getElementById('slide-bg-' + slideNumber);
  activeBackground.classList.add('slider__slide-bg--active');
  sliderBackground.style.backgroundColor = slideToShow.dataset.color;
}


for (var i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].onclick = sliderButtonEventHandler;
}


var indexFeedbackShowButton = document.getElementById('index-feedback-show');
indexFeedbackShowButton.onclick = function() {
  var feedback = document.getElementById('index-feedback');
  feedback.classList.add('feedback--active');
  feedback.querySelector('input').focus();
}

var indexFeedbackCloseButton = document.getElementById('index-feedback-close');
indexFeedbackCloseButton.onclick = function() {
  document.getElementById('index-feedback').classList.remove('feedback--active');
  indexFeedbackShowButton.focus();
}
