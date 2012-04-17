# Counter jQuery plugin

Minimal Twitter-like character counter and input limiter.

## Get started

### Markup

```html
<!-- Counter input element -->
<textarea id="counter_input"></textarea>

<!-- Counter output element -->
<div id="counter_output"></div>
```

### Initiate plugin

```javascript
$(document).ready(function() {

  // Create a new instance of the plugin
  var counter = new $.counter();

  // Create a new instance of the plugin with custom settings
  var counter = new $.counter({
    inputElement: '#counter_input', // Target input element
    outputElement: '#counter_output', // Target output element
    characterLimit: 140 // Allowed number of characters
  });

});
```

## Toolkit

[jQuery Plugin Toolkit](https://github.com/niclasgelin/jquery-plugin-toolkit)<br>
[Online YUI Compressor](http://www.refresh-sf.com/yui/)

## Unlicense

2012 Niclas Gelin

This is free and unencumbered software released into the public domain.<br>
For more information, please refer to: http://unlicense.org
