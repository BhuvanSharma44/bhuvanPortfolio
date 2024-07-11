const btn = document.getElementById("menue-btn");
const menue = document.getElementById("menue");
const hideMenue = document.querySelector(".out");
const hideMenueTwo = document.querySelector(".outTwo");
const hideMenueThree = document.querySelector(".outThree");
const hideMenueFour = document.querySelector(".outFour");

btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  menue.classList.toggle("flex");
  menue.classList.toggle("hidden");
}

function navToggleTwo() {
  menue.classList.add("hidden");
  btn.classList.toggle("open");
}

hideMenue.addEventListener("click", navToggleTwo);
hideMenueTwo.addEventListener("click", navToggleTwo);
hideMenueThree.addEventListener("click", navToggleTwo);
hideMenueFour.addEventListener("click", navToggleTwo);
