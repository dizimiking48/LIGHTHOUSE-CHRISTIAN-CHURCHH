// ===== DATE BADGE + COUNTDOWN + NEXT EVENT HIGHLIGHT =====

const events = document.querySelectorAll(".event-card");

function getNextEventDate(day, time) {
  const now = new Date();
  const [hour, minute] = time.split(":").map(Number);

  let eventDate = new Date();
  eventDate.setHours(hour, minute, 0, 0);

  const today = now.getDay();
  let diff = day - today;

  if (diff < 0 || (diff === 0 && eventDate < now)) {
    diff += 7;
  }

  eventDate.setDate(now.getDate() + diff);
  return eventDate;
}

function updateEvents() {
  const now = new Date();
  let closestEvent = null;
  let smallestDiff = Infinity;

  events.forEach(card => {
    const day = parseInt(card.dataset.day);
    const time = card.dataset.time;

    const dateEl = card.querySelector(".date");
    const countdownEl = card.querySelector(".countdown");

    const eventDate = getNextEventDate(day, time);

    dateEl.textContent = eventDate.getDate();

    const diff = eventDate - now;

    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestEvent = card;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
  });

  events.forEach(card => card.classList.remove("next-event"));

  if (closestEvent) {
    closestEvent.classList.add("next-event");
  }
}

setInterval(updateEvents, 1000);
updateEvents();


// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));