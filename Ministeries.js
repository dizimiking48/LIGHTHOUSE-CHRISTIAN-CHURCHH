

// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Smooth hover glow pulse
const cards = document.querySelectorAll(".ministry-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 35px rgba(212,175,55,0.6)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 0 25px rgba(212,175,55,0.4)";
  });
});