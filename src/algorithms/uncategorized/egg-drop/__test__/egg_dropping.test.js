import egg_dropping from '../egg_dropping';

describe('egg_dropping', () => {
	it('should find the minimum drops required to find from which floor the eggs start breaking', () => {
		expect(eggs(2, 6)).toBe(3);
		expect(eggs(2, 100)).toBe(14);
		expect(eggs(3, 100).toBe(9);
		expect(eggs(3, 50)).toBe(7);
		expect(eggs(3, 5000).toBe(32);
		expect(eggs(4, 1000).toBe(13);
		expect(eggs(5, 1000).toBe(11);
		expect(eggs(5, 531).toBe(10);
		expect(eggs(6, 3428).toBe(13);
	});
});