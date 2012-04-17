/*! Counter jQuery plugin v1.0.0 - https://github.com/niclasgelin/jquery-counter */
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
          methods.inputLimiter(this);
          methods.outputPrinter();
        });
      },

      inputCounter: function() {
        return $(object.settings.inputElement).attr('value').length;
      },

      inputLimiter: function(event) {
        if (methods.inputCounter() > object.settings.characterLimit) {
          event.value = event.value.substring(0, object.settings.characterLimit);
        }
      },

      outputCounter: function() {
        return object.settings.characterLimit - methods.inputCounter();
      },

      outputPrinter: function() {
        $(object.settings.outputElement).text(methods.outputCounter());
      }

    };

    // Call the plugin constructor method
    methods.init();
  }

})(jQuery);
