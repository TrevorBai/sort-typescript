"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Assuming there is no tail
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.push = function (data) {
        var newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        // traverse until reaching the tail
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 0;
            var current = this.head;
            while (current.next) {
                length++;
                current = current.next;
            }
            return ++length; // because it starts at 0
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.get = function (index) {
        if (!this.head || index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        var count = 0;
        var current = this.head;
        // Solution 1
        while (count !== index) {
            count++;
            if (current.next === null)
                throw new Error('Index out of bounds');
            current = current.next;
        }
        return current;
        // Solution 2
        // Alternatively, use the code below
        // while (current) {
        //   if (count === index) return current;
        //   count++;
        //   current = current.next;
        // }
        // throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex) {
        if (!this.head)
            throw new Error('List is empty');
        return this.get(leftIndex).data > this.get(leftIndex + 1).data;
    };
    // I am only swapping the adjacent nodes here
    LinkedList.prototype.swap = function (leftIndex) {
        if (!this.head)
            throw new Error('List is empty');
        if (leftIndex === this.length - 1)
            throw new Error('Can\'t swap');
        var nodeBeforeLeftNode, leftNode, adjacentRightNode, nodeAfterRightNode;
        // *****************************************************
        // Case one: leftIndex is the head
        // *****************************************************
        if (leftIndex === 0) {
            // Store nodes
            leftNode = this.head;
            adjacentRightNode = this.get(1);
            nodeAfterRightNode = this.get(2);
            // Swap
            leftNode.next = nodeAfterRightNode;
            adjacentRightNode.next = leftNode;
            this.head = adjacentRightNode;
            return;
        }
        // *************************************************************
        // Case two: the two nodes are the last two nodes
        // *************************************************************
        if ((leftIndex === this.length - 2)) {
            // Store nodes
            nodeBeforeLeftNode = this.get(this.length - 3);
            leftNode = this.get(leftIndex);
            adjacentRightNode = this.get(this.length - 1);
            // Swap
            nodeBeforeLeftNode.next = adjacentRightNode;
            leftNode.next = null;
            adjacentRightNode.next = leftNode;
            return;
        }
        // *************************************************************
        // Case three: the two nodes are in the middle of the linked list
        // *************************************************************
        // Store nodes
        nodeBeforeLeftNode = this.get(leftIndex - 1);
        leftNode = this.get(leftIndex);
        adjacentRightNode = this.get(leftIndex + 1);
        nodeAfterRightNode = this.get(leftIndex + 2);
        // Swap
        nodeBeforeLeftNode.next = adjacentRightNode;
        leftNode.next = nodeAfterRightNode;
        adjacentRightNode.next = leftNode;
        return;
    };
    LinkedList.prototype.print = function () {
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
// const linkedlist = new LinkedList();
// linkedlist.push(2);
// linkedlist.push(1);
// linkedlist.push(3);
// // console.log(linkedlist.length);
// linkedlist.swap(1);
// linkedlist.print();
