const logo = document.querySelector('.logo');
const icon = document.querySelector('.icon');

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        logo.classList.add('animate');
    }
});

observer.observe(logo);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const logoHeight = logo0% {
        background-color: transparent;
    }
}

@keyframes textDisappear {
    0% {
        opacity.offsetHeight;

    if (scrollTop > windowHeight - logoHeight) {
        icon: 1;
    }
    100% {
        opacity: 0.style.transform = `scale(${window.innerWidth / icon.offsetWidth})`;
    }
});
