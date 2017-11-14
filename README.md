# Array.prototype.find polyfill
[![Build Status](https://travis-ci.org/vovkabelov/array.find.svg?branch=master)](https://travis-ci.org/vovkabelov/array.find)
[![Coverage Status](https://coveralls.io/repos/github/vovkabelov/array.find/badge.svg?branch=master&service=github)](https://coveralls.io/github/vovkabelov/array.find?branch=master&service=github)

The find() method returns the value of the first element in the array 
that satisfies the provided testing function. Otherwise undefined is returned.

## Performance
Testing in Chrome 61.0.3163 / Mac OS X 10.13.0  
**Native** 400,642 Ops/sec   
**Polyfill** 2,240,624 Ops/sec  

See [https://jsperf.com/array-prototype-find-polyfill](https://jsperf.com/array-prototype-find-polyfill)

## Links
[Specification](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find) on "Ecma International"  
[MDN examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)