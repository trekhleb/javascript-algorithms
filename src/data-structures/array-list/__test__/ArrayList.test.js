import ArrayList from '../ArrayList';

describe('ArrayList', () => {

    it('should create empty array list', () => {
        const list = new ArrayList();
        
        expect(list.isEmpty()).toBe(true);
        expect(list.getSize()).toBe(0);
    });

    it('should prepend value to array list', () => {
        const list = new ArrayList();
        list.prepend(1);

        expect(list.isEmpty()).toBe(false);
        expect(list.getSize()).toBe(1);
        expect(list.toString()).toBe('1');

        list.prepend(2);
        list.prepend(3);

        expect(list.getSize()).toBe(3);
        expect(list.toString()).toBe('3,2,1');
    });

    it('should append value to array list', () => {
        const list = new ArrayList();
        list.append(1);

        expect(list.isEmpty()).toBe(false);
        expect(list.getSize()).toBe(1);
        expect(list.toString()).toBe('1');

        list.append(2);
        list.append(3);

        expect(list.getSize()).toBe(3);
        expect(list.toString()).toBe('1,2,3');
    });

    it('should insert value by index to array list', () => {
        const list = new ArrayList();
        list.append(1);
        list.append(3);

        expect(list.getSize()).toBe(2);
        expect(list.toString()).toBe('1,3');

        list.insert(0, 0);
        list.insert(2, 2);
        list.insert(4, 4);

        expect(list.getSize()).toBe(5);
        expect(list.toString()).toBe('0,1,2,3,4');
    });

    it('should get value by index from array list', () => {
        const list = new ArrayList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.toString()).toBe('1,2,3');
        expect(list.get(0)).toBe(1);
        expect(list.get(1)).toBe(2);
        expect(list.get(2)).toBe(3);
    });

    it('should be able to insert objects to array list', () => {
        const list = new ArrayList();
        list.append({value: 1, key: 'a'});
        list.append({value: 2, key: 'b'});
        list.append({value: 3, key: 'c'});

        expect(list.get(0)).toEqual({value: 1, key: 'a'});
        expect(list.get(1)).toEqual({value: 2, key: 'b'});
        expect(list.get(2)).toEqual({value: 3, key: 'c'});
    });

    it('should delete value from array list', () => {
        const list = new ArrayList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.toString()).toBe('1,2,3');

        list.delete(2);

        expect(list.toString()).toBe('1,3');

        list.delete(1);

        expect(list.toString()).toBe('3');

        list.delete(3);

        expect(list.toString()).toBe('');
        expect(list.isEmpty()).toBe(true);
        expect(list.getSize()).toBe(0);
    });

    it('should delete value by index from array list', () => {
        const list = new ArrayList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);

        expect(list.getSize()).toBe(4);
        expect(list.toString()).toBe('1,2,3,4');
        expect(list.deleteAt(2)).toBe(3);
        expect(list.toString()).toBe('1,2,4');
        expect(list.deleteAt(0)).toBe(1);
        expect(list.toString()).toBe('2,4');
        expect(list.deleteAt(1)).toBe(4);
        expect(list.toString()).toBe('2');
        expect(list.deleteAt(0)).toBe(2);
        expect(list.toString()).toBe('');
        expect(list.isEmpty()).toBe(true);
        expect(list.getSize()).toBe(0);
    });

    it('should reverse array list', () => {
        const list = new ArrayList();
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.toString()).toBe('1,2,3');

        list.reverse();

        expect(list.toString()).toBe('3,2,1');
    });

    it('should show size of array list', () => {
        const list = new ArrayList();

        expect(list.getSize()).toBe(0);

        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.getSize()).toBe(3);
    });

    it('should check if array list is empty', () => {
        const list = new ArrayList();
        
        expect(list.isEmpty()).toBe(true);

        list.append(1);

        expect(list.isEmpty()).toBe(false);
    });
});