/**
 * Hungarian Algorithm (Kuhn-Munkres Algorithm)
 *
 * The Hungarian algorithm solves the assignment problem in polynomial time O(n³).
 * Given an n×n cost matrix, it finds the optimal assignment of n agents to n tasks
 * such that the total cost is minimized (or total profit is maximized).
 *
 * The algorithm works through the following steps:
 * 1. Subtract row minimums from each row.
 * 2. Subtract column minimums from each column.
 * 3. Cover all zeros with a minimum number of lines.
 * 4. If the number of lines equals n, an optimal assignment exists.
 * 5. Otherwise, adjust the matrix and repeat from step 3.
 *
 * @param {number[][]} costMatrix - An n×n matrix where costMatrix[i][j]
 *   represents the cost of assigning agent i to task j.
 * @return {number[][]} An array of [row, col] pairs representing the optimal assignment.
 */
export default function hungarianAlgorithm(costMatrix) {
  // Validate input.
  if (!costMatrix || costMatrix.length === 0) {
    return [];
  }

  const n = costMatrix.length;

  // Validate that the matrix is square.
  for (let i = 0; i < n; i += 1) {
    if (costMatrix[i].length !== n) {
      throw new Error('Cost matrix must be square (n×n)');
    }
  }

  // Handle trivial 1×1 case.
  if (n === 1) {
    return [[0, 0]];
  }

  // Create a working copy of the cost matrix to avoid mutating the input.
  const matrix = costMatrix.map((row) => [...row]);

  // Step 1: Subtract the row minimum from each row.
  for (let i = 0; i < n; i += 1) {
    const rowMin = Math.min(...matrix[i]);
    for (let j = 0; j < n; j += 1) {
      matrix[i][j] -= rowMin;
    }
  }

  // Step 2: Subtract the column minimum from each column.
  for (let j = 0; j < n; j += 1) {
    let colMin = Infinity;
    for (let i = 0; i < n; i += 1) {
      if (matrix[i][j] < colMin) {
        colMin = matrix[i][j];
      }
    }
    for (let i = 0; i < n; i += 1) {
      matrix[i][j] -= colMin;
    }
  }

  // Initialize cover arrays and assignment tracking.
  const rowCover = new Array(n).fill(false);
  const colCover = new Array(n).fill(false);
  // starred[i][j] = true means zero at (i,j) is starred (part of a potential assignment).
  const starred = Array.from({ length: n }, () => new Array(n).fill(false));
  // primed[i][j] = true means zero at (i,j) is primed.
  const primed = Array.from({ length: n }, () => new Array(n).fill(false));

  // Step 3: Star zeros — find initial independent zeros.
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (matrix[i][j] === 0 && !rowCover[i] && !colCover[j]) {
        starred[i][j] = true;
        rowCover[i] = true;
        colCover[j] = true;
      }
    }
  }

  // Reset covers after initial starring.
  rowCover.fill(false);
  colCover.fill(false);

  /**
   * Cover columns that contain a starred zero.
   * @return {number} The number of covered columns.
   */
  function coverStarredColumns() {
    let count = 0;
    for (let j = 0; j < n; j += 1) {
      for (let i = 0; i < n; i += 1) {
        if (starred[i][j]) {
          colCover[j] = true;
          count += 1;
          break;
        }
      }
    }
    return count;
  }

  /**
   * Find an uncovered zero in the matrix.
   * @return {number[]} [row, col] of the uncovered zero, or [-1, -1] if none found.
   */
  function findUncoveredZero() {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (matrix[i][j] === 0 && !rowCover[i] && !colCover[j]) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }

  /**
   * Find a starred zero in the given row.
   * @param {number} row - The row index to search.
   * @return {number} The column index of the starred zero, or -1 if none.
   */
  function findStarInRow(row) {
    for (let j = 0; j < n; j += 1) {
      if (starred[row][j]) {
        return j;
      }
    }
    return -1;
  }

  /**
   * Find a starred zero in the given column.
   * @param {number} col - The column index to search.
   * @return {number} The row index of the starred zero, or -1 if none.
   */
  function findStarInCol(col) {
    for (let i = 0; i < n; i += 1) {
      if (starred[i][col]) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Find a primed zero in the given row.
   * @param {number} row - The row index to search.
   * @return {number} The column index of the primed zero, or -1 if none.
   */
  function findPrimeInRow(row) {
    for (let j = 0; j < n; j += 1) {
      if (primed[row][j]) {
        return j;
      }
    }
    return -1;
  }

  /**
   * Augment the path: unstar starred zeros in the path and star primed zeros.
   * @param {number[][]} path - Array of [row, col] pairs forming the augmenting path.
   */
  function augmentPath(path) {
    for (let p = 0; p < path.length; p += 1) {
      const [row, col] = path[p];
      starred[row][col] = !starred[row][col];
    }
  }

  /**
   * Clear all primes and reset all covers.
   */
  function clearPrimesAndCovers() {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        primed[i][j] = false;
      }
    }
    rowCover.fill(false);
    colCover.fill(false);
  }

  /**
   * Find the smallest uncovered value in the matrix.
   * @return {number} The smallest uncovered value.
   */
  function findSmallestUncovered() {
    let minVal = Infinity;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (!rowCover[i] && !colCover[j] && matrix[i][j] < minVal) {
          minVal = matrix[i][j];
        }
      }
    }
    return minVal;
  }

  // Main algorithm loop.
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // Step 4: Cover all columns containing a starred zero.
    const coveredColumns = coverStarredColumns();

    // If all columns are covered, we have found an optimal assignment.
    if (coveredColumns >= n) {
      break;
    }

    // Step 5: Find an uncovered zero, prime it, and process.
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const [row, col] = findUncoveredZero();

      if (row === -1) {
        // Step 6: No uncovered zeros. Adjust the matrix.
        // Find the smallest uncovered value.
        const minVal = findSmallestUncovered();

        // Add minVal to every element of covered rows.
        // Subtract minVal from every element of uncovered columns.
        for (let i = 0; i < n; i += 1) {
          for (let j = 0; j < n; j += 1) {
            if (rowCover[i]) {
              matrix[i][j] += minVal;
            }
            if (!colCover[j]) {
              matrix[i][j] -= minVal;
            }
          }
        }
      } else {
        // Prime the uncovered zero.
        primed[row][col] = true;

        const starCol = findStarInRow(row);

        if (starCol !== -1) {
          // There is a starred zero in this row.
          // Cover this row and uncover the column of the starred zero.
          rowCover[row] = true;
          colCover[starCol] = false;
        } else {
          // No starred zero in this row.
          // Construct an augmenting path starting from the primed zero.
          const path = [[row, col]];
          let currentRow = row;
          let currentCol = col;

          // eslint-disable-next-line no-constant-condition
          while (true) {
            // Find a starred zero in the column of the last primed zero.
            const starRow = findStarInCol(currentCol);
            if (starRow === -1) {
              break;
            }
            path.push([starRow, currentCol]);

            // Find a primed zero in the row of the starred zero.
            const primeCol = findPrimeInRow(starRow);
            path.push([starRow, primeCol]);

            currentRow = starRow;
            currentCol = primeCol;
          }

          // Augment the path (swap stars and primes along the path).
          augmentPath(path);

          // Clear primes and covers.
          clearPrimesAndCovers();

          // Go back to step 4.
          break;
        }
      }
    }
  }

  // Extract the assignment from starred zeros.
  const assignment = [];
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (starred[i][j]) {
        assignment.push([i, j]);
      }
    }
  }

  return assignment;
}
