let slides;
    let currentSlide = 0;

    document.addEventListener("DOMContentLoaded", () => {
      slides = document.querySelectorAll(".carousel > figure");
      showSlide(currentSlide); 
    });

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function goToSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }