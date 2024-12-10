const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;
const totalImages = images.length;

// Asegúrate de que el contenedor tenga el ancho correcto basado en el número de imágenes
carouselImages.style.width = `${totalImages * 100}%`; // El contenedor es tan ancho como todas las imágenes juntas

// Función para actualizar la posición del carrusel
function updateCarousel() {
  const offset = -currentIndex * (100 / totalImages); // Desplazamos el ancho en función de la fracción del total
  carouselImages.style.transform = `translateX(${offset}%)`;
}

// Evento para botón "Anterior"
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Si está en la primera imagen, va a la última
  }
  updateCarousel();
});

// Evento para botón "Siguiente"
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Si está en la última imagen, vuelve a la primera
  }
  updateCarousel();
});
