class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.pop();
newArray.deleteAtIndex(0);
newArray.push("are");
newArray.push("nice");
newArray.shiftItems(0);

console.log(newArray);

const mergeTwoShortedArray = (array1, array2) => {
  const mergeArray = [...array1, ...array2];
  return mergeArray;
};

// const twoArray = mergeTwoShortedArray([1, 2, 3], [4, 5, 6]);
// console.log(twoArray);

const makeTwoShortedArrayAndMerge = (firstSortedArray, secondSortedArray) => {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < firstSortedArray.length && j < secondSortedArray.length) {
      if (firstSortedArray[i] < secondSortedArray[j]) {
        mergedArray.push(firstSortedArray[i]);
        i++;
      } else {
        mergedArray.push(secondSortedArray[j]);
        j++;
      }
    }
  
    // Add the remaining elements from the firstSortedArray (if any)
    while (i < firstSortedArray.length) {
      mergedArray.push(firstSortedArray[i]);
      i++;
    }
  
    // Add the remaining elements from the secondSortedArray (if any)
    while (j < secondSortedArray.length) {
      mergedArray.push(secondSortedArray[j]);
      j++;
    }
  
    return mergedArray;
  };
  
  const demo = makeTwoShortedArrayAndMerge([1, 4, 6], [2, 3, 5]);
  
  console.log(demo); // Output: [1, 2, 3, 4, 5, 6]


  const containDuplicate = (array) => {
    let duplicate = array[0];
    for(let i = 1; i <= array.length ; i++) {
            if(array[i] === duplicate) {
                return true
            } 
    }

    return false
  }

  const duplicate = containDuplicate([1, 2, 2,6, 4, 5, 3]);
  console.log(duplicate);
