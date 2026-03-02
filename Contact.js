// ===== SCROLL REVEAL =====
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add("active");
            } else {
                // Optional: remove active if scrolling back up
                el.classList.remove("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

// ===== FORM CARD HOVER GLOW =====
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 35px rgba(212,175,55,0.6)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 0 25px rgba(212,175,55,0.4)";
    });
});


