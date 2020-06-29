window.onload = function () {
  $('a.nav-link').on('click', function () {
    $('a.active').removeClass('active');
    $(this).addClass('active');
  });
};
