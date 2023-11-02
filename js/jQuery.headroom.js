(function($) {

  if(!$) {
    return;
  }
  $.fn.headroom = function(option) {
    return this.each(function() {
      var $this   = $(this),
        data      = $this.data('headroom'),
        options   = typeof option === 'object' && option;

      options = $.extend(true, {}, Headroom.options, options);

      if (!data) {
        data = new Headroom(this, options);
        data.init();
        $this.data('headroom', data);
      }
      if (typeof option === 'string') {
        data[option]();

        if(option === 'destroy'){
          $this.removeData('headroom');
        }
      }
    });
  };

  $('[data-headroom]').each(function() {
    var $this = $(this);
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));

const check = document.querySelector('.check')
check.addEventListener('click', idioma)

function idioma(){
  let id = (check.checked)
  if (id == true) {
    location.href="../es/index.html"
  }else {
    location.href="../index.html"
  }
}


$(document).ready(function(){
  $("#project-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true, // Hace que el carrusel sea automático
    autoplayTimeout: 2000, // Establece el tiempo de espera entre cada transición en milisegundos (en este caso, 3 segundos)
    autoplayHoverPause: true, // Pausa el carrusel cuando el mouse está sobre él
  });
});