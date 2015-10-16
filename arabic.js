;(function() {


  // Arabic.js 0.0.1
  // http://arabicjs.com
  // (c) 2015 Mohamed Elkebir @elkebirmed
  // Arabic.js may be freely distributed under the MIT license.



  'use strict';

  // Base object
  var A = (function() {

    // Object constructor
    var A = function( value ) {
      this.value = value;
      if (this.value == null) this.value = this;
    };


    A.prototype = {

      // Replace additional white spaces with one space character,
      // and remove white spaces at the start and the end of the value.
      clean: function() {
        var value = this.value.replace(/[\s\xa0]+/gm, ' ').replace(/^\s+|\s+$/gm, '');
        return new A(value);
      },


      getArabic: function( replacement ) {
        var replacement = replacement || ' ';
        var value = this.value.replace(/[^\u0621-\u0652]/gm, replacement);
        return new A(value);
      },


      getNotArabic: function( replacement ) {
        var replacement = replacement || ' ';
        var value = this.value.replace(/[\u0621-\u0652]/gm, replacement);
        return new A(value);
      },


      // Change the unknown name to known,
      // after removing white spaces at the start of the name.
      known: function() {
        var value = 'ال' + this.value.replace(/^[^\u0621-\u064A]/gm, '');
        return new A(value);
      },


      // Remove spaces at the start and the end of the value.
      trim: function() {
        if (typeof String.prototype.trim === 'undefined') {
          var value = this.value.replace(/(^\s*|\s*$)/gm, '');
        } else {
          var value = this.value.trim();
        }
        return new A(value);
      },


      // Remove vowels from text, if @hard if true it will removes HAMZA's.
      removeVowels: function( hard ) {
        var value = this.value.replace(/[\u064B-\u0652]/gm, '');
        return new A(value);
      }

    }

    return A;

  }());


  var wrap = function( value ) {
    return new A(value);
  };


  if (typeof window !== 'undefined' && window !== null) {
    window.A = wrap;
  } else {
    module.exports = wrap;
  }

}.call(this));
