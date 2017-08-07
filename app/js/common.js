$(function() {
  //slick
  $(".main_banner_slider").slick({
    infinite: true,
    arrows: false,
    dots: true,
    appendDots: ".main_banner_slider_controls",
    autoplay: true,
    speed: 1600,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(slider, i) {
      return $('<span data-role="none" role="button" tabindex="0" /></span>');
    }
  });
  $(".brands_slider").slick({
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    appendArrows: ".brands_slider_controls",
    appendDots: ".brands_slider_dots",
    dots: true,
    prevArrow: ".brands_prev_arrow",
    nextArrow: ".brands_next_arrow",
    customPaging: function(slider, i) {
      return $('<span data-role="none" role="button" tabindex="0" /></span>');
    },
		responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2
      }
    },
		{
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		/**/
  });
  $(".info_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
		autoplay: true,
    arrows: true,
    appendArrows: ".info_slider_controls",
    dots: false,
    infinite: true,
    prevArrow: ".info_prev_arrow",
    nextArrow: ".info_next_arrow",
		responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
		{
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  //tabs
  $('.merchandises_tabgroup > .tabgroup_item').hide();
  $('.merchandises_tabgroup > .tabgroup_item:first-child').show();
  $('.merchandises_tabs a').click(function(e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = '#' + $this.parents('.merchandises_tabs').data('tabgroup'),
      others = $this.closest('li').siblings().children('a'),
      target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('.tabgroup_item').hide();
    $(target).show();
  });
  //scroller
  $(".seo_content").mCustomScrollbar({autoDraggerLength: false});
  //button to top

  /*var offset = 1000, // At what pixels show Back to Top Button
    scrollDuration = 800; // Duration of scrolling to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
    } else {
      $('.top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
    }
  });
  // Smooth animation when scrolling
  $('.top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, scrollDuration);
  })*/

});
