const menuOverlay = document.querySelector("#navigation");
const mobileMenuButton = document.querySelector("#mobileMenuButton");

const toogleMenu = () => {
    menuOverlay.style.display = 'block';
}

const closeMobileMenu = () => {
    menuOverlay.style.display = 'none';
}

mobileMenuButton.addEventListener('click', toogleMenu);

const mobileMenuLinks = document.querySelectorAll(".navigation li a");
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener("click", () => {
    closeMobileMenu();
  });
}