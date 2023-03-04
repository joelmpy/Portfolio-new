// Header toggle //

let btn = document.getElementById("MenuBtn");

btn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-solid -xmark");
});

// Home text animation //

let paragraph = document.querySelector('.paragraph')

new Typewriter (paragraph, {
  lopp : true,
   deleteSpeed : 70,
})
.typeString("<span>Développeur web</span>")
.pauseFor(280)
.deleteChars(4)
.typeString("<span> full-stack</span>")
.pauseFor(300)
.start()

// Dark mode //

let iconMode = document.getElementById("moon")
console.log(iconMode);
iconMode.addEventListener('click', function() {
  document.querySelector("body").classList.toggle("dark-theme");
})