;(function() {


  // Arabic.js 0.0.1
  // http://elkebirmed.github.io/arabic.js/
  // (c) 2015 Mohamed Elkebir <elkebir.med@gmail.com>
  // Arabic.js may be freely distributed under the MIT license.



  'use strict';

  // Base object
  var A = (function() {

    // Object constructor
    var A = function( value ) {
      this.value = value;
      if (this.value === null) this.value = this;
    };


    // Prototype methods.
    A.prototype = {

      // Replace additional white spaces with one space character,
      // and remove white spaces at the start and the end of the value.
      clean: function() {
        var value;
        value = this.value.replace(/[\s\xa0]+/gm, ' ').replace(/^\s+|\s+$/gm, '');
        return new A(value);
      },


      // Get just the Arabic letters and remove the other characters,
      // or replace them with the `replacement` if it's defined.
      getArabic: function( replacement ) {
        var value;
        value = this.value.replace(/[^\u0621-\u0652]/gm, replacement || ' ');
        return new A(value);
      },


      // Remove Arabic letters from the value, or replace it with
      // the `replacement` if it's defined, and output the rest characters.
      getNotArabic: function( replacement ) {
        var value;
        value = this.value.replace(/[\u0621-\u0652]/gm, replacement || ' ');
        return new A(value);
      },


      // Change the unknown name to known,
      // after removing white spaces at the start of the name.
      known: function() {
        var value;
        value = 'ال' + this.value.replace(/^[^\u0621-\u064A]/gm, '');
        return new A(value);
      },


      // Remove vowels from value.
      removeVowels: function( hard ) {
        var value;
        value = this.value.replace(/[\u064B-\u0652]/gm, '');
        return new A(value);
      },


      // Remove spaces at the start and the end of the value.
      trim: function() {
        var value;
        if (typeof String.prototype.trim === 'undefined') {
          value = this.value.replace(/(^\s*|\s*$)/gm, '');
        } else {
          value = this.value.trim();
        }
        return new A(value);
      },

    };

    return A;

  }());


  // Object wrapper.
  var wrap = function( value ) {
    return new A(value);
  };


  // Exporting the library.
  if (typeof window !== 'undefined' && window !== null) {
    window.A = wrap;
  } else {
    module.exports = wrap;
  }

}.call(this));
