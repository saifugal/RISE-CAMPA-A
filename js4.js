function zoomMapa() {
  const mapa = document.getElementById('mapaUbicacion');
  mapa.style.transform = mapa.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
  mapa.style.transition = 'transform 0.5s ease';
}

function mostrarSalubridad() {
  alert("¡VitaFruti está aprobado por MSPAS y NutriLab! Tu salud es nuestra prioridad ");
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