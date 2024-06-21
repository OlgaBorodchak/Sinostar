document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loader.style.display = "none";
    page.style.display = "block";
  }, 3000); 
});

const loader = document.getElementById('preloader');
const page = document.querySelector('.page');


const menuToggle = document.querySelector(".menu-toggle");
const navMobile = document.querySelector(".nav-mobile-wrapper");
const navItem = document.querySelectorAll('.nav-item-mobile');

const navMobileAnimation = gsap.timeline({paused:true, reversed:true})
  .from('.nav-mobile-wrapper', {
    xPercent: '-100',
    duration: 0.8,
    ease: 'power2.out'
  })

function menuIn() {
  navMobileAnimation.reversed() ? navMobileAnimation.play() : navMobileAnimation.reverse();	
}

menuToggle.addEventListener("click", () => {
  const header = document.querySelector('header')
  const currentFilter = getComputedStyle(header).backdropFilter;

  header.style.backdropFilter = currentFilter === 'none' ? 'saturate(180%) blur(20px)' : 'none';
  header.style.webkitBackdropFilter = currentFilter === 'none' ? 'blur(20px)' : 'none';

  menuToggle.classList.toggle("open-btn")

  menuIn();
});

gsap.registerPlugin(ScrollTrigger)

gsap.to("header", {
  height: "4em", 
  duration: 0.3,
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

//Header Animation - Animated Text

const headerAnimation = gsap.timeline()

.to(".animated-text", {
  scale: 100,
  duration: 4,
  transformOrigin: "center center",
  xPercent: -240,
  delay: 3,
  opacity: 0,
  ease: "expo.in"
})

.to(".welcome-video", { 
  scale: 0.9, 
  yPercent: 15, 
  duration: 2,
  borderRadius: '2em'
}, "+=5")

.to('.banner', { 
  paddingBottom: '10%',
  duration: 2
}, '<')

.to('header', {
  opacity: 1, 
  duration: 2
}, "-=1" );

const animatedText = document.querySelector(".animated-text");

setTimeout(() => (animatedText.style.display = "none"), 8000);

// Courusel

var TrandingSlider = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination-dots",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  breakpoints: {
    320: {
      spaceBetween: 40,
    },
    480: {
      spaceBetween: 80,
    }
  }
});


//Hoodies Animation

const hoodies = [
  "./assets/variant-one.webp",
  "./assets/variant-two.webp",
  "./assets/variant-three.webp",
  "./assets/variant-four.webp",
  "./assets/variant-five.webp",
  "./assets/variant-six.webp",
  "./assets/variant-seven.webp",
];

let i = 0;

function changeHoody() {
  const image = document.querySelector(".hoody-img");
  image.src = hoodies[i];
  i++;
  if (i >= hoodies.length) {
    i = 0;
  }
}

setInterval(changeHoody, 1000);

//Circular Text

gsap.to(".circular-text", {
  rotation: 360,
  duration: 8,
  repeat: -1,
  ease: "none",
});

//Video on hover
const videoPlay = document.querySelector('video')


const zoomOnHover = document.querySelectorAll('.zoom-on-hover')

zoomOnHover.forEach((image) => {
  let zoom = gsap.timeline({ paused: true });

  zoom.to(image, {
    scale: 1.1,
    duration: .5,
    })
  zoom.to('.item-4 span', {
    scale: 1.2,
    duration: .5,
  }, '<')

  image.addEventListener("mouseenter", function () {zoom.play();});
  image.addEventListener("mouseleave", function () {zoom.reverse();});
})

//Animation Item Five

const itemFiveTitle = document.querySelector('.item-5-title')
const itemFiveImg = document.querySelector('.item-5 img')


const zoomItemFive = gsap.timeline({ paused: true });

zoomItemFive.to(itemFiveImg, {
  scale: 1.3,
  duration: 1,
})

zoomItemFive.to('.item-5-title svg', {
  xPercent: '400',
  ease: 'power3.out',
  duration: 1,
}, '<')

itemFiveTitle.addEventListener("mouseenter", function () {zoomItemFive.play();});
itemFiveTitle.addEventListener("mouseleave", function () {zoomItemFive.reverse();});

//Animation Item Thirteen

const itemThirteenTitle = document.querySelector('.item-13');
const itemAnimation = gsap.timeline({ paused: true });

itemAnimation.fromTo('.item-13-title', { y: 100 }, { autoAlpha: 1, y: 0 })
itemAnimation.fromTo('.item-13-title span', {y: 200 }, { y: 0, duration: 1 })
itemAnimation.fromTo('.item-13-title img', { y: 200 }, { y: 0, duration: 1 });

itemThirteenTitle.addEventListener("mouseenter", function () {itemAnimation.play();});
itemThirteenTitle.addEventListener("mouseleave", function () {itemAnimation.reverse();});

//Animation Item Fifteen

// const itemFifteen = document.querySelector('.item-15');
// const hoverImg = document.querySelector('.hover-img');
// const zoomImg = document.querySelector('.zoom-item-15');

// const zoomItemFifteen = gsap.timeline({ paused: true });

// zoomItemFifteen.to(zoomImg, {
//   scale: 1.3,
//   duration: 1,
// })

// itemFifteen.addEventListener("mouseenter", () => {zoomItemFifteen.play();});
// itemFifteen.addEventListener("mouseleave", () => {zoomItemFifteen.reverse();});