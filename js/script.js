// toggle nav active
const navNavbar = document.querySelector(".nav-navbar");

// klik menu
document.querySelector("#menu").onclick = () => {
  navNavbar.classList.toggle("active");
};

// off menu
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navNavbar.contains(e.target)) {
    navNavbar.classList.remove("active");
  }
});
