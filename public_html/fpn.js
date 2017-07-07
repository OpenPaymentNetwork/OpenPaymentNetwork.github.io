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

});
