import SplayTree from "../SplayTree";

describe("SplayTree", () => {
  it("should create empty splay tree", () => {
    const splayTree = new SplayTree();
    expect(splayTree.root.value).toBeNull();
    expect(splayTree.isEmpty()).toBe(true);
  });

  it("should insert values into splay tree", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(5);
    splayTree.insert(15);
    splayTree.insert(3);
    splayTree.insert(7);

    expect(splayTree.contains(10)).toBe(true);
    expect(splayTree.contains(5)).toBe(true);
    expect(splayTree.contains(15)).toBe(true);
    expect(splayTree.contains(3)).toBe(true);
    expect(splayTree.contains(7)).toBe(true);
    expect(splayTree.contains(20)).toBe(false);
  });

  it("should splay accessed nodes to root", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(5);
    splayTree.insert(15);
    splayTree.insert(3);
    splayTree.insert(7);

    splayTree.contains(3);
    expect(splayTree.root.value).toBe(3);

    splayTree.contains(15);
    expect(splayTree.root.value).toBe(15);
  });

  it("should find values and splay them to root", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(5);
    splayTree.insert(15);
    splayTree.insert(3);
    splayTree.insert(7);

    const foundValue = splayTree.find(7);
    expect(foundValue).toBe(7);
    expect(splayTree.root.value).toBe(7);

    const notFound = splayTree.find(100);
    expect(notFound).toBeNull();
  });

  it("should remove values from splay tree", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(5);
    splayTree.insert(15);
    splayTree.insert(3);
    splayTree.insert(7);

    expect(splayTree.remove(5)).toBe(true);
    expect(splayTree.contains(5)).toBe(false);
    expect(splayTree.contains(10)).toBe(true);
    expect(splayTree.contains(15)).toBe(true);
    expect(splayTree.contains(3)).toBe(true);
    expect(splayTree.contains(7)).toBe(true);

    expect(splayTree.remove(100)).toBe(false);
  });

  it("should handle empty tree operations", () => {
    const splayTree = new SplayTree();
    
    expect(splayTree.findMin()).toBeNull();
    expect(splayTree.findMax()).toBeNull();
    expect(splayTree.find(10)).toBeNull();
    expect(splayTree.contains(10)).toBe(false);
    expect(splayTree.remove(10)).toBe(false);
    expect(splayTree.getHeight()).toBe(0);
  });

  it("should handle single node tree", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    
    expect(splayTree.contains(10)).toBe(true);
    expect(splayTree.root.value).toBe(10);
    expect(splayTree.findMin()).toBe(10);
    expect(splayTree.findMax()).toBe(10);
    
    expect(splayTree.remove(10)).toBe(true);
    expect(splayTree.contains(10)).toBe(false);
    expect(splayTree.isEmpty()).toBe(true);
  });

  it("should perform zig rotation correctly", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(5);
    
    splayTree.contains(5);
    expect(splayTree.root.value).toBe(5);
    expect(splayTree.root.right.value).toBe(10);
  });

  it("should perform zig-zig rotation correctly", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(5);
    splayTree.insert(3);
    
    splayTree.contains(3);
    expect(splayTree.root.value).toBe(3);
    expect(splayTree.root.right.value).toBe(5);
    expect(splayTree.root.right.right.value).toBe(10);
  });

  it("should perform zig-zag rotation correctly", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(5);
    splayTree.insert(7);
    
    splayTree.contains(7);
    expect(splayTree.root.value).toBe(7);
    expect(splayTree.root.left.value).toBe(5);
    expect(splayTree.root.right.value).toBe(10);
  });

  it("should work with custom comparator", () => {
    const splayTree = new SplayTree((a, b) => {
      if (a === b) return 0;
      return a < b ? 1 : -1;
    });
    
    splayTree.insert(10);
    splayTree.insert(5);
    splayTree.insert(15);
    
    expect(splayTree.root.value).toBe(15);
    expect(splayTree.contains(10)).toBe(true);
    expect(splayTree.contains(5)).toBe(true);
    expect(splayTree.contains(15)).toBe(true);
  });

  it("should handle duplicate values", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(10);
    splayTree.insert(10);
    
    expect(splayTree.contains(10)).toBe(true);
    expect(splayTree.root.value).toBe(10);
  });

  it("should calculate tree height correctly", () => {
    const splayTree = new SplayTree();
    
    expect(splayTree.getHeight()).toBe(0);
    
    splayTree.insert(10);
    expect(splayTree.getHeight()).toBe(1);
    
    splayTree.insert(5);
    splayTree.insert(15);
    expect(splayTree.getHeight()).toBeGreaterThan(1);
  });

  it("should handle string values", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert("apple");
    splayTree.insert("banana");
    splayTree.insert("cherry");
    
    expect(splayTree.contains("apple")).toBe(true);
    expect(splayTree.contains("banana")).toBe(true);
    expect(splayTree.contains("cherry")).toBe(true);
    expect(splayTree.contains("date")).toBe(false);
  });

  it("should maintain splay tree properties after multiple operations", () => {
    const splayTree = new SplayTree();
    
    const values = [20, 10, 30, 5, 15, 25, 35, 3, 7, 13, 17];
    values.forEach(value => splayTree.insert(value));
    
    expect(splayTree.find(13)).toBe(13);
    expect(splayTree.root.value).toBe(13);
    
    expect(splayTree.contains(7)).toBe(true);
    expect(splayTree.root.value).toBe(7);
    
    expect(splayTree.remove(25)).toBe(true);
    expect(splayTree.contains(25)).toBe(false);
    
    expect(splayTree.contains(10)).toBe(true);
    expect(splayTree.contains(30)).toBe(true);
  });

  it("should handle edge cases in findRoot method", () => {
    const splayTree = new SplayTree();
    
    const nullRoot = splayTree.findRoot(null);
    expect(nullRoot.value).toBeNull();
    
    const emptyRoot = splayTree.findRoot(splayTree.root);
    expect(emptyRoot.value).toBeNull();
  });

  it("should handle splay with null or root node", () => {
    const splayTree = new SplayTree();
    
    splayTree.splay(null);
    expect(splayTree.root.value).toBeNull();
    
    splayTree.insert(10);
    splayTree.splay(splayTree.root);
    expect(splayTree.root.value).toBe(10);
  });

  it("should handle toString method", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(10);
    splayTree.insert(5);
    splayTree.insert(15);
    
    const treeString = splayTree.toString();
    expect(treeString).toContain("10");
    expect(treeString).toContain("5");
    expect(treeString).toContain("15");
  });

  it("should handle complex removal scenarios", () => {
    const splayTree = new SplayTree();
    
    splayTree.insert(20);
    splayTree.insert(10);
    splayTree.insert(30);
    splayTree.insert(5);
    splayTree.insert(15);
    splayTree.insert(25);
    splayTree.insert(35);
    
    expect(splayTree.remove(10)).toBe(true);
    expect(splayTree.contains(10)).toBe(false);
    
    expect(splayTree.remove(5)).toBe(true);
    expect(splayTree.contains(5)).toBe(false);
    
    expect(splayTree.remove(35)).toBe(true);
    expect(splayTree.contains(35)).toBe(false);
    
    expect(splayTree.contains(20)).toBe(true);
    expect(splayTree.contains(30)).toBe(true);
    expect(splayTree.contains(15)).toBe(true);
    expect(splayTree.contains(25)).toBe(true);
  });
});
