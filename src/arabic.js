;(function() {


  // Arabic.js 0.0.1
  // http://elkebirmed.github.io/arabic.js/
  // (c) 2015 Mohamed Elkebir <elkebir.med@gmail.com>
  // Arabic.js may be freely distributed under the MIT license.



  'use strict';

  // Base object
  var A = (function() {

    // Object constructor
    var A = function( value, back ) {
      this.value = value;
      if (this.value === null) this.value = this;

      if (back === undefined) {
        this.tree = [this.value];
      } else {
        this.tree = back;
      }
    };


    // Regular Expressions.
    var regEx = {

      // Arabic letters in the start of an Arabic word.
      AR_LE_ST:   /[\u0627\u0623\u0625\u0628-\u063A\u0641-\u0648\u064A]/,

      // Arabic letters.
      AR_LE:      /[\u0621-\u063A\u0640-\u064A]/,

      // Arabic vowels.
      AR_VO:      /[\u064B-\u0652]/,

      // Arabic letters and vowels.
      AR_LE_VO:   /[\u0621-\u063A\u0640-\u0652]/,

      // Not Arabic letters and vowels.
      EN_NO_AR:   /[^\u0621-\u063A\u0640-\u0652/]/

    };


    // Prototype methods.
    A.prototype = {

      // Get the precedence value.
      back: function( steps ) {
        var back, value;

        if (this.tree.length > 1) {
          if (steps) {
              value = this.tree.pop();
          } else {
              value = this.tree[this.tree.length - 1];
          }
        } else {
          value = this.value;
        }

        return new A(value, this.tree);
      },


      // Replace additional white spaces with one space character,
      // and remove white spaces at the start and the end of the value.
      clean: function() {
        var back, value;
        back = this.tree.push(this.value);
        value = this.value.replace(/[\s\xa0]+/gm, ' ').replace(/^\s+|\s+$/gm, '');
        return new A(value, this.tree);
      },


      // Get just the Arabic letters and remove the other characters,
      // or replace them with the `replacement` if it's defined.
      getArabic: function( replacement ) {
        var back, value;
        back = this.tree.push(this.value);
        value = this.value.replace(new RegExp(regEx.EN_NO_AR.source + '+', 'gm'), replacement || ' ');
        return new A(value.trim(), this.tree);
      },


      // Remove Arabic letters from the value, or replace it with
      // the `replacement` if it's defined, and output the rest characters.
      getNotArabic: function( replacement ) {
        var back, value;
        back = this.tree.push(this.value);
        value = this.value.replace(new RegExp(regEx.AR_LE_VO.source + '+', 'gm'), replacement || ' ');
        return new A(value.trim(), this.tree);
      },


      // Change the unknown name to known,
      // after removing white spaces at the start of the name.
      known: function() {
        var back, value;
        back = this.tree.push(this.value);
        value = 'ال' + this.value.replace(/^[^\u0621-\u064A]/gm, '');
        return new A(value, this.tree);
      },


      // Remove vowels from value.
      removeVowels: function() {
        var back, value;
        back = this.tree.push(this.value);
        value = this.value.replace(/[\u064B-\u0652]/gm, '');
        return new A(value, this.tree);
      },


      // Remove spaces at the start and the end of the value.
      trim: function() {
        var back, value;
        back = this.tree.push(this.value);
        if (typeof String.prototype.trim === 'undefined') {
          value = this.value.replace(/(^\s*|\s*$)/gm, '');
        } else {
          value = this.value.trim();
        }
        return new A(value, this.tree);
      },

    };

    return A;

  }());


  // Object wrapper.
  var wrap = function( value, back ) {
    return new A(value, back);
  };


  // Exporting the library.
  if (typeof window !== 'undefined' && window !== null) {
    window.A = wrap;
  } else {
    module.exports = wrap;
  }

}.call(this));

console.log(A('hhh خخخخ ').getArabic());
