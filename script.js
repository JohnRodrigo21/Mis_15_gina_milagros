// Crear mariposas infinitas flotando
const container = document.querySelector(".butterfly-container");

for (let i = 0; i < 25; i++) {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");
  butterfly.style.left = Math.random() * 100 + "vw";
  butterfly.style.animationDuration = 10 + Math.random() * 10 + "s";
  butterfly.style.animationDelay = Math.random() * 10 + "s";
  butterfly.style.opacity = 0.5 + Math.random() * 0.5;
  container.appendChild(butterfly);
}

// ⏳ Cuenta regresiva
const countdown = () => {
  const targetDate = new Date("Oct 11, 2025 19:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<p>¡El gran día ha llegado! 🎉</p>";
  }
};

setInterval(countdown, 1000);

// Mostrar / Ocultar línea de tiempo de recuerdos
document.getElementById('toggleTimeline').addEventListener('click', () => {
  const timeline = document.getElementById('timeline');
  const button = document.getElementById('toggleTimeline');
  if (timeline.style.display === 'block') {
    timeline.style.display = 'none';
    button.innerHTML = '<i class="bi bi-images"></i> Ver más recuerdos';
  } else {
    timeline.style.display = 'block';
    button.innerHTML = '<i class="bi bi-arrow-up-circle"></i> Ocultar recuerdos';
  }
});

// Clic en foto para abrir en modal grande
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".timeline-item img");

images.forEach(img => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    const modal = new bootstrap.Modal(document.getElementById("imgModal"));
    modal.show();
  });
});

