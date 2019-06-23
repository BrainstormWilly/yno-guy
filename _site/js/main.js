$(document).ready(function () {
  $('a.nav-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }

  });


  if (window.location.hash) {
    $('.panel-cover').addClass('panel-cover--collapsed');
    setNav(window.location.hash);
  }

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .nav-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
    setNav( $(this).attr("href") );
  })

});

function setNav(hash){

  var current_category = hash.substr(hash.indexOf("#"));
  $(".post-list").hide();

  if( current_category==="#software" ){
    $(".software").show();
  }else{
    $(".wine").show();
  }
}
