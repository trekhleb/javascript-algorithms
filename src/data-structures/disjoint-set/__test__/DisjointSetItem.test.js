import DisjointSetItem from '../DisjointSetItem';

describe('DisjointSetItem', () => {
  it('should do basic manipulation with disjoint set item', () => {
    const itemA = new DisjointSetItem('A');
    const itemB = new DisjointSetItem('B');
    const itemC = new DisjointSetItem('C');
    const itemD = new DisjointSetItem('D');

    expect(itemA.getRank()).toBe(0);
    expect(itemA.getChildren()).toEqual([]);
    expect(itemA.getKey()).toBe('A');
    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemA.isRoot()).toBeTruthy();
    expect(itemB.isRoot()).toBeTruthy();

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getRank()).toBe(1);
    expect(itemC.getRank()).toBe(1);

    expect(itemB.getRank()).toBe(0);
    expect(itemD.getRank()).toBe(0);

    expect(itemA.getChildren().length).toBe(1);
    expect(itemC.getChildren().length).toBe(1);

    expect(itemA.getChildren()[0]).toEqual(itemB);
    expect(itemC.getChildren()[0]).toEqual(itemD);

    expect(itemB.getChildren().length).toBe(0);
    expect(itemD.getChildren().length).toBe(0);

    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemB.getRoot()).toEqual(itemA);

    expect(itemC.getRoot()).toEqual(itemC);
    expect(itemD.getRoot()).toEqual(itemC);

    expect(itemA.isRoot()).toBeTruthy();
    expect(itemB.isRoot()).toBeFalsy();
    expect(itemC.isRoot()).toBeTruthy();
    expect(itemD.isRoot()).toBeFalsy();

    itemA.addChild(itemC);

    expect(itemA.isRoot()).toBeTruthy();
    expect(itemB.isRoot()).toBeFalsy();
    expect(itemC.isRoot()).toBeFalsy();
    expect(itemD.isRoot()).toBeFalsy();

    expect(itemA.getRank()).toEqual(3);
    expect(itemB.getRank()).toEqual(0);
    expect(itemC.getRank()).toEqual(1);
  });

  it('should do basic manipulation with disjoint set item with custom key extractor', () => {
    const keyExtractor = (value) => {
      return value.key;
    };

    const itemA = new DisjointSetItem({ key: 'A', value: 1 }, keyExtractor);
    const itemB = new DisjointSetItem({ key: 'B', value: 2 }, keyExtractor);
    const itemC = new DisjointSetItem({ key: 'C', value: 3 }, keyExtractor);
    const itemD = new DisjointSetItem({ key: 'D', value: 4 }, keyExtractor);

    expect(itemA.getRank()).toBe(0);
    expect(itemA.getChildren()).toEqual([]);
    expect(itemA.getKey()).toBe('A');
    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemA.isRoot()).toBeTruthy();
    expect(itemB.isRoot()).toBeTruthy();

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getRank()).toBe(1);
    expect(itemC.getRank()).toBe(1);

    expect(itemB.getRank()).toBe(0);
    expect(itemD.getRank()).toBe(0);

    expect(itemA.getChildren().length).toBe(1);
    expect(itemC.getChildren().length).toBe(1);

    expect(itemA.getChildren()[0]).toEqual(itemB);
    expect(itemC.getChildren()[0]).toEqual(itemD);

    expect(itemB.getChildren().length).toBe(0);
    expect(itemD.getChildren().length).toBe(0);

    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemB.getRoot()).toEqual(itemA);

    expect(itemC.getRoot()).toEqual(itemC);
    expect(itemD.getRoot()).toEqual(itemC);

    expect(itemA.isRoot()).toBeTruthy();
    expect(itemB.isRoot()).toBeFalsy();
    expect(itemC.isRoot()).toBeTruthy();
    expect(itemD.isRoot()).toBeFalsy();

    itemA.addChild(itemC);

    expect(itemA.isRoot()).toBeTruthy();
    expect(itemB.isRoot()).toBeFalsy();
    expect(itemC.isRoot()).toBeFalsy();
    expect(itemD.isRoot()).toBeFalsy();

    expect(itemA.getRank()).toEqual(3);
    expect(itemB.getRank()).toEqual(0);
    expect(itemC.getRank()).toEqual(1);
  });
});
