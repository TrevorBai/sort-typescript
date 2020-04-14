"use strict";
var Sorter = /** @class */ (function () {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    // Equivalent to above
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        var noSwaps;
        var swap = function (arr, idx1, idx2) {
            var _a;
            _a = [arr[idx2], arr[idx1]], arr[idx1] = _a[0], arr[idx2] = _a[1];
        };
        for (var i = length; i > 0; i--) {
            noSwaps = true;
            for (var j = 0; j < i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    swap(this.collection, j, j + 1);
                    noSwaps = false;
                }
            }
            if (noSwaps)
                break;
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
