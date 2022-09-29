import MergeSort from '../../sorting/merge-sort/MergeSort';

export default class Knapsack {
  /**
   * @param {KnapsackItem[]} possibleItems
   * @param {number} weightLimit
   */
  constructor(possibleItems, weightLimit) {
    this.selectedItems = [];
    this.weightLimit = weightLimit;
    this.possibleItems = possibleItems;
  }

  sortPossibleItemsByWeight() {
    this.possibleItems = new MergeSort({
      /**
       * @var KnapsackItem itemA
       * @var KnapsackItem itemB
       */
      compareCallback: (itemA, itemB) => {
        if (itemA.weight === itemB.weight) {
          return 0;
        }

        return itemA.weight < itemB.weight ? -1 : 1;
      },
    }).sort(this.possibleItems);
  }

  sortPossibleItemsByValue() {
    this.possibleItems = new MergeSort({
      /**
       * @var KnapsackItem itemA
       * @var KnapsackItem itemB
       */
      compareCallback: (itemA, itemB) => {
        if (itemA.value === itemB.value) {
          return 0;
        }

        return itemA.value > itemB.value ? -1 : 1;
      },
    }).sort(this.possibleItems);
  }

  sortPossibleItemsByValuePerWeightRatio() {
    this.possibleItems = new MergeSort({
      /**
       * @var KnapsackItem itemA
       * @var KnapsackItem itemB
       */
      compareCallback: (itemA, itemB) => {
        if (itemA.valuePerWeightRatio === itemB.valuePerWeightRatio) {
          return 0;
        }

        return itemA.valuePerWeightRatio > itemB.valuePerWeightRatio ? -1 : 1;
      },
    }).sort(this.possibleItems);
  }

  // Solve 0/1 knapsack problem
  // Dynamic Programming approach.
  solveZeroOneKnapsackProblem() {
    // We do two sorts because in case of equal weights but different values
    // we need to take the most valuable items first.
    this.sortPossibleItemsByValue();
    this.sortPossibleItemsByWeight();

    this.selectedItems = [];

    // Create knapsack values matrix.
    const numberOfRows = this.possibleItems.length;
    const numberOfColumns = this.weightLimit;
    const knapsackMatrix = Array(numberOfRows).fill(null).map(() => {
      return Array(numberOfColumns + 1).fill(null);
    });
    const isItemTaken = Array(numberOfRows).fill(false).map(() => {
      return Array(numberOfColumns + 1).fill(false);
    });

    // Fill the first column with zeros since it would mean that there is
    // no items we can add to knapsack in case if weight limitation is zero.
    for (let itemIndex = 0; itemIndex < this.possibleItems.length; itemIndex += 1) {
      knapsackMatrix[itemIndex][0] = 0;
    }

    // Fill the first row with max possible values we would get by just adding
    // or not adding the first item to the knapsack.
    for (let weightIndex = 1; weightIndex <= this.weightLimit; weightIndex += 1) {
      const itemIndex = 0;
      const itemWeight = this.possibleItems[itemIndex].weight;
      const itemValue = this.possibleItems[itemIndex].value;
      knapsackMatrix[itemIndex][weightIndex] = itemWeight <= weightIndex ? itemValue : 0;
      isItemTaken[itemIndex][weightIndex] = (knapsackMatrix[itemIndex][weightIndex] !== 0);
    }

    // Go through combinations of how we may add items to knapsack and
    // define what weight/value we would receive using Dynamic Programming
    // approach.
    for (let itemIndex = 1; itemIndex < this.possibleItems.length; itemIndex += 1) {
      for (let weightIndex = 1; weightIndex <= this.weightLimit; weightIndex += 1) {
        const currentItemWeight = this.possibleItems[itemIndex].weight;
        const currentItemValue = this.possibleItems[itemIndex].value;

        if (currentItemWeight > weightIndex) {
          // In case if item's weight is bigger then currently allowed weight
          // then we can't add it to knapsack and the max possible value we can
          // gain at the moment is the max value we got for previous item.
          knapsackMatrix[itemIndex][weightIndex] = knapsackMatrix[itemIndex - 1][weightIndex];
        } else {
          // Else we need to consider the max value we can gain at this point by adding
          // current value or just by keeping the previous item for current weight.
          knapsackMatrix[itemIndex][weightIndex] = Math.max(
            currentItemValue + knapsackMatrix[itemIndex - 1][weightIndex - currentItemWeight],
            knapsackMatrix[itemIndex - 1][weightIndex],
          );

          isItemTaken[itemIndex][weightIndex] = (knapsackMatrix[itemIndex][weightIndex]
                                                  !== knapsackMatrix[itemIndex - 1][weightIndex]);
        }
      }
    }

    let capacity = this.weightLimit;
    for (let itemIndex = this.possibleItems.length - 1; itemIndex >= 0; itemIndex -= 1) {
      if (isItemTaken[itemIndex][capacity]) {
        this.selectedItems.push(this.possibleItems[itemIndex]);
        capacity -= this.possibleItems[itemIndex].weight;
      }
    }
  }

  // Solve unbounded knapsack problem.
  // Greedy approach.
  solveUnboundedKnapsackProblem() {
    this.sortPossibleItemsByValue();
    this.sortPossibleItemsByValuePerWeightRatio();

    for (let itemIndex = 0; itemIndex < this.possibleItems.length; itemIndex += 1) {
      if (this.totalWeight < this.weightLimit) {
        const currentItem = this.possibleItems[itemIndex];

        // Detect how much of current items we can push to knapsack.
        const availableWeight = this.weightLimit - this.totalWeight;
        const maxPossibleItemsCount = Math.floor(availableWeight / currentItem.weight);

        if (maxPossibleItemsCount > currentItem.itemsInStock) {
          // If we have more items in stock then it is allowed to add
          // let's add the maximum allowed number of them.
          currentItem.quantity = currentItem.itemsInStock;
        } else if (maxPossibleItemsCount) {
          // In case if we don't have specified number of items in stock
          // let's add only items we have in stock.
          currentItem.quantity = maxPossibleItemsCount;
        }

        this.selectedItems.push(currentItem);
      }
    }
  }

  get totalValue() {
    /** @var {KnapsackItem} item */
    return this.selectedItems.reduce((accumulator, item) => {
      return accumulator + item.totalValue;
    }, 0);
  }

  get totalWeight() {
    /** @var {KnapsackItem} item */
    return this.selectedItems.reduce((accumulator, item) => {
      return accumulator + item.totalWeight;
    }, 0);
  }
}
