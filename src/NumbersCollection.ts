import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // Getter
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    return this.data[leftIndex] > this.data[leftIndex + 1];
  }

  swap(leftIndex: number): void {
    [this.data[leftIndex], this.data[leftIndex + 1]] = [
      this.data[leftIndex + 1],
      this.data[leftIndex],
    ];
  }
}
