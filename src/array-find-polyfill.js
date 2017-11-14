;(function() {
    "use strict";

    if (typeof Array.prototype.find !== "function") {
        Array.prototype.find = function(callback, self) {
            if (this === null) {
                throw new TypeError('Cannot read property \'find\' of null');
            }

            if (typeof callback !== "function") {
                throw new TypeError(typeof callback + ' is not a function');
            }

            var arrLength = this.length;

            for (var i = 0; i < arrLength; i++) {
                if (callback.call(self, this[i], i, this)) {
                    return this[i];
                }
            }
        };
    }
})();