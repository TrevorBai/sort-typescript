"use strict";
// interface Sortable {
//   length: number;
//   compare(leftIndex: number): boolean;
//   swap(leftIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        var noSwaps;
        for (var i = length; i > 0; i--) {
            noSwaps = true;
            for (var j = 0; j < i - 1; j++) {
                if (this.compare(j)) {
                    this.swap(j);
                    noSwaps = false;
                }
            }
            if (noSwaps)
                break;
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
