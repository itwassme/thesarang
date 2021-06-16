// fade in animation
const animatedTags = document.querySelectorAll('h1, h2, h3, p, .intro img, .message img, .card img')

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function(){
  let delay = 0.2
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    if(tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 0.4s ${delay}s both`
      delay = delay + 0.1
    } else {
      tag.style.opacity = 0
      tag.style.animation = ''
    }
  })
}

fadeIn()

document.addEventListener("scroll", function () {
  fadeIn()
})

window.addEventListener("resize", function () {
  fadeIn()
})

