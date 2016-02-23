var timeout;

$(window).on('scroll', function () {
  // make less blurry
  $('body').addClass('not-blurred');

  clearTimeout(timeout);
  timeout = setTimeout(function () {
      $('body').removeClass('not-blurred');
  }, 1000);
});