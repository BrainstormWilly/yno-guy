---
layout: null
---


$(document).ready(function () {
  // $('a.nav-button').click(function (e) {
  //   if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
  //   currentWidth = $('.panel-cover').width()
  //   if (currentWidth < 960) {
  //     $('.panel-cover').addClass('panel-cover--collapsed')
  //     $('.content-wrapper').addClass('animated slideInRight')
  //   } else {
  //     $('.panel-cover').css('max-width', currentWidth)
  //     $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {
  //         window.location = "{{ site.baseurl }}/software"
  //     })
  //   }
  //
  // });
  $('a.nav-button.wine').click(function (e) {
    setNav(".wine");
  })

  $('a.nav-button.software').click(function (e) {
    setNav(".software");
  })

  if (window.location.hash && (window.location.pathname == '{{ site.baseurl }}/' || window.location.pathname == '{{ site.baseurl }}/index.html')) {
    $('.panel-cover').addClass('panel-cover--collapsed');
    setNav("."+window.location.hash.substring(1))
  }else if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .nav-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
    // setNav( $(this).attr("href") );
  })

  // $('.content-wrapper').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
  //   function(e) {
  //
  //
  //
  // });


});

function setNav(category){
  console.log("setNav")
  $('.post-list').hide();
  $('.content-wrapper').removeClass('animated slideInRight')
  currentWidth = $('.panel-cover').width()

  if ($('.panel-cover').hasClass('panel-cover--collapsed')){
    $('.content-wrapper').addClass('animated slideInRight')
    $(category).show();
    return;
  }



  if (currentWidth < 960) {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.content-wrapper').addClass('animated slideInRight')
  } else {
    $('.panel-cover').css('max-width', currentWidth)
    $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {
        // window.location = "{{ site.baseurl }}/software"
        $('.content-wrapper').addClass('animated slideInRight')

    })
  }
  $(category).show();

  // $(".post-list-container").hide();

  // if( current_category==="#software" ){
  //   $(".software").show();
  // }else{
  //   $(".wine").show();
  // }
}
