// Bilder Karusell
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

// Transition Bilder fade-in
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  document.addEventListener('DOMContentLoaded', () =>{
    const fadeInElements = document.querySelectorAll('.fade-in');

    document.addEventListener('scroll', function(){
      fadeInElements.forEach(element => {
        if(isInViewport(element)){
          element.classList.add("fade-in-active");
        }

      });
    })

  })
    