// Page 1 airplane

let airplane = document.querySelector(".airplane");
let go = document.querySelector(".go");
let cache = document.querySelector(".cache");
let reload = document.querySelector(".reload");

go.addEventListener("click", () => {
  airplane.classList.add("active");
  cache.classList.add("active");
  reload.classList.remove("active");
});

reload.addEventListener("click", () => {
  airplane.classList.remove("active");
  cache.classList.remove("active");
  reload.classList.add("active");
});

let bicycle = document.querySelector(".bicycle");
let go2 = document.querySelector(".go2");
let cache2 = document.querySelector(".cache2");
let reload2 = document.querySelector(".reload2");

go2.addEventListener("click", () => {
  bicycle.classList.add("active");
  cache2.classList.add("active");
  reload2.classList.remove("active");
});

reload2.addEventListener("click", () => {
  bicycle.classList.remove("active");
  cache2.classList.remove("active");
  reload2.classList.add("active");
});
