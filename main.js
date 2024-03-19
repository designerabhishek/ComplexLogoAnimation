document.addEventListener('DOMContentLoaded', function() {
    // Fade in the logo after a delay
    gsap.to('.logo-container', { opacity: 1, duration: 0.5, delay: 1 });

    // After a delay, hide the text and move the icon to the center
    setTimeout(function() {
        gsap.to('.logo-text', { opacity: 0, duration: 0.5 });
        gsap.to('.logo-icon', { x: '-50%', opacity: 0.5, duration: 0.5 });
    }, 2000);

    // Scroll trigger: When the user starts scrolling, scale up the icon
    gsap.to('.logo-icon', {
        scale: 2,
        scrollTrigger: {
            trigger: '.logo-container',
            start: 'top center',
            end: 'bottom top',
            scrub: true
        }
    });
});
