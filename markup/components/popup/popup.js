// Popup scripts
$(function(){


  function showPopup(popup,top) {
    $('.popup__overlay').addClass('popup__overlay--active');
    console.log(top);
    popup.addClass('popup__wrapper--active').css("top", top+"px");
    $('body,html').css({'overflow': "hidden"});
    // document.ontouchmove = function(e){ e.preventDefault(); }
    // popup.ontouchmove = function(e) {
    //   return true;
    // }

  }
  function hidePopup(popup) {
    $('.popup__overlay--active').removeClass('popup__overlay--active');
    popup.removeClass('popup__wrapper--active');
    $('body,html').css({'overflow': "auto"});
    // document.ontouchmove = function(e){ return true; }
  }


  $('.popup__overlay').click(function(e){
    hidePopup($('.popup__wrapper--active'));
  });

  $('.popup__wrapper').click(function(e){
    if ($(e.target).closest('.popup').length===0) {
      hidePopup($(this));
    }
  });

  $('.popup__close').click(function(e){
    e.preventDefault();
    hidePopup($('.popup__wrapper--active'));
  });


  var popupNames = ['tarif', 'call', 'turnon', 'step1', 'step2'];

  popupNames.forEach(function(popupName) {
    $("[data-popup="+popupName+"]").click(function(e){
      e.preventDefault();

      if (popupName ==='tarif') {
        var tabName = $(this).data('tab');
        if (tabName) {
          $("#tab-"+tabName).prop("checked", true);
        } else {
          $("#tab-more").prop("checked", true);
        }
      }
      var top = $(window).scrollTop();
      console.log(top);

      showPopup($(".popup__wrapper--"+popupName), top);

    });
  });

  if ($('.channels__wrapper')) {
    var shadow = $('.channels__shadow');
    var wrapper = $('.channels__wrapper');
    wrapper.scroll(function(e) {
      if (wrapper.scrollTop()>10) {
        shadow.fadeOut(100);
      } else {
        shadow.fadeIn(100);
      }
    });
  }

});


