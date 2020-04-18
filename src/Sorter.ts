// interface Sortable {
//   length: number;
//   compare(leftIndex: number): boolean;
//   swap(leftIndex: number): void;
// }

export abstract class Sorter {
  abstract compare(leftIndex: number): boolean;
  abstract swap(leftIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    let noSwaps: boolean;

    for (let i = length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (this.compare(j)) {
          this.swap(j);
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
  }
}
