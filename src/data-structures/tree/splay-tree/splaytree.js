//Splay Tree

// A splay tree is a binary search tree with the additional property that recently accessed elements are quick to access again. Like self-balancing binary search trees, a splay tree performs basic operations such as insertion, look-up and removal in O(log n) amortized time. For many sequences of non-random operations, splay trees perform better than other search trees, even performing better than O(log n) for sufficiently non-random patterns, all without requiring advance knowledge of the pattern.

class Node {
    constructor (key, data) {
      this.key = key;
      this.data = data;
      this.left = null;
      this.right = null;
      this.parent = null;
      this.cnt = 0;
    }
  }
  // Construction of Splay Tree
  export class SplayTree {
    constructor (duplicate = true, comparator = (a, b) => a > b ? 1 : a < b ? -1 : 0) {
      this.comparator = comparator;
      this.duplicate = duplicate;
      this._root = null;
      this._size = 0;
    }
    get root() {
      return this._root;
    }
    get size() {
      return this._size;
    }

    // Update a value in Tree
    update (x) {
      x.cnt = 1;
      if (x.left) x.cnt += x.left.cnt;
      if (x.right) x.cnt += x.right.cnt;
    }

    // Rotate the Tree
    rotate (root, x) {
      let p = x.parent;
      let b = null;
      if (x === p.left) {
        p.left = b = x.right;
        x.right = p;
      } else {
        p.right = b = x.left;
        x.left = p;
      }
      x.parent = p.parent;
      p.parent = x;
      if (b) {
        b.parent = p;
      }
      if (x.parent) {
        if (p === x.parent.left) {
          x.parent.left = x;
        } else {
          x.parent.right = x;
        }
      } else {
        root = x;
      }
      this.update(p);
      this.update(x);
      return root;
    }

    // Splaying the Tree
    splay (root, x) {
      while (x.parent) {
        let p = x.parent;
        let g = p.parent;
        if (g) this.rotate(root, (x === p.left) === (p === g.left) ? p : x);
        root = this.rotate (root, x);
      }
      return root;
    }

    // Insertion of values in Tree
    insert (key, data = {}) {
      let p = this._root;
      let x = null;
      if (!p) {
        x = new Node(key, data);
        this._root = x;
        this._size++;
        return x;
      }
      const TRUE = true;
      while (TRUE) {
        if (!this.duplicate && this.comparator(key, p.key) === 0) return x;
        if (this.comparator(key, p.key) < 0) {
          if (!p.left) {
            x = new Node(key, data);
            p.left = x;
            x.parent = p;
            this._root = this.splay(this._root, x);
            break;
          }
          p = p.left;
        } else {
          if (!p.right) {
            x = new Node(key, data);
            p.right = x;
            x.parent = p;
            this._root = this.splay(this._root, x);
            break;
          }
          p = p.right;
        }
      }
      this._size++;
      return x;
    }

    // Merge Tree
    merge (tree) {
      let p = this._root;
      if (!p && !tree.root) {
        return null;
      }
      if (!tree.root) {
        return p;
      }
      if (!p) {
        this._root = tree.root;
        this._size = tree.size;
        return this._root;
      }
      const TRUE = true;
      while (TRUE) {
        if (this.comparator(tree.root.key, p.key) < 0) {
          if (!p.left) {
            p.left = tree.root;
            tree.root.parent = p;
            this._root = this.splay(this._root, tree.root);
            break;
          }
          p = p.left;
        } else {
          if (!p.right) {
            p.right = tree.root;
            tree.root.parent = p;
            this._root = this.splay(this._root, tree.root);
            break;
          }
          p = p.right;
        }
      }
      this._size += tree.size;
      return tree.root;
    }

    // Load Tree
    load (keys, datas, nTrees = 100) {
      const n = keys.length;
      if (!datas || n !== datas.length) {
        datas = [];
        for (let i = 0; i < n; i++) {
          datas.push({});
        }
      }
      const alloc = n / nTrees | 0;
      const trees = [];
      for (let i = 0; i < nTrees; i++) {
        trees.push(new SplayTree());
        for (let j = 0; j < alloc; j++) {
          trees[i].insert(keys[i*alloc+j], datas[i*alloc+j]);
        }
        this.merge(trees[i]);
      }
      for (let j = nTrees * alloc; j < n; j++) {
        this.insert(keys[j], datas[j]);
      }
    }

    // Find a given key
    find (key) {
      let p = this._root;
      if (!p) return false;
      while (p) {
        if (this.comparator(key, p.key) === 0) break;
        if (this.comparator(key, p.key) < 0) {
          if (!p.left) break;
          p = p.left;
        } else {
          if (!p.right) break;
          p = p.right;
        }
      }
      this._root = this.splay(this._root, p);
      return this.comparator(key, p.key) === 0;
    }

    //Find Kth occurence of a value
    findKth (k) {
      if (k >= this._size) return false;
      let p = this._root;
      let TRUE = true;
      while (TRUE) {
        while (p.left && p.left.cnt > k) p = p.left;
        if (p.left) k -= p.left.cnt;
        if (!(k--)) break;
        p = p.right;
      }
      this._root = this.splay(this._root, p);
      return true;
    }

    //Remove any value
    remove (key) {
      if (!this.find(key)) return false;
      let p = this._root;
      if (p.left) {
        if (p.right) {
          this._root = p.left;
          this._root.parent = null;
          let x = this._root;
          while (x.right) x = x.right;
          x.right = p.right;
          p.right.parent = x;
          p = null;
          this._size--;
          return true;
        }
        this._root = p.left;
        this._root.parent = null;
        p = null;
        this._size--;
        return true;
      }
      if (p.right) {
        this._root = p.right;
        this._root.parent = null;
        p = null;
        this._size--;
        return true;
      }
      p = null;
      this._root = null;
      this._size = 0;
      return true;
    }

    // Clear the Tree
    clear() {
      this._root = null;
      this._size = 0;
      return this;
    }
    keys (order = 0) {
      /*
       * order 0: preOrder
       * order 1: inOrder
       * order 2: postOrder
       */
      function _preOrder (p, ret) {
        ret.push(p.key);
        if (p.left) {
          _preOrder(p.left, ret);
        }
        if (p.right) {
          _preOrder(p.right, ret);
        }
      }
      function _inOrder (p, ret) {
        if (p.left) {
          _inOrder(p.left, ret);
        }
        ret.push(p.key);
        if (p.right) {
          _inOrder(p.right, ret);
        }
      }
      function _postOrder (p, ret) {
        if (p.left) {
          _postOrder(p.left, ret);
        }
        if (p.right) {
          _postOrder(p.right, ret);
        }
        ret.push(p.key);
      }
      const f = [_preOrder, _inOrder, _postOrder];
      let ret = [];
      f[order](this._root, ret);
      return ret;
    }
  }