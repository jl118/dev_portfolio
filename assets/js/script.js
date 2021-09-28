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

const typewriterEffect = () => {
    const texts = ['Full Stack Web Developer', 'Graphic Designer', 'Terrible Singer', 'Mario Kart Champion'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    (function type(){

        if(count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typing').textContent = letter;
        if(letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 200);
        }
        
    }());
}

typewriterEffect();
navSlide();