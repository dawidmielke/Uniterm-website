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