/*! Counter jQuery plugin v1.0.1 - https://github.com/niclasgelin/jquery-counter */
/*
 * Minimal Twitter-like character counter and input limiter.
 *
 * 2012 Niclas Gelin
 * This is free and unencumbered software released into the public domain.
 * For more information, please refer to: http://unlicense.org
 */
;(function($) {

  $.counter = function(options) {

    var object = this;

    var defaults = {
      inputElement: '#counter_input', // Target input element
      outputElement: '#counter_output', // Target output element
      characterLimit: 140 // Allowed number of characters
    };

    object.settings = $.extend({}, defaults, options);

    var methods = {

      init: function() {

        // Proceed with plugin methods
        methods.inputListener();
      },

      inputListener: function() {
        $(object.settings.inputElement).keyup(function() {
          methods.inputLimiter();
          methods.outputPrinter();
        });
      },

      inputCounter: function() {
        return $(object.settings.inputElement).val().length;
      },

      inputLimiter: function() {
        var input = $(object.settings.inputElement);
        var limit = input.val().substring(0, object.settings.characterLimit);

        if (methods.inputCounter() > object.settings.characterLimit) {
          input.val(limit);
        }
      },

      outputCounter: function() {
        return object.settings.characterLimit - methods.inputCounter();
      },

      outputPrinter: function() {
        $(object.settings.outputElement).html(methods.outputCounter());
      }

    };

    // Call the plugin constructor method
    methods.init();
  }

})(jQuery);
