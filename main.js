// GSAP animation sequence
gsap.to(".logo-text", { duration: 1, opacity: 0, x: "100px", delay: 2 });
gsap.to(".logo-icon", { duration: 1, opacity: 0.5, scale: 1.5, xPercent: -50, yPercent: -50, delay: 2 });

// Scroll trigger animation
gsap.to(".logo-icon", {
    scrollTrigger: {
        trigger: ".logo-icon",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    },
    scale: 3, // Adjust scale as needed
});
