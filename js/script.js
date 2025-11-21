document.addEventListener('DOMContentLoaded', () => {
    
    const sliderTrack = document.getElementById('js-slider-track');
    const btnPrev = document.getElementById('js-btn-prev');
    const btnNext = document.getElementById('js-btn-next');
    
    const slides = document.querySelectorAll('.gwf-bio-slider__slide');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        const percentage = currentIndex * 100;
        sliderTrack.style.transform = `translateX(-${percentage}%)`;
    }

    btnNext.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    });

    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; 
        }
        updateSliderPosition();
    });

});