import kadanesAlgorithm from '../kadanesAlgorithm'

describe('kadanesAlgorithm', () => {
	it('should calculate maximum subarray sum', () => {
		expect(kadanesAlgorithm([-4,5,-1,2,9,10,-6])).toBe(25);
		expect(kadanesAlgorithm([5,-1,9,7,-6])).toBe(20);
		expect(kadanesAlgorithm([-6,5,-9,14,-16])).toBe(14);
		expect(kadanesAlgorithm([4,5,-10,11,2,-9,1])).toBe(13);
		expect(kadanesAlgorithm([8,-6,10,-6,9,1,4])).toBe(20);
		expect(kadanesAlgorithm([-1,-8,2,7,-3])).toBe(9);
		expect(kadanesAlgorithm([7,-5,3,-8,3,-10,4])).toBe(5);
		expect(kadanesAlgorithm([3,6,-8,-32,5,7,-9,1])).toBe(12);
	})
})