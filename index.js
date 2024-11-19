const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const checkScroll = () => {
  const scrolledDown = window.scrollY > 0;

  if (scrolledDown && !isScrolled) {
    nav.classList.add("scrolled");
    isScrolled = true;
  } else if (!scrolledDown && isScrolled) {
    nav.classList.remove("scrolled");
    isScrolled = false;
  }
};