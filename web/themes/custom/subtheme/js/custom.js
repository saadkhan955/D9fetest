/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.subtheme = {
    attach: function(context, settings) {

      // Custom code here
      $("#confrences").owlCarousel({
        dots: true,
        nav: false,
        margin: 24,
        loop: false,
        items: 1,
        responsiveClass:true,
        responsive:{
          400:{
              items:1
          },
          992:{
              items:3,
              dots: false,
              nav: true
          }
        }
      });
    }
  };

})(jQuery, Drupal);