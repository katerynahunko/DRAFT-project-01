document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const dotsContainer = document.querySelector('.slider-dots');
  const slides = Array.from(document.querySelectorAll('.slide'));
  
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    
    dot.addEventListener('click', () => {
      setActiveSlide(index);
    });
    
    dotsContainer.appendChild(dot);
  });

  function setActiveSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    
    const activeDot = document.querySelector('.dot.active');
    if (activeDot) {
      activeDot.classList.remove('active');
    }
    
    const dots = Array.from(document.querySelectorAll('.dot'));
    dots[index].classList.add('active');
  }
  
  setActiveSlide(0);
});
