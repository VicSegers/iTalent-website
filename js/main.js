(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: (target.offset().top - 56)
  //       }, 1000, "easeInOutExpo");
  //       return false;
  //     }
  //   }
  // });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  // Collapse navbar
  let navbarCollapse = function() {
    $('.navbar-collapse').collapse('hide');
  }

  // Collapse navbar after clicking it or when scrolling
  $('.navbar-nav>li>a').on('click', navbarCollapse);
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict