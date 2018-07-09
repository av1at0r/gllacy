let sliderButtons = document.querySelectorAll('button.slider__control');
let activeButton = document.querySelector('button.slider__control--active');
let activeSlide = document.querySelector('.slider__slide--active');


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
  document.body.style.backgroundImage = `url(${slideToShow.dataset.img})`;
  document.body.style.backgroundColor = slideToShow.dataset.color;
}

sliderButtons.forEach(button => button.onclick = sliderButtonEventHandler);
