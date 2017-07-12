"use strict";

jQuery(document).ready(function ($) {
  $('.faq').on('click', '.faq-question', function (event) {
    var question = $(event.target);
    question.next('.faq-answer').slideToggle();
  });

  var jqWindow = $(window);
  var jqNavBar = $('.navbar-fixed-top');

  jqWindow.on('scroll', function (event) {
    var scrolled = jqWindow.scrollTop() > 0;
    jqNavBar.toggleClass('scrolled', scrolled);
  });

  $('.navbar-collapse').on('click', 'li > a', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('.navbar-brand').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('.smooth-scroll a[href], a[href].smooth-scroll').on('click', function(event) {
    console.log(this.href);
    if (!/#.+$/.test(this.href)) {
      return;
    }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        event.preventDefault();
      }
    }
  });
});
