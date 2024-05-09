/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*=============== SHOW CART ===============*/

/*===== CART SHOW =====*/
/* Validate if constant exists */

/*===== CART HIDDEN =====*/
/* Validate if constant exists */

/*=============== SHOW LOGIN ===============*/

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */

/*=============== HOME SWIPER ===============*/

var homeSwiper = new Swiper(".home_swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*=============== SHOW SCROLL UP ===============*/

/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/

/*=============== STYLE SWITCHER ===============*/
