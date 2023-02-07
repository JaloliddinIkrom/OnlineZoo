const elBurger = document.querySelector(".site-header__btn");
const elSiteNav = document.querySelector(".sitenav");
const elModal = document.querySelector(".modal");
const elMyContact = document.querySelector(".site-header__click");
const elResetBurger = document.querySelector(".reset");
const elOverlay = document.querySelector(".overlay");
const elLogin = document.querySelector(".site-header__login");
const elSiteHeader = document.querySelector(".site-header");
const elContactUs = document.querySelector(".sitenav__modal-mobile");
const elContactModal = document.querySelector(".contact");
const elResetContact = document.querySelector(".modal-contact__reset");

elBurger.addEventListener("click" , function(){
    elSiteNav.classList.toggle("active");
})

elContactUs.addEventListener("click", () => {
    elOverlay.classList.add("modal-on");
    elContactModal.classList.add("contact-on");
    elSiteHeader.classList.add("modal-on");
});

elResetContact.addEventListener("click", () => {
  elOverlay.classList.remove("modal-on");
  elContactModal.classList.remove("contact-on");
});

elMyContact.addEventListener("click", () => {
    elOverlay.classList.add("modal-on");
    elModal.classList.add("modal-on");
});

elResetBurger.addEventListener("click", () => {
    elOverlay.classList.remove("modal-on");
    elModal.classList.remove("modal-on");
});

elLogin.addEventListener("click", () => {
    elOverlay.classList.add("modal-on");
    elModal.classList.add("modal-on");
    elSiteHeader.classList.add("modal-on");
});

