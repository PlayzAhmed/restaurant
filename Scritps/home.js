const phone = document.getElementById("phone");
phone.addEventListener("click", () => {
  phone.querySelector("p").classList.add("active");
  var input = document.createElement("input");
  input.value = "+201001199523";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  setTimeout(() => {
    phone.querySelector("p").classList.remove("active");
  }, 1000);
});

function goToLink(url) {
  window.open(url, "_blank");
}

const popUp = document.querySelector(".popup");
const home = document.querySelector(".home");
const food = document.querySelector(".food");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function showPopUp() {
  popUp.classList.add("active");
  home.classList.add("active");
  food.classList.add("active");
  main.classList.add("active");
  footer.classList.add("active");
}

function closePopUp() {
  popUp.classList.remove("active");
  home.classList.remove("active");
  food.classList.remove("active");
  main.classList.remove("active");
  footer.classList.remove("active");
}
