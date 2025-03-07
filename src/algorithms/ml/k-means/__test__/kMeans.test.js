import KMeans from '../kMeans';

describe('kMeans', () => {
  it('should throw an error on invalid data', () => {
    expect(() => {
      KMeans();
    }).toThrowError('The data is empty');
  });

  it('should throw an error on inconsistent data', () => {
    expect(() => {
      KMeans([[1, 2], [1]], 2);
    }).toThrowError('Matrices have different shapes');
  });

  it('should find the nearest neighbour', () => {
    const data = [[1, 1], [6, 2], [3, 3], [4, 5], [9, 2], [2, 4], [8, 7]];
    const k = 2;
    const expectedClusters = [0, 1, 0, 1, 1, 0, 1];
    expect(KMeans(data, k)).toEqual(expectedClusters);

    expect(KMeans([[0, 0], [0, 1], [10, 10]], 2)).toEqual(
      [0, 0, 1],
    );
  });

  it('should find the clusters with equal distances', () => {
    const dataSet = [[0, 0], [1, 1], [2, 2]];
    const k = 3;
    const expectedCluster = [0, 1, 2];
    expect(KMeans(dataSet, k)).toEqual(expectedCluster);
  });

  it('should find the nearest neighbour in 3D space', () => {
    const dataSet = [[0, 0, 0], [0, 1, 0], [2, 0, 2]];
    const k = 2;
    const expectedCluster = [1, 1, 0];
    expect(KMeans(dataSet, k)).toEqual(expectedCluster);
  });
});
