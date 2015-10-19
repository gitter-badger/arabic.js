# Arabic.js [![BuildStatus](https://travis-ci.org/elkebirmed/arabic.js.svg?branch=master)](https://travis-ci.org/elkebirmed/arabic.js)
Creative methods to work with an Arabic strings.

Home page: [ArabicJs](http://elkebirmed.github.io/arabic.js/)

Source file (_Production_): [arabic.min.js](https://github.com/elkebirmed/arabic.js/blob/master/dist/arabic.min.js)

Source file (_Development_): [arabic.js](https://github.com/elkebirmed/arabic.js/blob/master/dist/arabic.js)

---

# How to use it

### Get started

Start the code by declaring the string you want to work with in the `A` function constructor.

```js
A('مرحبا بالعالم').value; // 'مرحبا بالعالم'
```

Note that we put the `.value` property at the end in order to get a native string output, otherwise you will get an object.

### Chaining & mixing methods

You can chain and mix methods as you need, _(you are free, so be creative)._

```js
A('مَرْحَباً بِالعَالَم abc    ').clean().removeVowels().getArabic().value; // 'مرحبا بالعالم'
A('مَرْحَباً بِالعَالَم abc    ').getArabic().clean().removeVowels().value; // 'مرحبا بالعالم'
A('مَرْحَباً بِالعَالَم abc    ').getArabic().removeVowels().clean().value; // 'مرحبا بالعالم'
```

---

# API

### - clean()

Replace additional white spaces with one space character, and remove white spaces at the start and the end of the value.

```js
A('    مرحبا     بالعالم    ').clean().value; // 'مرحبا بالعالم'
```

### - getArabic(_replacement_)

Get just the Arabic letters and remove the other characters, or replace them with the `replacement` if it's defined.

```js
A('مرحبا world').getArabic().value; // 'مرحبا '
A('مرحبا world').getArabic('*').value; // 'مرحبا *****'
A('مرحبا world').getArabic('_').value; // 'مرحبا _____'
```

### - getNotArabic(_replacement_)

Remove Arabic letters from the value, or replace it with the `replacement` if it's defined, and output the rest characters.

```js
A('مرحبا world').getNotArabic().value; // ' world'
A('مرحبا world').getNotArabic('*').value; // '***** world'
A('مرحبا world').getNotArabic('_').value; // '_____ world'
```

### - known()

Change the unknown name to known, by placing the 'ال' after an Arabic letter only.

```js
A('عالم').known().value; // 'العالم'
A('_عالم').known().value; // 'العالم'
A('*عالم').known().value; // 'العالم'
```

### - removeVowels()

Remove vowels from the value.

```js
A('مَرْحَباً بِالعَالَم').removeVowels().value; // 'مرحبا بالعالم'
```

### - trim()

Remove spaces at the start and the end of the value.
Note how `clean()` can remove inner spaces too.


```js
A('    مرحبا     بالعالم    ').trim().value; // 'مرحبا    بالعالم'
A('    مرحبا     بالعالم    ').clean().value; // 'مرحبا بالعالم'
```

---

# License

The MIT License (MIT)

Copyright (c) 2015 Mohamed Elkebir <elkebir.med@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
