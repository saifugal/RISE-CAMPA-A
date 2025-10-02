function zoomCanva() {
  const iframe = document.getElementById('canvaFrame');
  iframe.style.transform = iframe.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
  iframe.style.transition = 'transform 0.5s ease';
}

function mostrarIdentidad() {
  alert("¡Gracias por sentir la esencia VitaFruti! Tu energía también forma parte de este viaje ");
}

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('visible');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  const transportCard = document.querySelector('.transport-card');
  transportCard.classList.add('animate__animated', 'animate__bounceIn');
});