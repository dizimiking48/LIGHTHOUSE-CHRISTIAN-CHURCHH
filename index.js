const cards = document.querySelectorAll('.card');

    function revealCards() {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if(cardTop < triggerBottom) {
                card.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealCards);
    window.addEventListener('load', revealCards);

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');


    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


