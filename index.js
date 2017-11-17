require("./src/array-find-polyfill");

module.exports = function(array, predicate, thisArgs) {
    return array.find(predicate, thisArgs);
};