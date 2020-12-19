import kMeans from '../kmeans';

describe('kMeans', () => {
  it('should throw an error on invalid data', () => {
    expect(() => {
      kMeans();
    }).toThrowError('Either dataSet or labels or toClassify were not set');
  });

  it('should throw an error on inconsistent data', () => {
    expect(() => {
      kMeans([[1, 2], [1]], 2);
    }).toThrowError('Inconsistent vector lengths');
  });

  it('should find the nearest neighbour', () => {
    const dataSet = [[1, 1], [6, 2], [3, 3], [4, 5], [9, 2], [2, 4], [8, 7]];
    const k = 2;
    const expectedCluster = [0, 1, 0, 1, 1, 0, 1];
    expect(kMeans(dataSet, k)).toEqual(expectedCluster);
  });

  it('should find the clusters with equal distances', () => {
    const dataSet = [[0, 0], [1, 1], [2, 2]];
    const k = 3;
    const expectedCluster = [0, 1, 2];
    expect(kMeans(dataSet, k)).toEqual(expectedCluster);
  });

  it('should find the nearest neighbour in 3D space', () => {
    const dataSet = [[0, 0, 0], [0, 1, 0], [2, 0, 2]];
    const k = 2;
    const expectedCluster = [1, 1, 0];
    expect(kMeans(dataSet, k)).toEqual(expectedCluster);
  });
});
