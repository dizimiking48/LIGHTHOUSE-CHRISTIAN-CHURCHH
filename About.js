// ===== SCROLL REVEAL ANIMATION =====
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // trigger point

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add("active");
            } else {
                // Optional: Remove class if scrolling up
                el.classList.remove("active");
            }
        });
    };

    // Trigger on scroll
    window.addEventListener("scroll", revealOnScroll);
    // Trigger on load
    revealOnScroll();
});

// ===== OPTIONAL: SMOOTH CARD HOVER GLOW =====
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 35px rgba(212,175,55,0.6)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 0 25px rgba(212,175,55,0.4)";
    });
});