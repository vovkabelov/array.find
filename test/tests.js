var assert = require("assert");

Array.prototype.find = null;

require("../src/array-find-polyfill.js");


describe("Array.prototype.find", function() {
	var fruits = ["banana", "apple", "peach", "mango"];
	var sparseArray = ["apple", , undefined, "peach"];
	var arrayLikeObject = {0: "banana", 1: "apple", 2: "peach", 3: "mango", length: 4};
	var arrayLikeNegativeObject = {0: "banana", 1: "apple", 2: "peach", 3: "mango", length: -4};

	it("Should be function", function() {
		assert.equal(typeof Array.prototype.find, "function");
	});

	it("Should find an element in an array", function() {
		fruits.forEach(function(fruit, index) {
			assert.equal(
				fruits.find(function(fruit) {
					return fruit === fruits[index];
				}),
				fruits[index]
			);
		});
	});

	it("Should be undefined if element not found", function() {
		assert.equal(
			fruits.find(function(fruit) {
				return fruit === "plum";
			}),
			undefined
		)
	});

	it("Should work with a sparse array", function() {
		var res = [];
		sparseArray.find(function(item, index) {
			res.push([index, item]);
			return false;
		});

		assert.deepEqual(res, [[0, "apple"], [1, undefined], [2, undefined], [3, "peach"]]);
	});

	it("Should work with an array-like object", function() {
		assert.equal(
			Array.prototype.find.call(arrayLikeObject, function(item) {
				return item === "mango";
			}),
			"mango"
		);
	});

	it("Should not work with an array-like object with negative length", function() {
		assert.equal(
			Array.prototype.find.call(arrayLikeNegativeObject, function(item) {
				return item === "mango";
			}),
			undefined
		);
	});
});