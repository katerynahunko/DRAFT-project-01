// Отримуємо необхідні елементи з DOM
const sliderContainer = document.querySelector('.slider-container');
const dotsContainer = document.querySelector('.slider-dots');

// Отримуємо всі слайди
const slides = Array.from(document.querySelectorAll('.slide'));

// Створюємо точки відповідно до кількості слайдів
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  
  // Налаштовуємо обробник події для переключення слайдів при кліку на точку
  dot.addEventListener('click', () => {
    setActiveSlide(index);
  });
  
  dotsContainer.appendChild(dot);
});

// Функція для встановлення активного слайда та активної точки
function setActiveSlide(index) {
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
  
  const activeDot = document.querySelector('.dot.active');
  if (activeDot) {
    activeDot.classList.remove('active');
  }
  
  const dots = Array.from(document.querySelectorAll('.dot'));
  dots[index].classList.add('active');
}

// Задаємо початковий активний слайд та точку (при потребі)
setActiveSlide(1);
