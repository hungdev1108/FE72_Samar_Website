// testimonialThumbs
var testimonialThumbs = new Swiper('.testimonial__thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  freeMode: true,
  autoplay: true,
  loop: true,
  speed: 3000,
});

// testimonialComment
var testimonialContent = new Swiper('.testimonial__comment', {
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  speed: 3000,
  thumbs: {
    swiper: testimonialThumbs,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// owlcarousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});

// wow
new WOW().init();

// counter up
$('.counter').countUp();

// backToTop hide and show (Tham khao W3School)
var backToTop = document.getElementById('back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// Function scrollFunction handle
function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
