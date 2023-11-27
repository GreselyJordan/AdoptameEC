const menuIcon = document.querySelector("#openMenu");
const menuMobile = document.querySelector("#menuMobile");
const closeIcon = document.querySelector("#close_icon");

menuIcon.addEventListener("click", function () {
  menuMobile.classList.toggle("active");
  menuMobile.classList.toggle("menu_mobile");
});

closeIcon.addEventListener("click", function () {
  menuMobile.classList.toggle("active");
  menuMobile.classList.toggle("menu_mobile");
});
