class SortedList {
  // items devrait être un tableau,
  // length doit être le nombre d'éléments dans le tableau.

  constructor(items, length) {
    this.items = [];
    this.length = 0;

  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items

  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = 0
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    } return sum
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let i = 0, sum = 0, ArrayLen = this.items.length;
      while (i < ArrayLen) {
        sum = sum + this.items[i++];
      }
      return sum / ArrayLen;

    }

  }
}

module.exports = SortedList;

