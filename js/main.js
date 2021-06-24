const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');
const sections = document.querySelectorAll('section');

// scrollbar Animation
// document.addEventListener('scroll', function () {
//   const pixels = window.pageYOffset;
//   const pageHeight = bodyTag.getBoundingClientRect().height;
//   const totalScrollableDistance = pageHeight - window.innerHeight;

//   const percentage = (pixels / totalScrollableDistance) * 100;
//   progressTag.style.width = `${percentage}%`;

//   // change the progress bar's color when bg is white
//   sections.forEach(section => {
//     if(section.offsetTop - 20 <= pixels) {
//       if(section.hasAttribute("bg-is-white")){
//         progressTag.classList.add("red")
//       } else {
//         progressTag.classList.remove("red")
//       }
//     }
//   })
// });

// parallax
document.addEventListener('scroll', function () {
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight / 2;

  sections.forEach((section) => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;
    const distanceToSection = midViewport - midSection;
    const parallaxTags = section.querySelectorAll(`[data-parallax]`);

    // loop over each parallaxed tag
    parallaxTags.forEach((tag) => {
      const speed = parseFloat(tag.getAttribute('data-parallax'));
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
    });
  });
});

// modal animation
$('.modal-left').on('click', function () {
  $('.modal').fadeOut(500);
  $('article').css('display', 'block');
  $('body').css('overflow', 'scroll');
  $('.business-wrapper').css('display', 'flex');
  $('div.navigation').css('display', 'flex');
  return false;
});
