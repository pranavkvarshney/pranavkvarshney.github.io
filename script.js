function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var typed = new Typed(".text", {
  strings: ["Full-Stack Developer", "AI/ML Developer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  responsive: [
    {
      breakpoint: 600,
      options: {
        typeSpeed: 100,
        backSpeed: 100
      }
    }
  ]
});
// Add this to your script.js file
// This script adds touch support for mobile devices
