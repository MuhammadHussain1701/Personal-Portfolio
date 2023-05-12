(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

var typingEffect = new Typed(".multiText", {
  strings: ["A Front End Developer", "A Back End Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 180,
  backDelay: 200,
});
