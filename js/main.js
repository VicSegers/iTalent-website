(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling 
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  // Collapse navbar and overzichtDropdown
  let navbarCollapse = function(e) {
    if (e.target.id != "overzichtNav") {
      $('#navbarNavDropdown').collapse('hide');
    }
    $('#overzichtDropdown').collapse('hide');
  }

  // Collapse navbar and overzichtDropdown after clicking it or when scrolling
  $('.navbar-nav>li>a').on('click', navbarCollapse);
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict