const scrollToTop = document.querySelector(".scrollToTop");
const overlay = document.getElementById("overlay");

AOS.init({
  offset: 200,
  duration: 900,
});

window.onscroll = () => {
  if (window.scrollY > 300) scrollToTop.classList.add("show-scrollToTop");
  else scrollToTop.classList.remove("show-scrollToTop");
};

window.onload = () => {
  overlay.remove();
};

// load pages

$(function () {
  $("#top-bar").load("./topBar.html");
});

$(function () {
  $("#header").load("./header.html");
});

$(function () {
  $("#footer").load("./footer.html");
});
