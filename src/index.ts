class Sorter {
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // Equivalent to above
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;
    let noSwaps: boolean;

    const swap = (arr: number[], idx1: number, idx2: number) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = length; i > 0; i--) {
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          swap(this.collection, j, j + 1);
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
