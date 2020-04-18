import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  // Assuming there is no tail
  head: Node | null = null;

  push(data: number): LinkedList {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    // traverse until reaching the tail
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this;
  }

  get length(): number {
    if (!this.head) return 0;
    let length = 0;
    let current = this.head;
    while (current.next) {
      length++;
      current = current.next;
    }
    return ++length; // because it starts at 0
  }

  get(index: number): Node {
    if (!this.head || index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }
    let count = 0;
    let current = this.head;
    // Solution 1
    while (count !== index) {
      count++;
      if (current.next === null) throw new Error('Index out of bounds');
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
  }

  compare(leftIndex: number): boolean {
    if (!this.head) throw new Error('List is empty');
    return this.get(leftIndex).data > this.get(leftIndex + 1).data;
  }

  // I am only swapping the adjacent nodes here
  swap(leftIndex: number): void {
    if (!this.head) throw new Error('List is empty');
    if (leftIndex === this.length - 1) throw new Error('Can\'t swap');

    let nodeBeforeLeftNode: Node,
      leftNode: Node,
      adjacentRightNode: Node,
      nodeAfterRightNode: Node;
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
  }

  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// const linkedlist = new LinkedList();
// linkedlist.push(2);
// linkedlist.push(1);
// linkedlist.push(3);
// // console.log(linkedlist.length);
// linkedlist.swap(1);
// linkedlist.print();
