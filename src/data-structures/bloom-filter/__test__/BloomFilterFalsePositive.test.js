import BloomFilter from '../BloomFilter';

// Adapted from http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeID() {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let id = '';

  for (let i = 0; i < 10; i += 1) {
    const randomLength = Math.random() * possible.length;
    const randomIndex = Math.floor(randomLength);
    id += possible.charAt(randomIndex);
  }

  return id;
}

function run10kTrials(numRandomTests = 1000) {
  const bloomFilter = new BloomFilter();
  const mockPeopleIDs = [];

  for (let i = 0; i < 10; i += 1) {
    mockPeopleIDs.push(makeID());
  }

  mockPeopleIDs.forEach(id => bloomFilter.insert(id));
  let numFalsePositives = 0;

  for (let index = 0; index < numRandomTests; index += 1) {
    const randomID = makeID();
    if (bloomFilter.mayContain(randomID)) {
      numFalsePositives += 1;
    }
  }

  return numFalsePositives;
}

function testFilter(numTrials = 100) {
  const results = [];

  for (let i = 0; i < numTrials; i += 1) {
    results.push(run10kTrials());
  }

  const sum = results.reduce((cumulative, next) => cumulative + next, 0);
  return sum / numTrials;
}

describe('Bloom filter false positives', () => {
  const falsePositiveProbability = 0.0174;
  const expectedFalsePositives = falsePositiveProbability * 1000;
  const avgFalsePositives = testFilter();

  it(`Should keep false positives close to an expected value:
  
  # trials = 1000
  k = 3    (hash functions)
  m = 100  (size)
  n = 10   (items inserted)
  
  Using k, m, and n, plugged into https://hur.st/bloomfilter/?n=3&p=&m=18&k=3
  Chance of false positive = 0.017
  
  Expected false positives    =  # trials * chance of false positive
  Expected false positives    => 1000 * ${falsePositiveProbability}
  Expected false positives    => ${expectedFalsePositives}
  
  **************************
  EXPECTED   = ${expectedFalsePositives}
  ACTUAL AVG = ${avgFalsePositives}
  **************************
  
  If the expected and actual numbers are far off, something is wrong.
  Inspect manually.`, () => {
    // We give it a large range to avoid unnecessary failures.
    // If it's working correctly, the value should definitely
    // fall within this range.

    // In over 1,000 test runs, none of them ever come close
    // to falling outside of this range.
    const upperLimit = expectedFalsePositives + 5;
    const lowerLimit = expectedFalsePositives - 5;
    expect(avgFalsePositives).toBeGreaterThan(lowerLimit);
    expect(avgFalsePositives).toBeLessThan(upperLimit);
  });
});
