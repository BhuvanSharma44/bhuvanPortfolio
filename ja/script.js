const btn = document.getElementById("menue-btn");
const menue = document.getElementById("menue");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menue.classList.toggle("flex");
  menue.classList.toggle("hidden");
}
