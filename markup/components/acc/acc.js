// accordeon scrollTo
(function() {
  $('.acc-btn').click( function(e) {
    var tab = $(this).closest('.acc__tab');

    if (!tab.hasClass('acc__tab--active')) {
      $('.acc__tab--active').removeClass('acc__tab--active');
      tab.addClass('acc__tab--active');
      $('.acc__input:checked').prop('checked', false);
      $(this).siblings('.acc__input').checked = true;
      setTimeout(function(){
        $('html,body').animate({scrollTop: tab.offset().top-63},300,'swing');
      }, 100)

    } else {
      tab.removeClass('acc__tab--active');
      $(this).siblings('.acc__input').checked = false;
    }
  });
})();