gsap.registerPlugin(ScrollTrigger);

// Create the logo
const logo = document.createElement("div");
logo.classList.add("logo");
logo.innerHTML = `<div class="text">Your Website</div>`;
document.body.appendChild(logo);

// Create the graphic icon
const icon = document.createElement("div");
icon.classList.add("icon");
logo.appendChild(icon);

// Set the initial styles
gsap.set(logo, {
  autoAlpha: 1,
  x: 0,
});
gsap.set(icon, {
  backgroundColor: "#000",
  width: "50px",
  height: "50px",
  maskImage: "url(path/to/your/icon.svg)",
});
gsap.set(logo.querySelector(".text"), {
  color: "#000",
  x: 0,
});

// Create the animation timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".logo",
    start: "top top",
    end: "bottom 50%",
    scrub: true,
    pin: true,
  },
});

// Animate the text disappearing
tl.to(logo.querySelector(".text"), {
  color: "#fff",
  x: "100%",
  duration: 1,
});

// Animate the icon moving to the center and becoming transparent
tl.to(icon, {
  backgroundColor: "transparent",
  width: "100%",
  height: "100%",
  duration: 1,
});

// Animate the icon enlarging and passing the window
gsap.to(icon, {
  scrollTrigger: {
    trigger: ".logo",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
  width: "100vw",
  height: "100vh",
  xPercent: -50,
  yPercent: -50,
});
