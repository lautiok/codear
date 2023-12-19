// Función para cambiar la ubicación de la página según el estado del checkbox
const checkbox = document.querySelector('.check');
checkbox.addEventListener('click', () => {
  const isChecked = checkbox.checked;
  location.href = isChecked ? '../es/index.html' : '../index.html';
});

// Inicialización del plugin Owl Carousel
$(document).ready(() => {
  $("#project-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });

  // Cambiar el modo de color
  $('.color-mode').click(() => {
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
  });

  // Desplazamiento suave y manejo de errores
  $('.nav-link, .custom-btn-link').on('click', function(event) {
    try {
      event.preventDefault();
      const $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
    } catch (error) {
      console.error('Error en el desplazamiento suave:', error);
    }
  });

  // Agregar tooltips a los enlaces sociales
  $('.social-links a').tooltip();
});