import KNN from '../knn'
describe('KNN', () => {
    it('should throw an error on invalid data', () => {
        const nodata = () => {
            KNN();
        }
        expect(nodata).toThrowError();
    })
    it('should throw an error on invalid labels', () => {
        const nolabels = () => {
            KNN([[1, 1]]);
        }
        expect(nolabels).toThrowError();
    })
    it('should throw an error on not giving classification vector', () => {
        const noclassification = () => {
            KNN([[1, 1]], [1]);
        }
        expect(noclassification).toThrowError();
    })
    it('should throw an error on not giving classification vector', () => {
        const inconsistent = () => {KNN([[1, 1]], [1], [1]);
        }
        expect(inconsistent).toThrowError();
    })
    it('should find the nearest neighbour', () => {
        var data_x = [[1, 1],[2, 2]];
        var data_y = [1, 2];
        expect(KNN(data_x, data_y, [1, 1])).toBe(1);

        var data_x = [[1, 1], [6, 2], [3, 3], [4, 5], [9, 2], [2, 4], [8, 7]]
        var data_y = [1, 2, 1, 2, 1, 2, 1]
        expect(KNN(data_x, data_y, [1.25, 1.25]))
            .toBe(1)
    })
})
