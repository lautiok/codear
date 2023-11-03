const checks = document.querySelector('.check');
checks.addEventListener('click', idioma);

function idioma() {
  let id = checks.checked;
  if (id) {
    location.href = "../es/index.html";
  } else {
    location.href = "../index.html";
  }
}

$(document).ready(function() {
  $("#project-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
});

(function($) {
  "use strict";

  // COLOR MODE
  $('.color-mode').click(function() {
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
  });

  // SMOOTHSCROLL
  $('.nav-link, .custom-btn-link').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 49
    }, 1000);
    event.preventDefault();
  });

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);
