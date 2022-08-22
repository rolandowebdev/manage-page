const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  !primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', true)
    : navToggle.setAttribute('aria-expanded', false);

  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  slidesToShow: 1,
  arrows: false,
  dots: true,
  responsive: {
    1280: {
      slidesToShow: 3,
    },
    480: {
      slidesToShow: 2,
      arrows: true,
      dots: false, // dots enabled 1280px and up
    },
  },
});
