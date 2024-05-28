/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== SHOW CART ===============*/
const cart = document.getElementById("cart");
cartShop = document.getElementById("cart-shop");
cartClose = document.getElementById("cart-close");
/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}
/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}
/*=============== SHOW LOGIN ===============*/
const login = document.getElementById("login");
loginButton = document.getElementById("login-button");
loginClose = document.getElementById("login-close");
/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
  loginButton.addEventListener("click", () => {
    login.classList.add("show-login");
  });
}
/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove("show-login");
  });
}
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
});
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll(".question_item");

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector(".question_header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions_content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
/*=============== STYLE SWITCHER ===============*/

/*=============== OTP Verification ===============*/

document.addEventListener("DOMContentLoaded", function () {
  const otpInputs = document.querySelectorAll(".otp_digit");

  otpInputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      const currentInput = event.target;
      if (currentInput.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (event) => {
      const currentInput = event.target;
      const key = event.key;
      if (key === "Backspace" && currentInput.value.length === 0 && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });
});
function sendOTP() {
  // Simulate sending OTP to the email
  // In a real application, this would be done server-side
  let email = document.getElementById("email").value;
  let otp_value = Math.floor(10000 + Math.random() * 90000);
  let message_body = `Dear user,\n\nThank you for registering on fabX website. Your OTP for verification is: ${otp_value}\n\nPlease enter this OTP on the verification page to complete your registration.\n\nBest regards,\nThe fabX Team`;

  Email.send({
    SecureToken: "89624bd8-ba98-4283-9374-a8308b33be07",
    To: email,
    From: "musamarasheed7166@gmail.com",
    Subject: "Email Verification",
    Body: message_body,
  }).then((message) => {
    if (message === "OK") {
      alert("OTP sent to Your email " + email);
    }
  });
}
// function generateOTP() {
//   // Generate a random 5-digit OTP
//   return Math.floor(10000 + Math.random() * 90000);
// }
// if (email) {
//   const otp = generateOTP();
//
//   // Simulate sending email with OTP message
//   console.log(message);
//   document.getElementById("otpSentMessage").style.display = "block";
//   document.querySelector(".verification_button").style.display = "block";
// } else {
//   alert("Please enter your email first.");
// }
