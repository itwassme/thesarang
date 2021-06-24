const navTag = document.querySelector('div.navigation');
const mainLogo = document.querySelector('.mainlogo');

const toggleHeader = function () {
  const pixels = window.pageYOffset;
  if (pixels > 95) {
    navTag.classList.add('scrolled');
    $('.mainlogo').attr('src', 'assets/logo.svg');
  } else {
    navTag.classList.remove('scrolled');
    $('.mainlogo').attr('src', 'assets/logo_white.svg');
  }
};

const fadeBox = function () {
  const pixels = window.pageYOffset;
  const alpha = Math.min(pixels / 2000, 0.25);
  navTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`;
};

// run function on load
fadeBox();
toggleHeader();

// run function on scroll
document.addEventListener('scroll', function () {
  toggleHeader();
  fadeBox();
});
