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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zdGFydC5qcyIsImNsZWFuLmpzIiwiZ2V0QXJhYmljLmpzIiwiZ2V0Tm90QXJhYmljLmpzIiwia25vd24uanMiLCJyZW1vdmVWb3dlbHMuanMiLCJ0cmltLmpzIiwiX2VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcmFiaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uKCkge1xuXG5cbiAgLy8gQXJhYmljLmpzIDAuMC4xXG4gIC8vIGh0dHA6Ly9lbGtlYmlybWVkLmdpdGh1Yi5pby9hcmFiaWMuanMvXG4gIC8vIChjKSAyMDE1IE1vaGFtZWQgRWxrZWJpciA8ZWxrZWJpci5tZWRAZ21haWwuY29tPlxuICAvLyBBcmFiaWMuanMgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cblxuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBCYXNlIG9iamVjdFxuICB2YXIgQSA9IChmdW5jdGlvbigpIHtcblxuICAgIC8vIE9iamVjdCBjb25zdHJ1Y3RvclxuICAgIHZhciBBID0gZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHRoaXMudmFsdWUgPSB0aGlzO1xuICAgIH07XG5cblxuICAgIC8vIFByb3RvdHlwZSBtZXRob2RzLlxuICAgIEEucHJvdG90eXBlID0ge1xuIiwiXG4gICAgICAvLyBSZXBsYWNlIGFkZGl0aW9uYWwgd2hpdGUgc3BhY2VzIHdpdGggb25lIHNwYWNlIGNoYXJhY3RlcixcbiAgICAgIC8vIGFuZCByZW1vdmUgd2hpdGUgc3BhY2VzIGF0IHRoZSBzdGFydCBhbmQgdGhlIGVuZCBvZiB0aGUgdmFsdWUuXG4gICAgICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1tcXHNcXHhhMF0rL2dtLCAnICcpLnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCAnJyk7XG4gICAgICAgIHJldHVybiBuZXcgQSh2YWx1ZSk7XG4gICAgICB9LFxuIiwiXG4gICAgICAvLyBHZXQganVzdCB0aGUgQXJhYmljIGxldHRlcnMgYW5kIHJlbW92ZSB0aGUgb3RoZXIgY2hhcmFjdGVycyxcbiAgICAgIC8vIG9yIHJlcGxhY2UgdGhlbSB3aXRoIHRoZSBgcmVwbGFjZW1lbnRgIGlmIGl0J3MgZGVmaW5lZC5cbiAgICAgIGdldEFyYWJpYzogZnVuY3Rpb24oIHJlcGxhY2VtZW50ICkge1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9bXlxcdTA2MjEtXFx1MDY1Ml0vZ20sIHJlcGxhY2VtZW50IHx8ICcgJyk7XG4gICAgICAgIHJldHVybiBuZXcgQSh2YWx1ZSk7XG4gICAgICB9LFxuIiwiXG4gICAgICAvLyBSZW1vdmUgQXJhYmljIGxldHRlcnMgZnJvbSB0aGUgdmFsdWUsIG9yIHJlcGxhY2UgaXQgd2l0aFxuICAgICAgLy8gdGhlIGByZXBsYWNlbWVudGAgaWYgaXQncyBkZWZpbmVkLCBhbmQgb3V0cHV0IHRoZSByZXN0IGNoYXJhY3RlcnMuXG4gICAgICBnZXROb3RBcmFiaWM6IGZ1bmN0aW9uKCByZXBsYWNlbWVudCApIHtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvW1xcdTA2MjEtXFx1MDY1Ml0vZ20sIHJlcGxhY2VtZW50IHx8ICcgJyk7XG4gICAgICAgIHJldHVybiBuZXcgQSh2YWx1ZSk7XG4gICAgICB9LFxuIiwiXG4gICAgICAvLyBDaGFuZ2UgdGhlIHVua25vd24gbmFtZSB0byBrbm93bixcbiAgICAgIC8vIGFmdGVyIHJlbW92aW5nIHdoaXRlIHNwYWNlcyBhdCB0aGUgc3RhcnQgb2YgdGhlIG5hbWUuXG4gICAgICBrbm93bjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAn2KfZhCcgKyB0aGlzLnZhbHVlLnJlcGxhY2UoL15bXlxcdTA2MjEtXFx1MDY0QV0vZ20sICcnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBKHZhbHVlKTtcbiAgICAgIH0sXG4iLCJcbiAgICAgIC8vIFJlbW92ZSB2b3dlbHMgZnJvbSB2YWx1ZS5cbiAgICAgIHJlbW92ZVZvd2VsczogZnVuY3Rpb24oIGhhcmQgKSB7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1tcXHUwNjRCLVxcdTA2NTJdL2dtLCAnJyk7XG4gICAgICAgIHJldHVybiBuZXcgQSh2YWx1ZSk7XG4gICAgICB9LFxuIiwiXG4gICAgICAvLyBSZW1vdmUgc3BhY2VzIGF0IHRoZSBzdGFydCBhbmQgdGhlIGVuZCBvZiB0aGUgdmFsdWUuXG4gICAgICB0cmltOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIFN0cmluZy5wcm90b3R5cGUudHJpbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nbSwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBBKHZhbHVlKTtcbiAgICAgIH0sXG4iLCJcbiAgICB9O1xuXG4gICAgcmV0dXJuIEE7XG5cbiAgfSgpKTtcblxuXG4gIC8vIE9iamVjdCB3cmFwcGVyLlxuICB2YXIgd3JhcCA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICByZXR1cm4gbmV3IEEodmFsdWUpO1xuICB9O1xuXG5cbiAgLy8gRXhwb3J0aW5nIHRoZSBsaWJyYXJ5LlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICE9PSBudWxsKSB7XG4gICAgd2luZG93LkEgPSB3cmFwO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gd3JhcDtcbiAgfVxuXG59LmNhbGwodGhpcykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
