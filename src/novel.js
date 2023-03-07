// the beginning of the up button
let upBtn = document.querySelector(".up-button");
window.onscroll = () => {
  if (window.scrollY >= 700) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
};
upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// the beginning of the slider part of novel-seo team
var counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 8) {
    counter = 1;
  }
}, 2000);
// the end of the slider part of novel-seo team
// the end slider part
// the beginning of the content of cards part
let h3 = document.querySelectorAll(".content-card h3");
let p = document.querySelectorAll(".content-card p");
for (let i = 0; i < h3.length; i++) {
  h3[i].addEventListener("click", () => {
    p[i].classList.toggle("block");
    h3[i].classList.toggle("background");
  });
}
// the end of the content of cards part
// swiper cards
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // the responsive styles
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// the motion of the cards of the novel-seo people
// var count = 1;
// setInterval(() => {
//   document.getElementById("card" + count).checked = true;
//   count++;
//   if (count > 8) {
//     count = 1;
//   }
// }, 1500);
// animation; of intersection observer
// the beginning of the animation section
// let shower = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });
// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => shower.observe(el));

// the hamburgur menu
let hamburger = document.getElementById("hamburger");
let menu = document.querySelector("ul.menu");
hamburger.addEventListener("click", () => {
  console.log("click");
  menu.classList.toggle("active");
});
console.log(window.innerWidth);
AOS.init();
