const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // event listener for nav bar 
    burger.addEventListener('click', () => {
        // toggle nav bar to burger
        nav.classList.toggle('nav-active');
        // animate nav links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
            link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // toggle burger to 'x' animation
        burger.classList.toggle('burger-toggle');
    });
    
}

navSlide();