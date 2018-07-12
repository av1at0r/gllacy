let sliderButtons = document.querySelectorAll('button.slider__control');
let activeButton = document.querySelector('button.slider__control--active');
let activeSlide = document.querySelector('.slider__slide--active');
const sliderBackground = document.getElementById('slider-background');

function sliderButtonEventHandler(e) {
  if (!e.target.classList.contains('slider__control--active')) {
    activeButton.classList.remove('slider__control--active');
    showSlide(e.target.dataset.slide);
    e.target.classList.add('slider__control--active');
    activeButton = e.target;
  }
}

function showSlide(slideNumber) {
  const slideToShow = document.getElementById(`slide-${slideNumber}`);
  activeSlide.classList.remove('slider__slide--active')
  slideToShow.classList.add('slider__slide--active');
  activeSlide = slideToShow;
  sliderBackground.style.backgroundImage = `url(${slideToShow.dataset.img})`;
  sliderBackground.style.backgroundColor = slideToShow.dataset.color;
}

sliderButtons.forEach(button => button.onclick = sliderButtonEventHandler);


const indexFeedbackShowButton = document.getElementById('index-feedback-show');
indexFeedbackShowButton.onclick = () => {
  const feedback = document.getElementById('index-feedback');
  feedback.classList.add('feedback--active');
  feedback.querySelector('input').focus();
}

const indexFeedbackCloseButton = document.getElementById('index-feedback-close');
indexFeedbackCloseButton.onclick = () => {
  document.getElementById('index-feedback').classList.remove('feedback--active');
  indexFeedbackShowButton.focus();
}
