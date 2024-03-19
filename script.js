gsap.to('.logo-icon', {
  scrollTrigger: {
    trigger: window, // Entire window acts as the trigger
    start: "top top", // Animation starts when the element hits the top of the viewport
    end: "bottom bottom", // Animation ends when the element reaches the bottom of the viewport
    scrub: true, // Animation progresses as you scroll (adjust scrub value for speed)
    scale: 5, // Increase the image size as you scroll
    ease: "none" // Use linear ease for consistent growth
  }
});
