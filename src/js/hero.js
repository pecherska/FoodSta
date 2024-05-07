const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slider-image');
console.log(slides);

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', previousSlide);

let currentSlidesInx = 0;
console.log(currentSlidesInx);

function showSlide() {
  slides[currentSlidesInx].classList.add('block');
}

function hideSlide() {
  slides[currentSlidesInx].classList.remove('block');
}

function nextSlide() {
  hideSlide();

  currentSlidesInx = currentSlidesInx + 1;
  if (currentSlidesInx > slides.length - 1) {
    currentSlidesInx = 0; // Встановлюємо індекс на 0, якщо досягнутий останній слайд
  }
  showSlide();
}

function previousSlide() {
  hideSlide();
  currentSlidesInx = currentSlidesInx - 1;
  currentSlidesInx =
    currentSlidesInx < 0 ? slides.length - 1 : currentSlidesInx;
  showSlide();
}
