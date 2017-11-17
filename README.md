# Lightweight Array.prototype.find polyfill
[![Build Status](https://travis-ci.org/vovkabelov/array.find.svg?branch=master)](https://travis-ci.org/vovkabelov/array.find)
[![Coverage Status](https://coveralls.io/repos/github/vovkabelov/array.find/badge.svg?branch=master&service=github)](https://coveralls.io/github/vovkabelov/array.find?branch=master&service=github)
[![Maintainability](https://api.codeclimate.com/v1/badges/181be494b23d27cba626/maintainability)](https://codeclimate.com/github/vovkabelov/array.find)
[![Size](https://badges.herokuapp.com/size/github/vovkabelov/array.find/master/src/array-find-polyfill.js?gzip=true)](https://raw.githubusercontent.com/vovkabelov/array.find/master/dist/array-find-polyfill.min.js)

The find() method returns the value of the first element in the array 
that satisfies the provided testing function. Otherwise undefined is returned.

## How It Works
**1.** Download [Min version](https://raw.githubusercontent.com/vovkabelov/array.find/master/dist/array-find-polyfill.min.js)
or [Full version](https://raw.githubusercontent.com/vovkabelov/array.find/master/src/array-find-polyfill.js) (Right click and save)  
**2.** Include polyfill on your web-page 
```html
<script src="path/to/array-find-polyfill.min.js"></script>
// or
<script src="path/to/array-find-polyfill.js"></script>
```
**3.** Use method as native.
```javascript
["apple", "banana", "peach"].find(function(item) {
    return item === "banana";
});
// "banana"
```


## Performance
Testing in Chrome 61.0.3163 / Mac OS X 10.13.0  
**Native** 400,642 Ops/sec   
**Polyfill** 2,240,624 Ops/sec  

See [https://jsperf.com/array-prototype-find-polyfill](https://jsperf.com/array-prototype-find-polyfill)

## Links
[Specification](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find) on "Ecma International"  
[MDN examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## Copyright and license
Code and documentation copyright 2017 Vladimir Belov. Code released under the [MIT license](https://github.com/vovkabelov/array.find/blob/master/LICENSE).