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

// stamp animation
// stamp animation
let number = 0
const stamps = [
  "assets/heart1.svg",
  "assets/heart2.svg",
]

const stampsTag = document.querySelector("div.stamps")

const addStamp = function(x,y){
  // <img src="circle.svg">
  const img = document.createElement("img")
  img.setAttribute("src", stamps[number])

  // remove half the window width
  img.style.left = (x - window.innerWidth / 2) + "px"
  img.style.top = y + "px"

  // append the img to the document
  stampsTag.appendChild(img)

  // add audio
  const audio = document.createElement('audio')
  audio.setAttribute('src', 'assets/plop.mp3')
  audio.play()

  // increase the number for random stamps
  number = number + 1
  if (number > stamps.length - 1) {
    number = 0
  }
}

document.addEventListener("click", function (event) {
  addStamp(event.pageX, event.pageY)
})
