let tombol = document.getElementById("hidden");
let menu_navbar = document.getElementById("navbar");
let tombol_X = document.getElementById("hiden");
let tombol_toogle = document.getElementById("togel");

tombol.addEventListener("click", () => {
  menu_navbar.classList.add("hide-bar");
});
tombol_X.addEventListener("click", () => {
  menu_navbar.classList.remove("hide-bar");
});

// tombol_toogle.addEventListener("click", () => {
//   menu_navbar.classList.toggle("hide-bar");
// });


