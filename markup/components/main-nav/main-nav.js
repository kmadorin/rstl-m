

$(function(){

  // main menu show/hide

  $('.main-nav__toggle').click(function(e) {
    $('.main-nav__overlay').addClass('main-nav__overlay--active');
  });
  $('.main-menu__close').click(function(e) {
    e.preventDefault();
    $('.main-nav__overlay').removeClass('main-nav__overlay--active');
  });

  // fixed menu on scroll
  $(window).scroll(function(e) {
    if ($(window).scrollTop()>10) {
      if (!$('.main-nav').hasClass('main-nav--fixed')) {
        $('.main-nav').addClass('main-nav--fixed');
      }
    } else {
      if ($('.main-nav').hasClass('main-nav--fixed')) {
        $('.main-nav').removeClass('main-nav--fixed');
      }
    }
  });
});