document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    perPage: 3,
    focus  : 0,
  } );
  splide.mount();
} );

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


const scrollToTopButton = document.getElementById("scroll");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  function checkScreenWidth(){
    if(window.matchMedia('(max-width: 58em)').matches){
      scrollToTopButton.style.display = "none";
    }
  }
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("scroll").style.display = "block";
  } else {
    document.getElementById("scroll").style.display = "none";
  }
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
}

document.getElementById("scroll").addEventListener("click", function() {
  document.body.scrollTo({
    top: 0,
    behavior: 'smooth'
  }); // For Safari
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  }); // For Chrome, Firefox, IE and Opera
});


const scrollBtn = document.getElementById("scroll-btn");

scrollBtn.addEventListener("click", function(){
  const section = document.getElementById("about");
  section.scrollIntoView({behavior: "smooth"});
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});