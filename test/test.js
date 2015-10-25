;(function() {

  'use strict';

  var A       = null,
      should  = require('should');

  if (typeof module !== 'undefined'  && typeof module.exports !== 'undefined')
    A = require('../src/arabic');
  else {
    A = window.A;
  }


  describe('arabic.js', function() {
    describe('- constructor', function() {
      it('should return an object', function() {
        A('مرحبا').should.be.an.Object();
      });

      it('should be an array', function() {
        A('مرحبا').tree.should.be.an.Array();
        A().tree.should.be.an.Array();
      });

      it('should be a String value', function() {
        A('مَرْحَباً بِالعَالَم').value.should.equal('مَرْحَباً بِالعَالَم');
        A(100).value.should.equal('100').which.is.a.String();
        A({}).value.should.be.a.String();
        A([]).value.should.be.a.String();
        A(undefined).value.should.be.a.String().which.is.empty();
        A(null).value.should.be.a.String().which.is.empty();
      });
    });


    describe('- back()', function () {
      it('should return the precedence value', function() {
        A('  مرحبا  abc  ').clean().getArabic().back().value.should.equal('مرحبا abc');
        A('مرحبا     abc ').clean().getArabic().back().back().value.should.equal('مرحبا abc');
        A('مرحبا     abc ').clean().getArabic().back(true).back().value.should.equal('مرحبا     abc ');
        A('مرحبا     abc ').clean().getArabic().back(true).back(true).back().value.should.equal('مرحبا     abc ');
      });
    });


    describe('- clean()', function () {
      it('should return a cleaned value', function() {
        A('مرحبا    بالعالم   ').clean().value.should.equal('مرحبا بالعالم');
      });

      it('back() should return the precedence value', function() {
        A('مرحبا    بالعالم   ').clean().back().value.should.equal('مرحبا    بالعالم   ');
      });
    });


    describe('- getArabic()', function() {
      it('should return an Arabic value', function() {
        A('مرحبا abc').getArabic().value.should.equal('مرحبا');
      });

      it('back() should return the precedence value', function() {
        A('مرحبا    بالعالم   abc').getArabic().back().value.should.equal('مرحبا    بالعالم   abc');
      });
    });


    describe('- getNotArabic()', function() {
      it('should return a non Arabic value', function() {
        A('مرحبا abc').getNotArabic().value.should.equal('abc');
      });

      it('back() should return the precedence value', function() {
        A('مرحبا    بالعالم   abc').getNotArabic().back().value.should.equal('مرحبا    بالعالم   abc');
      });
    });


    describe('- known()', function() {
      it('should return a known Arabic value', function() {
        A(' عالم').known().value.should.equal('العالم');
        A('abc عالم').known().value.should.equal('العالم');
      });

      it('back() should return the precedence value', function() {
        A('مرحبا    بالعالم   abc').known().back().value.should.equal('مرحبا    بالعالم   abc');
      });
    });


    describe('- removeVowels()', function() {
      it('should remove the Arabic vowels', function() {
        A('مَرْحَباً').removeVowels().value.should.equal('مرحبا');
      });

      it('back() should return the precedence value', function() {
        A('مَرْحَباً').removeVowels().back().value.should.equal('مَرْحَباً');
      });
    });


    describe('- trim()', function() {
      it('should trim the value', function() {
        A('  مرحبا  ').trim().value.should.equal('مرحبا');
      });

      it('back() should return the precedence value', function() {
        A('  مرحبا  ').trim().back().value.should.equal('  مرحبا  ');
      });
    });

  });

}.call(this));
